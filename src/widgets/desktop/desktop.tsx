import React from 'react';

import clsx from 'clsx';
import bg from '@/assets/bg.png';
import configSeed, { DeskType } from '@/seed/config.seed';
import DesktopLt from '@/widgets/desktop/desktop-lt';
import DesktopLc from '@/widgets/desktop/desktop-lc';
import DesktopLb from '@/widgets/desktop/desktop-lb';
import DesktopCt from '@/widgets/desktop/desktop-ct';
import DesktopCc from '@/widgets/desktop/desktop-cc';
import DesktopCb from '@/widgets/desktop/desktop-cb';
import DesktopRt from '@/widgets/desktop/desktop-rt';
import DesktopRc from '@/widgets/desktop/desktop-rc';
import DesktopRb from '@/widgets/desktop/desktop-rb';
import sty from './desktop.module.scss';

const Desktop = () => {
  const config = configSeed.useState(state => state);

  function renderWorkbench() {
    return (
      <div className={clsx(sty.deskWrap, 'm78-scrollbar')}>
        <div className={sty.grid}>
          <div className={sty.gridColumn1}>
            <DesktopLt />

            <DesktopLc />

            <DesktopLb />
          </div>

          <div className={sty.gridColumn2}>
            <DesktopCt />

            <DesktopCc />

            <DesktopCb />
          </div>

          <div className={sty.gridColumn3}>
            <DesktopRt />

            <DesktopRc />

            <DesktopRb />
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

  const isDesk = config.deskType === 'desk';

  return (
    <>
      <div
        className={sty.toggleBtn}
        onClick={() =>
          configSeed.set({
            deskType: isDesk ? DeskType.workbench : DeskType.desk,
          })
        }
      >
        {isDesk ? '工作台' : '桌面'}
      </div>

      {isDesk ? renderDesk() : renderWorkbench()}
    </>
  );
};

export default Desktop;
