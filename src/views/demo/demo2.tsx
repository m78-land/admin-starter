import React from 'react';
import { Link } from '@m78/admin';
import { Button } from 'm78/button';

const Demo2 = () => {
  return (
    <div>
      <h2>Demo2</h2>
      <Link id="demo1">
        <Button>demo1</Button>
      </Link>
      <Link id="demo3">
        <Button>demo3</Button>
      </Link>
      <Link id="demo4">
        <Button>demo4</Button>
      </Link>
      <Link id="demo5">
        <Button>demo5</Button>
      </Link>
      <Link id="demo6">
        <Button>demo6</Button>
      </Link>
    </div>
  );
};

export default Demo2;
