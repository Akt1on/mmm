import { useCallback, useRef, useState } from "react";
import { Upload, X, Loader2 } from "lucide-react";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";

const MAX_BYTES = 8 * 1024 * 1024; // 8 MB

export function ImageDropzone({
  value,
  onChange,
}: {
  value?: string;
  onChange: (url: string) => void;
}) {
  const [drag, setDrag] = useState(false);
  const [loading, setLoading] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFile = useCallback(
    async (file: File) => {
      if (!file.type.startsWith("image/")) {
        toast.error("Это не изображение");
        return;
      }
      if (file.size > MAX_BYTES) {
        toast.error("Файл больше 8 МБ");
        return;
      }
      setLoading(true);
      try {
        const ext = (file.name.split(".").pop() || "jpg").toLowerCase();
        const safeExt = /^(jpg|jpeg|png|webp|gif|avif)$/.test(ext) ? ext : "jpg";
        // Unique filename: timestamp + 6 random chars
        const path = `${Date.now()}-${Math.random().toString(36).slice(2, 8)}.${safeExt}`;
        const { error } = await supabase.storage
          .from("cms-images")
          .upload(path, file, {
            cacheControl: "31536000",
            upsert: false,
            contentType: file.type,
          });
        if (error) throw error;
        const { data } = supabase.storage.from("cms-images").getPublicUrl(path);
        // Append cache-busting param so browsers always show the new image
        const freshUrl = `${data.publicUrl}?t=${Date.now()}`;
        onChange(freshUrl);
        toast.success("Изображение загружено");
      } catch (e) {
        console.error(e);
        toast.error("Не удалось загрузить. Убедитесь, что вы вошли как администратор.");
      } finally {
        setLoading(false);
      }
    },
    [onChange],
  );

  const handleRemove = useCallback(
    (e: React.MouseEvent) => {
      e.stopPropagation();
      e.preventDefault();
      onChange("");
    },
    [onChange],
  );

  return (
    <div className="space-y-2">
      <div
        onDragOver={(e) => { e.preventDefault(); setDrag(true); }}
        onDragLeave={() => setDrag(false)}
        onDrop={(e) => {
          e.preventDefault();
          setDrag(false);
          if (loading) return;
          const f = e.dataTransfer.files?.[0];
          if (f) handleFile(f);
        }}
        onClick={() => { if (!loading) inputRef.current?.click(); }}
        className={`relative cursor-pointer rounded-2xl border-2 border-dashed transition-all ${
          drag ? "border-primary bg-primary/5" : "border-border bg-secondary/50"
        } overflow-hidden`}
      >
        {value ? (
          <div className="relative aspect-video">
            <img
              src={value}
              alt=""
              className="size-full object-cover"
              loading="lazy"
              // Prevent browser from serving stale cache
              key={value}
            />
            {/* Loading overlay */}
            {loading && (
              <div className="absolute inset-0 bg-black/50 grid place-items-center">
                <Loader2 className="size-8 text-white animate-spin" />
              </div>
            )}
            {!loading && (
              <button
                type="button"
                onClick={handleRemove}
                className="absolute top-2 right-2 size-8 rounded-full bg-black/70 text-white grid place-items-center hover:bg-black/90 transition"
                aria-label="Убрать изображение"
              >
                <X className="size-4" />
              </button>
            )}
          </div>
        ) : (
          <div className="aspect-video grid place-items-center text-center p-6">
            <div>
              <div className="mx-auto size-12 rounded-2xl bg-gradient-brand grid place-items-center text-white">
                {loading ? <Loader2 className="size-5 animate-spin" /> : <Upload className="size-5" />}
              </div>
              <div className="mt-3 font-semibold">
                {loading ? "Загружаю…" : "Перетащите фото или нажмите"}
              </div>
              <div className="text-xs text-muted-foreground mt-1">
                JPG / PNG / WEBP — до 8 МБ. Хранится в облаке.
              </div>
            </div>
          </div>
        )}
        <input
          ref={inputRef}
          type="file"
          accept="image/*"
          className="hidden"
          onChange={(e) => {
            const f = e.target.files?.[0];
            if (f) handleFile(f);
            // Reset input so the same file can be re-selected after removal
            e.currentTarget.value = "";
          }}
        />
      </div>
    </div>
  );
}

/** Compress an image File and return a base64 data URL (for previews, not upload) */
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
