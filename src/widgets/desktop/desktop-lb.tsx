import React from 'react';
import clsx from 'clsx';
import AutoFitBox from '@/components/response/auto-fit-box';
import { Liquid } from '@ant-design/charts';
import { liquidBaseConfig } from '@/common/chart-configs';
import sty from './desktop.module.scss';

const DesktopLb = () => {
  return (
    <div className={clsx(sty.gridBox3, sty.box)}>
      <div className={sty.title}>
        <span className="color-title mr-4">🌡</span>日销售额完成度
      </div>
      <AutoFitBox>{size => <Liquid {...liquidBaseConfig} {...size} />}</AutoFitBox>
    </div>
  );
};

export default DesktopLb;
