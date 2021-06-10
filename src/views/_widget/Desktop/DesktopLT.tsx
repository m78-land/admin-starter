import React from 'react';
import clsx from 'clsx';
import { Column, Divider, Row } from 'm78/layout';
import { CaretDownOutlined, CaretUpOutlined } from 'm78/icon';
import sty from './Desktop.module.scss';

const DesktopLT = () => {
  return (
    <div className={clsx(sty.gridBox1, sty.box)}>
      <div className={sty.title}>
        <span className="color-title mr-4">✨</span>统计
      </div>

      <Column style={{ height: '100%' }} mainAlign="center">
        <Row crossAlign="start">
          <div className={clsx(sty.infoLayout, 'tr')} style={{ paddingLeft: 0 }}>
            <div className="color-second">日销售额</div>
            <div className={sty.mainFont}>
              <span className="color-second fs-12">￥</span>6217
            </div>
            <div className="fs-12 color-second mt-4">
              日同比
              <span className="fs-12 color-red">
                <CaretUpOutlined />
                4.2%
              </span>
            </div>
          </div>

          <div className={sty.infoLayout} style={{ paddingRight: 0 }}>
            <div className="color-second">注册数</div>
            <div className={sty.mainFont}>
              9321<span className="color-second fs-12">人</span>
            </div>
            <div className="fs-12 color-second mt-4">
              较昨日增长
              <span className="color-red">
                <CaretUpOutlined />
                2.15%
              </span>
            </div>
          </div>
        </Row>

        <Divider margin={0} />

        <Row crossAlign="start">
          <div className={clsx(sty.infoLayout, 'tr')} style={{ paddingLeft: 0 }}>
            <div className="color-second">总销售额</div>
            <div className={sty.mainFont}>
              <span className="color-second fs-12">￥</span>567217
            </div>
            <div className="fs-12 color-second mt-4">
              年总值
              <span className="color-red">
                <CaretUpOutlined />
                ￥67051
              </span>
            </div>
          </div>

          <div className={sty.infoLayout} style={{ paddingRight: 0 }}>
            <div className="color-second">客流量</div>
            <div className={sty.mainFont}>
              1763
              <span className="color-second fs-12">人</span>
            </div>
            <div className="fs-12 color-second mt-4">
              较平均值
              <span className="color-green">
                <CaretDownOutlined />
                2.15%
              </span>
            </div>
          </div>
        </Row>
      </Column>
    </div>
  );
};

export default DesktopLT;
