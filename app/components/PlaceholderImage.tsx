import Image from "next/image";

const ASPECT_RATIOS: Record<string, string> = {
  "16:9": "aspect-video",
  "4:3": "aspect-[4/3]",
  "1:1": "aspect-square",
  phone: "aspect-[9/16] max-w-[280px]",
};

export default function PlaceholderImage({
  label,
  aspectRatio = "16:9",
  src,
  alt,
  className = "",
}: {
  label: string;
  aspectRatio?: "16:9" | "4:3" | "1:1" | "phone";
  src?: string;
  alt?: string;
  className?: string;
}) {
  const ratioClass = ASPECT_RATIOS[aspectRatio] ?? ASPECT_RATIOS["16:9"];

  if (src) {
    return (
      <div className={`relative overflow-hidden rounded-xl ${ratioClass} ${className}`}>
        <Image
          src={src}
          alt={alt ?? label}
          fill
          className="object-cover"
        />
      </div>
    );
  }

  return (
    <div
      className={`flex flex-col items-center justify-center rounded-xl border-2 border-dashed border-white/10 bg-card ${ratioClass} ${className}`}
    >
      <svg
        className="h-10 w-10 text-muted/40"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0 0 22.5 18.75V5.25A2.25 2.25 0 0 0 20.25 3H3.75A2.25 2.25 0 0 0 1.5 5.25v13.5A2.25 2.25 0 0 0 3.75 21Z"
        />
      </svg>
      <p className="mt-3 text-xs text-muted/50 text-center px-4">{label}</p>
    </div>
  );
}
