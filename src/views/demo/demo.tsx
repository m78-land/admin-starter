import React from 'react';
import { WindowLayout } from '@m78/admin';

const Demo = () => {
  return (
    <WindowLayout>
      <div>
        {Array.from({ length: 20 }).map((item, ind) => (
          <div key={ind}>{ind}</div>
        ))}
      </div>
      <div>
        {Array.from({ length: 20 }).map((item, ind) => (
          <div key={ind}>{ind}</div>
        ))}
      </div>
      <div>
        {Array.from({ length: 20 }).map((item, ind) => (
          <div key={ind}>{ind}</div>
        ))}
      </div>
      <div>
        {Array.from({ length: 20 }).map((item, ind) => (
          <div key={ind}>{ind}</div>
        ))}
      </div>
    </WindowLayout>
  );
};

export default Demo;
