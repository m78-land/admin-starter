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
        <span className="color-title mr-4">๐</span>ไปๆฅๅๅทฅ้ๅฎๆ่ก
      </div>
      <AutoFitBox style={{ top: 32, right: 4, left: 4 }}>
        <Scroller hideScrollbar scrollFlag>
          <ListView className="p-8" size="small" itemStyle="splitLine">
            <ListViewItem
              leading={<img className="m78a-avatar" src={avatar1} alt="" />}
              title="ๆๅๅ"
              trailing="15023ๅ"
            />
            <ListViewItem
              leading={<img className="m78a-avatar" src={avatar2} alt="" />}
              title="ๅจๆๆ"
              trailing="9513ๅ"
            />
            <ListViewItem
              leading={<img className="m78a-avatar" src={avatar3} alt="" />}
              title="่ตต็ฅ็ฅ"
              trailing="8733ๅ"
            />
            <ListViewItem
              leading={<img className="m78a-avatar" src={avatar4} alt="" />}
              title="้้ณ้ณ"
              trailing="6233ๅ"
            />
            <ListViewItem
              leading={<img className="m78a-avatar" src={avatar5} alt="" />}
              title="้ฉฌไธไธ"
              trailing="6083ๅ"
            />
            <ListViewItem
              leading={<img className="m78a-avatar" src={avatar6} alt="" />}
              title="ๅผ ๆจๆจ"
              trailing="5026ๅ"
            />
            <ListViewItem
              leading={<img className="m78a-avatar" src={avatar7} alt="" />}
              title="่ฎธ้้"
              trailing="4026ๅ"
            />
            <ListViewItem
              leading={<img className="m78a-avatar" src={avatar8} alt="" />}
              title="็ๆๆ"
              trailing="3026ๅ"
            />
          </ListView>
        </Scroller>
      </AutoFitBox>
    </div>
  );
};

export default DesktopRb;
