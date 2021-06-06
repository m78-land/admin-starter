import React from 'react';
import clsx from 'clsx';
import AutoFitBox from '@/components/Response/AutoFitBox';
import { Scroller } from 'm78/scroller';
import { ListView, ListViewItem } from 'm78/list-view';
import sty from './Desktop.module.scss';

const DesktopRT = () => {
  return (
    <div className={clsx(sty.gridBox8, sty.box)}>
      <div className={sty.title}>
        <span className="color-title mr-4">📣</span>动态
      </div>
      <AutoFitBox style={{ top: 32, right: 4, left: 4 }}>
        <Scroller hideScrollbar scrollFlag>
          <ListView className="p-8" size="small" itemStyle="splitLine">
            <ListViewItem
              title={
                <span>
                  <span className="color-blue">周星星</span> 回复了你的审批结果
                </span>
              }
              trailing="1分钟前"
            />
            <ListViewItem title="今日销售目标已更新" trailing="4分钟前" />
            <ListViewItem
              title={
                <span>
                  门店主管 <span className="color-blue">李圆圆</span> 发起了一条新的通告信息
                </span>
              }
              trailing="一天前"
            />
            <ListViewItem
              title={
                <span>
                  今日销售目标<span className="color-warn">￥5000</span> 已达成，真棒
                </span>
              }
              trailing="4分钟前"
            />
            <ListViewItem title="关于2021年第二次团建活动的公告" trailing="五天前" />
            <ListViewItem
              title="近一个月有14个客人发出了中底评价，请立即处理"
              trailing="一个月前"
            />
            <ListViewItem title="有新员工入职了! 快去了解一下叭" trailing="半年前" />
            <ListViewItem title="🎉系统正式投入使用，一起庆祝一下吧" trailing="半年前" />
          </ListView>
        </Scroller>
      </AutoFitBox>
    </div>
  );
};

export default DesktopRT;
