import React from 'react';
import clsx from 'clsx';
import AutoFitBox from '@/components/response/auto-fit-box';
import { Pie, WordCloud } from '@ant-design/charts';
import { pieBaseConfig, wordCloudBaseConfig } from '@/common/chart-configs';
import { box4Data, box5Data } from '@/widgets/desktop/datas';
import sty from './desktop.module.scss';

const DesktopCt = () => {
  return (
    <div className={sty.gridColumn2Row1}>
      <div className={clsx(sty.gridBox4, sty.box)}>
        <div className={sty.title}>
          <span className="color-title mr-4">🥇</span>各类别销售比
        </div>
        <AutoFitBox style={{ top: 24 }}>
          {size => <Pie {...pieBaseConfig} data={box4Data} {...size} />}
        </AutoFitBox>
      </div>
      <div className={clsx(sty.gridBox5, sty.box)}>
        <div className={clsx(sty.title, '__right')}>
          <span className="color-title mr-4">🔥</span>热卖产品
        </div>
        <AutoFitBox style={{ top: 20 }}>
          {size => <WordCloud {...wordCloudBaseConfig} data={box5Data} {...size} />}
        </AutoFitBox>
      </div>
    </div>
  );
};

export default DesktopCt;
