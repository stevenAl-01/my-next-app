import { ReactNode } from "react";

export function SummaryStat({
  value,
  label,
  accent,
}: {
  value: string | number;
  label: string;
  accent?: ReactNode;
}) {
  return (
    <article className="rounded-[1.75rem] border border-[var(--app-border)] bg-[var(--app-surface)] px-5 py-6">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-3xl font-semibold">{value}</p>
          <p className="mt-1 text-base text-[var(--app-muted)]">{label}</p>
        </div>
        {accent ? <div className="text-cyan-300">{accent}</div> : null}
      </div>
    </article>
  );
}
