import React from 'react';
import { Badge, FuncBtn } from '@m78/admin';

const FuncBarExtra = () => {
  return (
    <>
      <FuncBtn text="设置" icon="⚙" small />
      <FuncBtn text="帮助中心" icon="📙" small />
      <FuncBtn
        text="LXJ"
        extraNode={
          <Badge color="red" out>
            23
          </Badge>
        }
        circle
      />
    </>
  );
};

export default FuncBarExtra;
