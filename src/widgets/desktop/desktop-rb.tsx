import React from 'react';
import clsx from 'clsx';
import AutoFitBox from '@/components/response/auto-fit-box';
import { Scroller } from 'm78/scroller';
import { ListView, ListViewItem } from 'm78/list-view';
import avatar1 from '@/assets/mock/1.jpg';
import avatar2 from '@/assets/mock/2.jpg';
import avatar3 from '@/assets/mock/3.jpg';
import avatar4 from '@/assets/mock/4.jpg';
import avatar5 from '@/assets/mock/5.jpg';
import avatar6 from '@/assets/mock/6.jpg';
import avatar7 from '@/assets/mock/7.jpg';
import avatar8 from '@/assets/mock/8.jpg';
import sty from './desktop.module.scss';

const DesktopRb = () => {
  return (
    <div className={clsx(sty.gridBox10, sty.box)}>
      <div className={sty.title}>
        <span className="color-title mr-4">🎉</span>今日员工销售排行
      </div>
      <AutoFitBox style={{ top: 32, right: 4, left: 4 }}>
        <Scroller hideScrollbar scrollFlag>
          <ListView className="p-8" size="small" itemStyle="splitLine">
            <ListViewItem
              leading={<img className="m78a-avatar" src={avatar1} alt="" />}
              title="李圆圆"
              trailing="15023元"
            />
            <ListViewItem
              leading={<img className="m78a-avatar" src={avatar2} alt="" />}
              title="周星星"
              trailing="9513元"
            />
            <ListViewItem
              leading={<img className="m78a-avatar" src={avatar3} alt="" />}
              title="赵玥玥"
              trailing="8733元"
            />
            <ListViewItem
              leading={<img className="m78a-avatar" src={avatar4} alt="" />}
              title="郑阳阳"
              trailing="6233元"
            />
            <ListViewItem
              leading={<img className="m78a-avatar" src={avatar5} alt="" />}
              title="马东东"
              trailing="6083元"
            />
            <ListViewItem
              leading={<img className="m78a-avatar" src={avatar6} alt="" />}
              title="张晨晨"
              trailing="5026元"
            />
            <ListViewItem
              leading={<img className="m78a-avatar" src={avatar7} alt="" />}
              title="许青青"
              trailing="4026元"
            />
            <ListViewItem
              leading={<img className="m78a-avatar" src={avatar8} alt="" />}
              title="王暖暖"
              trailing="3026元"
            />
          </ListView>
        </Scroller>
      </AutoFitBox>
    </div>
  );
};

export default DesktopRb;
