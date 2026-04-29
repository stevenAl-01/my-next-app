export function SectionHeader({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle: string;
}) {
  return (
    <div className="mb-5">
      <p className="text-xs uppercase tracking-[0.18em] text-cyan-300">{eyebrow}</p>
      <h3 className="mt-2 text-2xl font-semibold">{title}</h3>
      <p className="mt-2 max-w-3xl text-sm text-[var(--app-muted)]">{subtitle}</p>
    </div>
  );
}
