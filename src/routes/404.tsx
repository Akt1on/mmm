import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/404")({
  component: NotFound,
});

export function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background text-center px-4">
      <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
      <h2 className="text-2xl font-semibold mb-4">Страница не найдена</h2>
      <p className="text-muted-foreground mb-8 max-w-md">
        Возможно, страница была удалена или вы перешли по неверной ссылке.
      </p>
      <Link
        to="/"
        className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full font-semibold hover:bg-primary/90 transition-colors"
      >
        ← На главную
      </Link>
    </div>
  );
}
