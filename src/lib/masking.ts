export function maskIdentifier(value?: string) {
  if (!value) return "Tidak tersedia";
  const normalized = value.replace(/\s+/g, "");
  if (normalized.length <= 4) return "********";
  return `${"*".repeat(Math.max(8, normalized.length - 4))}${normalized.slice(-4)}`;
}

export function maskPhone(value?: string) {
  if (!value) return "Tidak tersedia";
  const digits = value.replace(/\D/g, "");
  if (digits.length < 8) return "Tidak tersedia";
  const prefix = digits.startsWith("62") ? `0${digits.slice(2, 4)}` : digits.slice(0, 2);
  const suffix = digits.slice(-4);
  return `${prefix}****${suffix}`;
}

export function maskEmail(value?: string) {
  if (!value || !value.includes("@")) return "Tidak tersedia";
  const [local, domain] = value.split("@");
  if (!local || !domain) return "Tidak tersedia";
  return `${local.charAt(0)}***@${domain}`;
}
