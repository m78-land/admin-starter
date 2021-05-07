import React, { useEffect, useRef, useState } from 'react';
import ResizeObserver from 'resize-observer-polyfill';
import debounce from 'lodash/debounce';
import { useFn } from '@lxjx/hooks';
import { Size } from 'm78/popper';
import sty from './auto-fit-box.module.scss';

interface Props {
  children: (size: Size) => React.ReactNode;
}

/** 测量并将所在节点的尺寸通过render children传入， 待测量的父级必须是非常规定位元素, 如 position: relative */
const AutoFitBox = ({ children }: Props) => {
  const elRef = useRef<HTMLDivElement>(null!);

  const [size, setSize] = useState<Size | null>(null);

  const obFn: ResizeObserverCallback = useFn(
    ([entry]: any) => setSize({ width: entry.contentRect.width, height: entry.contentRect.height }),
    fn => debounce(fn, 300),
  );

  useEffect(() => {
    const ro = new ResizeObserver(obFn);

    ro.observe(elRef.current);

    return () => ro.disconnect();
  }, []);

  return (
    <div className={sty.autoFitBox} ref={elRef}>
      {size && children(size)}
    </div>
  );
};

export default AutoFitBox;
