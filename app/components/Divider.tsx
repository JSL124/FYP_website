export default function Divider({ flip = false }: { flip?: boolean }) {
  return (
    <div
      className="divider-slant"
      style={{
        background: "#1a1a1a",
        transform: flip ? "scaleY(-1)" : undefined,
      }}
    />
  );
}
