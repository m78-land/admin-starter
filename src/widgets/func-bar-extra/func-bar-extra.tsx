import React from 'react';
import { FuncItem, Link } from '@m78/admin';
import { Row } from 'm78/layout';

const FuncBarExtra = () => {
  return (
    <>
      <Row>
        <Link id="setting">
          <FuncItem title="设置" icon="⚙" />
        </Link>
        <FuncItem title="帮助" icon="📙" />
      </Row>
    </>
  );
};

export default FuncBarExtra;
