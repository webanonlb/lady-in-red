type Props = {
  size?: number;
  className?: string;
  stroke?: string;
  fill?: string;
};

/**
 * Classic Circle CC monogram — two interlocking C glyphs inside a
 * gold circle. Pure SVG, scalable, no external font dependency.
 */
export default function Monogram({
  size = 56,
  className = "",
  stroke = "currentColor",
  fill = "none",
}: Props) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      className={className}
      aria-hidden
    >
      {/* outer ring */}
      <circle cx="50" cy="50" r="46" stroke={stroke} strokeWidth="1.2" fill={fill} />
      {/* inner C glyph */}
      <path
        d="M64 33 A20 20 0 1 0 64 67"
        stroke={stroke}
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
      />
      {/* second C glyph (offset) */}
      <path
        d="M55 38 A15 15 0 1 0 55 62"
        stroke={stroke}
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
        opacity="0.55"
      />
    </svg>
  );
}
