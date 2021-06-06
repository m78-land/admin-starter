import React from 'react';
import clsx from 'clsx';
import { Center, Divider } from 'm78/layout';
import sty from './Desktop.module.scss';

const DesktopLT = () => {
  return (
    <div className={clsx(sty.gridBox1, sty.box)}>
      <div className={sty.title}>
        <span className="color-title mr-4">✨</span>统计
      </div>
      <Center>
        <div>
          {/* <div>数据一览</div> */}
          <div className={sty.infoLayout}>
            <div className="color-second">销售额</div>
            <div className={clsx(sty.mainFont, 'color-cyan')}>¥6217</div>
          </div>
          <div className={sty.infoLayout}>
            <div className="color-second">访问量</div>
            <div className={clsx(sty.mainFont, 'color-purple')}>9321</div>
          </div>
          <div className={sty.infoLayout}>
            <div className="color-second">注册量</div>
            <div className={clsx(sty.mainFont, 'color-blue')}>12</div>
          </div>

          <Divider />

          <div className={sty.infoLayout}>
            <div className="color-second">总销售额</div>
            <div className={clsx(sty.mainFont, 'color-red')}>¥56217</div>
          </div>
          <div className={sty.infoLayout}>
            <div className="color-second">总访问量</div>
            <div className={clsx(sty.mainFont, 'color-orange')}>29321</div>
          </div>
          <div className={sty.infoLayout}>
            <div className="color-second">总注册量</div>
            <div className={clsx(sty.mainFont, 'color-green')}>873</div>
          </div>
        </div>
      </Center>
    </div>
  );
};

export default DesktopLT;
