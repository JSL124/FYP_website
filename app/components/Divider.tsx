export default function Divider({ flip = false }: { flip?: boolean }) {
  return (
    <div
      className="divider-slant"
      style={{
        background: "var(--dark-card)",
        transform: flip ? "scaleY(-1)" : undefined,
      }}
    />
  );
}
