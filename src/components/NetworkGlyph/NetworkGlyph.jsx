const NODES = [
  [100, 14], [172, 56], [172, 144], [100, 186], [28, 144], [28, 56],
  [100, 78], [136, 100], [100, 122], [64, 100],
]

const EDGES = [
  [0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 0],
  [0, 6], [1, 6], [1, 7], [2, 7], [2, 8], [3, 8], [3, 9], [4, 9], [4, 5], [5, 6],
  [6, 7], [7, 8], [8, 9], [9, 6],
]

export default function NetworkGlyph({ className, glow = false }) {
  return (
    <svg
      viewBox="0 0 200 200"
      className={className}
      role="img"
      aria-label="Network glyph"
      fill="none"
    >
      {glow && (
        <defs>
          <filter id="glyphGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
      )}
      <g stroke="currentColor" strokeWidth="1" opacity="0.55" filter={glow ? 'url(#glyphGlow)' : undefined}>
        {EDGES.map(([a, b], i) => (
          <line key={i} x1={NODES[a][0]} y1={NODES[a][1]} x2={NODES[b][0]} y2={NODES[b][1]} />
        ))}
      </g>
      <g fill="currentColor">
        {NODES.map(([x, y], i) => (
          <circle key={i} cx={x} cy={y} r={i < 6 ? 4 : 2.5} />
        ))}
      </g>
    </svg>
  )
}
