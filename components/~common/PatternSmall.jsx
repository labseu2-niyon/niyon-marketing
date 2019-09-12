import React from 'react';

function Pattern() {
  return (
    <svg width={400} height={90}>
      <defs>

        <pattern id="PatternSmall" x="0" y="0" width=".05" height=".15">
          <circle cx="2" cy="2" r="2" fill="#eaeaea" />
        </pattern>
      </defs>

      <rect fill="url(#PatternSmall)" width={400} height={80} />
    </svg>
  );
}

export default Pattern;
