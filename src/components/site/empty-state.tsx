export function EmptyState({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-[1.75rem] border border-dashed border-[var(--app-border)] bg-[var(--app-surface)] p-8 text-center">
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="mt-2 text-base text-[var(--app-muted)]">{description}</p>
    </div>
  );
}
