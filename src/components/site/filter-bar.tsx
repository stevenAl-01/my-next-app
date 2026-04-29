import { ReactNode } from "react";

export function FilterBar({
  eyebrow,
  actions,
  children,
}: {
  eyebrow: string;
  actions?: ReactNode;
  children: ReactNode;
}) {
  return (
    <section className="toolbar-panel mb-6">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.18em] text-cyan-300">{eyebrow}</p>
          <p className="mt-2 text-base text-[var(--app-muted)]">
            Gunakan pencarian dan filter untuk mempersempit direktori dengan cepat.
          </p>
        </div>
        {actions ? <div className="flex flex-wrap gap-2">{actions}</div> : null}
      </div>
      <div className="mt-5 space-y-4">{children}</div>
    </section>
  );
}
