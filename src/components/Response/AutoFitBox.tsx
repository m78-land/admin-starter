import React, { useEffect, useRef, useState } from 'react';
import ResizeObserver from 'resize-observer-polyfill';
import debounce from 'lodash/debounce';
import { useFn } from '@lxjx/hooks';
import { isFunction, Size } from '@lxjx/utils';
import sty from './AutoFitBox.module.scss';

interface Props {
  children: ((size: Size) => React.ReactNode) | React.ReactNode;
  style?: React.CSSProperties;
}

/**
 * 测量并将所在节点的尺寸通过render children传入，待测量的父级必须是非常规定位元素, 如 position: relative
 * */
const AutoFitBox = ({ children, style }: Props) => {
  const elRef = useRef<HTMLDivElement>(null!);

  const isUnmount = useRef(false);

  const [size, setSize] = useState<Size | null>(null);

  const isRenderChild = isFunction(children);

  const obFn: ResizeObserverCallback = useFn(
    ([entry]: any) => {
      if (!isUnmount.current) {
        setSize({ width: entry.contentRect.width, height: entry.contentRect.height });
      }
    },
    fn => debounce(fn, 300),
  );

  useEffect(() => {
    let ro: ResizeObserver;

    if (isRenderChild) {
      ro = new ResizeObserver(obFn);
      ro.observe(elRef.current);
    }

    return () => {
      isUnmount.current = true;
      ro && ro.disconnect();
    };
  }, []);

  return (
    <div className={sty.autoFitBox} style={style} ref={elRef}>
      {isRenderChild ? size && (children as Function)(size) : children}
    </div>
  );
};

export default AutoFitBox;
