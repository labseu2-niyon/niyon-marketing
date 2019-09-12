import React from 'react';

function Pattern() {
  return (
    <svg width={800} height={200}>
      <defs>

        <pattern id="Pattern" x="0" y="0" width=".03" height=".1">
          <circle cx="15" cy="15" r="2.5" fill="#eaeaea" />
        </pattern>
      </defs>

      <rect fill="url(#Pattern)" width={800} height={200} />
    </svg>
  );
}

export default Pattern;
