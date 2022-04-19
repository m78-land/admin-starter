import React from 'react';
import clsx from 'clsx';
import AutoFitBox from '@/components/response/auto-fit-box';
import { TinyArea } from '@ant-design/charts';
import { tinyAreaBaseConfig } from '@/common/chart-configs';
import { box2Data } from '@/widgets/desktop/datas';
import sty from './desktop.module.scss';

const DesktopLc = () => {
  return (
    <div className={clsx(sty.gridBox2, sty.box)}>
      <div className={sty.title}>
        <span className="color-title mr-4">📊</span>日访问趋势
      </div>
      <AutoFitBox style={{ top: 40, bottom: 30, left: 12, right: 12 }}>
        {size => <TinyArea {...tinyAreaBaseConfig} data={box2Data} {...size} />}
      </AutoFitBox>
    </div>
  );
};

export default DesktopLc;
