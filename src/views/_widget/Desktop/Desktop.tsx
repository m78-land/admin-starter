import React, { useState } from 'react';

import clsx from 'clsx';
import bg from '@/assets/bg.png';
import configSeed from '@/seed/configSeed';
import DesktopLT from '@/views/_widget/Desktop/DesktopLT';
import DesktopLC from '@/views/_widget/Desktop/DesktopLC';
import DesktopLB from '@/views/_widget/Desktop/DesktopLB';
import DesktopCT from '@/views/_widget/Desktop/DesktopCT';
import DesktopCC from '@/views/_widget/Desktop/DesktopCC';
import DesktopCB from '@/views/_widget/Desktop/DesktopCB';
import DesktopRT from '@/views/_widget/Desktop/DesktopRT';
import DesktopRC from '@/views/_widget/Desktop/DesktopRC';
import DesktopRB from '@/views/_widget/Desktop/DesktopRB';
import sty from './Desktop.module.scss';

const Desktop = () => {
  const config = configSeed.useState(state => state);

  function renderWorkbench() {
    return (
      <div className={clsx(sty.deskWrap, 'm78-scrollbar')}>
        <div className={sty.grid}>
          <div className={sty.gridColumn1}>
            <DesktopLT />

            <DesktopLC />

            <DesktopLB />
          </div>

          <div className={sty.gridColumn2}>
            <DesktopCT />

            <DesktopCC />

            <DesktopCB />
          </div>

          <div className={sty.gridColumn3}>
            <DesktopRT />

            <DesktopRC />

            <DesktopRB />
          </div>
        </div>
      </div>
    );
  }

  function renderDesk() {
    return (
      <img
        className={sty.deskWrap}
        style={{
          opacity: (config.deskOpacity || 40) / 100,
          pointerEvents: 'none',
          userSelect: 'none',
        }}
        src={config.deskBg || bg}
        alt="bg"
      />
    );
  }

  const deskMode = config.deskMode;

  return (
    <>
      <div
        className={sty.toggleBtn}
        onClick={() =>
          configSeed.setState({
            deskMode: !deskMode,
          })
        }
      >
        {deskMode ? '工作台' : '桌面'}
      </div>

      {deskMode ? renderDesk() : renderWorkbench()}
    </>
  );
};

export default Desktop;
