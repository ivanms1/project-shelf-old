import React from 'react';

function Index({ children }) {
  return (
    <div
      style={{
        border: '2px solid green',

        overflow: 'auto',
      }}
    >
      {children}
    </div>
  );
}

export default Index;
