import { ReactNode } from "react";

export function PageTitle({
  title,
  subtitle,
  actions,
}: {
  title: string;
  subtitle: string;
  actions?: ReactNode;
}) {
  return (
    <section className="mb-8 flex flex-col gap-4 rounded-2xl border border-[var(--app-border)] bg-[var(--app-surface)] p-6 shadow-sm backdrop-blur">
      <div className="space-y-2">
        <h2 className="text-3xl font-semibold tracking-tight text-[var(--app-fg)]">{title}</h2>
        <p className="max-w-3xl text-[var(--app-muted)]">{subtitle}</p>
      </div>
      {actions}
    </section>
  );
}
