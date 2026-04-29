import { ReactNode } from "react";

export function DetailHero({
  eyebrow,
  title,
  subtitle,
  meta,
  actions,
}: {
  eyebrow: string;
  title: string;
  subtitle: string;
  meta: ReactNode;
  actions?: ReactNode;
}) {
  return (
    <section className="rounded-[2rem] border border-cyan-300/20 bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.16),transparent_34%),linear-gradient(145deg,#020617_0%,#0f172a_42%,#082f49_100%)] p-6 shadow-xl shadow-cyan-950/20 lg:p-8">
      <p className="text-xs uppercase tracking-[0.18em] text-cyan-300">{eyebrow}</p>
      <h1 className="mt-2 text-3xl font-semibold text-white">{title}</h1>
      <p className="mt-3 max-w-3xl text-sm text-slate-300">{subtitle}</p>
      <div className="mt-5 flex flex-wrap gap-3 text-sm text-slate-200">{meta}</div>
      {actions ? <div className="mt-6 flex flex-wrap gap-3">{actions}</div> : null}
    </section>
  );
}
