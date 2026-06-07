// Compress an image File to base64 (max width, JPEG quality)
export async function fileToCompressedBase64(
  file: File,
  maxWidth = 1600,
  quality = 0.82,
): Promise<string> {
  const dataUrl = await new Promise<string>((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });

  const img = await new Promise<HTMLImageElement>((resolve, reject) => {
    const el = new Image();
    el.onload = () => resolve(el);
    el.onerror = reject;
    el.src = dataUrl;
  });

  const ratio = Math.min(1, maxWidth / img.width);
  const w = Math.round(img.width * ratio);
  const h = Math.round(img.height * ratio);
  const canvas = document.createElement("canvas");
  canvas.width = w;
  canvas.height = h;
  const ctx = canvas.getContext("2d");
  if (!ctx) return dataUrl;
  ctx.drawImage(img, 0, 0, w, h);
  return canvas.toDataURL("image/jpeg", quality);
}

/** Extract the storage path from a Supabase public URL */
export function extractStoragePath(url: string): string | null {
  try {
    const u = new URL(url);
    // Supabase public URL format: .../storage/v1/object/public/cms-images/<path>
    const match = u.pathname.match(/\/storage\/v1\/object\/public\/cms-images\/(.+)/);
    if (!match) return null;
    // Strip any query params from the path
    return match[1].split("?")[0];
  } catch {
    return null;
  }
}
