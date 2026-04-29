import { ReactNode } from "react";

export function DirectoryCard({
  header,
  body,
  footer,
}: {
  header: ReactNode;
  body: ReactNode;
  footer?: ReactNode;
}) {
  return (
    <article className="rounded-[1.75rem] border border-[var(--app-border)] bg-[var(--app-surface)] p-5 shadow-sm">
      <div className="space-y-4">
        {header}
        {body}
        {footer ? <div className="pt-2">{footer}</div> : null}
      </div>
    </article>
  );
}
