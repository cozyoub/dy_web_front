export function formatIssueLabel(dateStr) {
  if (!dateStr) return "-";
  const d = new Date(dateStr);
  if (Number.isNaN(d.getTime())) return "-";
  return `${d.getFullYear()}년 ${d.getMonth() + 1}월호`;
}