import React from 'react';
import clsx from 'clsx';
import AutoFitBox from '@/components/Response/AutoFitBox';
import { Pie } from '@ant-design/charts';
import { hollowPieBaseConfig } from '@/common/chart-configs';
import { box9Data } from '@/views/_widget/Desktop/datas';
import sty from './Desktop.module.scss';

const DesktopRC = () => {
  return (
    <div className={clsx(sty.gridBox9, sty.box)}>
      <div className={sty.title}>
        <span className="color-title mr-4">🧑</span>员工在岗状况
      </div>
      <AutoFitBox style={{ right: 30, top: 20 }}>
        {size => <Pie {...hollowPieBaseConfig} data={box9Data} {...size} />}
      </AutoFitBox>
    </div>
  );
};

export default DesktopRC;
