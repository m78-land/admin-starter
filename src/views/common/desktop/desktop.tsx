import React from 'react';

import clsx from 'clsx';
import { Center, Row } from 'm78/layout';
import { Liquid, Pie, WordCloud } from '@ant-design/charts';
import { liquidConfig, pieBaseConfig, wordCloudBaseConfig } from '@/common/chart-configs';
import AutoFitBox from '@/components/response/auto-fit-box';
import sty from './desktop.module.scss';
import { box4Data, box5Data } from './datas';

console.log(sty);

const Desktop = () => {
  return (
    <div className={clsx(sty.gridWrap, 'm78-scrollbar')}>
      <div className={sty.grid}>
        <div className={sty.gridColumn1}>
          <div className={clsx(sty.gridBox1, sty.box)}>
            <Center>
              <div>
                {/* <div>数据一览</div> */}
                <div className="fs-20">今日</div>
                <Row>
                  <div className={sty.infoLayout}>
                    <div className={clsx(sty.mainFont, 'color-red')}>6217</div>
                    <div className="color-second">销售额</div>
                  </div>
                  <div className={sty.infoLayout}>
                    <div className={clsx(sty.mainFont, 'color-blue')}>9321</div>
                    <div className="color-second">访问量</div>
                  </div>
                  <div className={sty.infoLayout}>
                    <div className={clsx(sty.mainFont, 'color-green')}>73</div>
                    <div className="color-second">注册量</div>
                  </div>
                </Row>
                <div className="fs-20">总计</div>
                <Row>
                  <div className={sty.infoLayout}>
                    <div className={clsx(sty.mainFont, 'color-cyan')}>56217</div>
                    <div className="color-second">销售额</div>
                  </div>
                  <div className={sty.infoLayout}>
                    <div className={clsx(sty.mainFont, 'color-yellow')}>29321</div>
                    <div className="color-second">访问量</div>
                  </div>
                  <div className={sty.infoLayout}>
                    <div className={clsx(sty.mainFont, 'color-purple')}>173</div>
                    <div className="color-second">注册量</div>
                  </div>
                </Row>
              </div>
            </Center>
          </div>
          <div className={clsx(sty.gridBox2, sty.box)}>
            <Center>
              <div>
                <div className="color-second">待审核用户: </div>
                <div className="fs-40 color-green bold">50人</div>
              </div>
            </Center>
          </div>
          <div className={clsx(sty.gridBox3, sty.box)}>
            {/*离销售目标额还差:*/}
            <AutoFitBox>{size => <Liquid {...liquidConfig} {...size} />}</AutoFitBox>
          </div>
        </div>

        <div className={sty.gridColumn2}>
          <div className={sty.gridColumn2Row1}>
            <div className={clsx(sty.gridBox4, sty.box)}>
              {/*<div className={sty.title}>各类别销售比</div>*/}
              <AutoFitBox>
                {size => <Pie {...pieBaseConfig} data={box4Data} {...size} />}
              </AutoFitBox>
            </div>
            <div className={clsx(sty.gridBox5, sty.box)}>
              {/*<div className={sty.title}>热卖产品</div>*/}
              <AutoFitBox>
                {size => <WordCloud {...wordCloudBaseConfig} data={box5Data} {...size} />}
              </AutoFitBox>
            </div>
          </div>
          <div className={clsx(sty.gridBox6, sty.box)}>
            <div>工作台</div>
            头像 | 早上好, XXX | 祝你锦鲤附体！
            <div>职称 | 未读消息数量 4 | 待处理审批 5 | 今日排名 25</div>
            <div>快捷操作 | 入口1 | 入口2 | 入口3 | 入口4 | 添加</div>
          </div>
          <div className={sty.gridColumn2Row3}>
            <div className={clsx(sty.gridBox7, sty.box)}>
              <div>销售额占比分析: 饼图</div>
            </div>
            <div className={clsx(sty.gridBox8, sty.box)}>过期产品: 51</div>
            <div className={clsx(sty.gridBox9, sty.box)}>
              <div>库存信息</div>
              <div>水果类：充足</div>
              <div>熟食类：短缺</div>
              <div>饮料：充足</div>
            </div>
          </div>
        </div>

        <div className={sty.gridColumn3}>
          <div className={clsx(sty.gridBox10, sty.box)}>
            动态:
            <div>xxx 录入了一条入库信息</div>
          </div>
          <div className={clsx(sty.gridBox11, sty.box)}>
            <div>员工考勤状况:(空心饼图或玫瑰图)</div>
            <div>在岗: 7/12</div>
            <div>请假: 4</div>
            <div>离职: 1</div>
          </div>
          <div className={clsx(sty.gridBox12, sty.box)}>
            <div>今日员工销售额</div>
            <div>列表1</div>
            <div>列表1</div>
            <div>列表1</div>
            <div>列表1</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Desktop;
