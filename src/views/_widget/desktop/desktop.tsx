import React, { useState } from 'react';

import clsx from 'clsx';
import { Center, Divider } from 'm78/layout';
import { Area, Liquid, Pie, TinyArea, WordCloud } from '@ant-design/charts';
import {
  areaBaseConfig,
  hollowPieBaseConfig,
  liquidBaseConfig,
  pieBaseConfig,
  tinyAreaBaseConfig,
  wordCloudBaseConfig,
} from '@/common/chart-configs';
import AutoFitBox from '@/components/response/auto-fit-box';
import { ListView, ListViewItem } from 'm78/list-view';

import avatar1 from '@/assets/mock/1.jpg';
import avatar2 from '@/assets/mock/2.jpg';
import avatar3 from '@/assets/mock/3.jpg';
import avatar4 from '@/assets/mock/4.jpg';
import avatar5 from '@/assets/mock/5.jpg';
import avatar6 from '@/assets/mock/6.jpg';
import avatar7 from '@/assets/mock/7.jpg';
import avatar8 from '@/assets/mock/8.jpg';
import { Scroller } from 'm78/scroller';
import { Link } from '@m78/admin';
import sty from './desktop.module.scss';
import { box2Data, box4Data, box5Data, box7Data, box9Data } from './datas';

const Desktop = () => {
  const [deskOpen, setDeskOpen] = useState(false);

  return (
    <>
      <div className={sty.toggleBtn} onClick={() => setDeskOpen(p => !p)}>
        {deskOpen ? '工作台' : '桌面'}
      </div>

      <div className={clsx(sty.deskWrap, 'm78-scrollbar')}>
        {!deskOpen && (
          <div className={sty.grid}>
            <div className={sty.gridColumn1}>
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
                      <div className={clsx(sty.mainFont, 'color-blue')}>73</div>
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
                      <div className={clsx(sty.mainFont, 'color-green')}>173</div>
                    </div>
                  </div>
                </Center>
              </div>
              <div className={clsx(sty.gridBox2, sty.box)}>
                <div className={sty.title}>
                  <span className="color-title mr-4">📊</span>日访问趋势
                </div>
                <AutoFitBox style={{ top: 40, bottom: 30, left: 12, right: 12 }}>
                  {size => <TinyArea {...tinyAreaBaseConfig} data={box2Data} {...size} />}
                </AutoFitBox>
              </div>
              <div className={clsx(sty.gridBox3, sty.box)}>
                <div className={sty.title}>
                  <span className="color-title mr-4">🌡</span>日销售额完成度
                </div>
                <AutoFitBox>{size => <Liquid {...liquidBaseConfig} {...size} />}</AutoFitBox>
              </div>
            </div>

            <div className={sty.gridColumn2}>
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
              <div className={clsx(sty.gridBox6, sty.box)}>
                <div>
                  <img className="m78a-avatar" src={avatar2} alt="" />
                  <Divider vertical />
                  <span className="fs-20">✨早上好, 周星星, 今天也是充满希望的一天!</span>
                </div>
                <div className="mtb-12 color-second">
                  <span>门店管理员 </span>
                  <Divider vertical />
                  <span>
                    未读消息数量 <a className="fs-md">4</a>
                  </span>
                  <Divider vertical />
                  <span>
                    待处理审批 <a className="fs-md color-red">12</a>
                  </span>
                  <Divider vertical />
                  <span>
                    今日排名 <a className="fs-md">6</a>
                  </span>
                </div>
                <Divider />
                <div className="fs-md">快捷操作</div>
                <AutoFitBox style={{ left: 20, top: 170, right: 20, bottom: 30 }}>
                  <Scroller className="mt-12" scrollFlag hideScrollbar>
                    <Link className={sty.quickLink} id="normal-list">
                      常规列表
                    </Link>
                    <Link className={sty.quickLink} id="text-list">
                      文字列表
                    </Link>
                    <Link className={sty.quickLink} id="picture-list">
                      图片列表
                    </Link>
                    <Link className={sty.quickLink} id="base-form">
                      常规表单
                    </Link>
                    <Link className={sty.quickLink} id="step-form">
                      分步表单
                    </Link>
                    <Link className={sty.quickLink} id="responsive-form">
                      响应式表单
                    </Link>
                    <Link className={sty.quickLink} id="responsive-form">
                      测试功能1
                    </Link>
                    <Link className={sty.quickLink} id="responsive-form">
                      测试功能2
                    </Link>
                    <Link className={sty.quickLink} id="responsive-form">
                      测试功能3
                    </Link>
                    <span className={sty.quickLink}>📌添加</span>
                  </Scroller>
                </AutoFitBox>
              </div>
              <div className={clsx(sty.gridBox7, sty.box)}>
                <div className={sty.title}>
                  <span className="color-title mr-4">📈</span>各类别销售趋势
                </div>
                <AutoFitBox style={{ left: 20, top: 40, right: 20, bottom: 30 }}>
                  {size => <Area {...areaBaseConfig} data={box7Data} {...size} />}
                </AutoFitBox>
              </div>
            </div>

            <div className={sty.gridColumn3}>
              <div className={clsx(sty.gridBox8, sty.box)}>
                <div className={sty.title}>
                  <span className="color-title mr-4">📣</span>动态
                </div>
                <AutoFitBox style={{ top: 32, right: 4, left: 4 }}>
                  <Scroller>
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
                            门店主管 <span className="color-blue">李圆圆</span>{' '}
                            发起了一条新的通告信息
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
              <div className={clsx(sty.gridBox9, sty.box)}>
                <div className={sty.title}>
                  <span className="color-title mr-4">🧑</span>员工在岗状况
                </div>
                <AutoFitBox style={{ right: 30, top: 20 }}>
                  {size => <Pie {...hollowPieBaseConfig} data={box9Data} {...size} />}
                </AutoFitBox>
              </div>
              <div className={clsx(sty.gridBox10, sty.box)}>
                <div className={sty.title}>
                  <span className="color-title mr-4">🎉</span>今日员工销售排行
                </div>
                <AutoFitBox style={{ top: 32, right: 4, left: 4 }}>
                  <Scroller>
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
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Desktop;
