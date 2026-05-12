type Props = {
  size?: number;
  className?: string;
  color?: string;
};

/**
 * Classic Circle CC monogram — two concentric serif "C" arcs nested
 * inside a champagne-gold circle. Both C glyphs share the same
 * geometric center as the outer ring (60, 60) so the mark reads as
 * perfectly balanced at every size.
 *
 * Geometry:
 *   - Outer ring   :  cx=60 cy=60 r=55
 *   - Subtle inner :  cx=60 cy=60 r=51 (hairline accent)
 *   - Back C arc   :  cx=60 cy=60 r=26, 60° opening to the right
 *   - Front C arc  :  cx=60 cy=60 r=14, 60° opening to the right
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
      <circle
        cx="60"
        cy="60"
        r="51"
        stroke={color}
        strokeWidth="0.5"
        opacity="0.45"
      />

      {/* Back C — bigger arc, lower opacity, opens right.
          Endpoints at 30° above/below x-axis, 300° sweep counter-clockwise.
          Start: (60 + 26·cos30°, 60 - 26·sin30°) = (82.52, 47)
          End:   (60 + 26·cos30°, 60 + 26·sin30°) = (82.52, 73) */}
      <path
        d="M 82.52 47 A 26 26 0 1 0 82.52 73"
        stroke={color}
        strokeWidth="6.5"
        strokeLinecap="round"
        fill="none"
        opacity="0.55"
      />

      {/* Front C — smaller, full opacity, also opens right, nested concentrically.
          Endpoints at 30° above/below, r=14
          Start: (60 + 14·cos30°, 60 - 14·sin30°) = (72.12, 53)
          End:   (60 + 14·cos30°, 60 + 14·sin30°) = (72.12, 67) */}
      <path
        d="M 72.12 53 A 14 14 0 1 0 72.12 67"
        stroke={color}
        strokeWidth="5"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}
