import React from 'react';
import clsx from 'clsx';
import AutoFitBox from '@/components/response/auto-fit-box';
import { Area } from '@ant-design/charts';
import { areaBaseConfig } from '@/common/chart-configs';
import { box7Data } from '@/widgets/desktop/datas';
import sty from './desktop.module.scss';

const DesktopCb = () => {
  return (
    <div className={clsx(sty.gridBox7, sty.box)}>
      <div className={sty.title}>
        <span className="color-title mr-4">📈</span>各类别销售趋势
      </div>
      <AutoFitBox style={{ left: 20, top: 40, right: 20, bottom: 30 }}>
        {size => <Area {...areaBaseConfig} data={box7Data} {...size} />}
      </AutoFitBox>
    </div>
  );
};

export default DesktopCb;
