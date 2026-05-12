type Props = {
  size?: number;
  className?: string;
  color?: string;
};

/**
 * Classic Circle CC monogram — two interlocking serif "C" glyphs
 * inside a champagne-gold circle. Bold strokes for readability at any
 * size; no clipPath ids (so multiple instances on the same page do
 * not collide).
 */
export default function Monogram({
  size = 56,
  className = "",
  color = "currentColor",
}: Props) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 120 120"
      className={className}
      aria-hidden
      fill="none"
    >
      {/* Outer ring */}
      <circle cx="60" cy="60" r="55" stroke={color} strokeWidth="2" />
      <circle cx="60" cy="60" r="51" stroke={color} strokeWidth="0.5" opacity="0.45" />

      {/* Back C (slightly larger, lower opacity, shifted left) — opens right */}
      <path
        d="M 78 32 A 28 28 0 1 0 78 88"
        stroke={color}
        strokeWidth="6.5"
        strokeLinecap="round"
        fill="none"
        opacity="0.55"
      />

      {/* Front C (smaller, full opacity, shifted right) — opens right, nested */}
      <path
        d="M 86 44 A 17 17 0 1 0 86 76"
        stroke={color}
        strokeWidth="5"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}
