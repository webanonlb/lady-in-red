import Image from "next/image";

type Props = {
  size?: number;
  className?: string;
  /** Kept for API compatibility with the previous SVG monogram. Ignored. */
  color?: string;
};

/**
 * Beirut Classic Circle (BCC) monogram — raster mark with transparent
 * background. Lives in `public/logo-mark.png` (square, 1636x1636, alpha).
 */
export default function Monogram({
  size = 56,
  className = "",
}: Props) {
  return (
    <Image
      src="/logo-mark.png"
      alt="Beirut Classic Circle monogram"
      width={size}
      height={size}
      priority
      className={className}
      style={{ width: size, height: size }}
    />
  );
}
