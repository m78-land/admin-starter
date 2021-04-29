import React from 'react';
import { WindowLayout, WindowLayoutSection } from '@m78/admin';

const Demo1 = () => {
  return (
    <WindowLayout>
      <WindowLayoutSection label="内容区域1">
        {Array.from({ length: 20 }).map((item, ind) => (
          <div key={ind}>{ind}</div>
        ))}
      </WindowLayoutSection>
      <WindowLayoutSection label="内容区域2">
        {Array.from({ length: 20 }).map((item, ind) => (
          <div key={ind}>{ind}</div>
        ))}
      </WindowLayoutSection>
      <WindowLayoutSection label="内容区域3">
        {Array.from({ length: 20 }).map((item, ind) => (
          <div key={ind}>{ind}</div>
        ))}
      </WindowLayoutSection>
      <WindowLayoutSection label="内容区域4">
        {Array.from({ length: 20 }).map((item, ind) => (
          <div key={ind}>{ind}</div>
        ))}
      </WindowLayoutSection>
    </WindowLayout>
  );
};

export default Demo1;
