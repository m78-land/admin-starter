import React from 'react';
import { M78Admin } from '@m78/admin';
import Desktop from '@/views/_widget/Desktop/Desktop';
import FuncBarExtra from '@/views/_widget/FuncBarExtra/FuncBarExtra';
import { createSeed } from 'm78/seed';
import { createAuthPro } from 'm78/auth';
import configSeed from './seed/configSeed';
import taskConfig from './tasks/config';

const AuthPro = createAuthPro({
  seed: createSeed(),
});

const App = () => {
  const config = configSeed.useState();

  // return <Login />;

  return (
    <M78Admin
      authPro={AuthPro}
      // width="70vw"
      // height="70vh"
      tasks={taskConfig}
      // desktopNode={<span>🎉🎉欢迎</span>}
      // footerNode={<div>🎉✨</div>}
      loading={false}
      funcBarExtraNode={<FuncBarExtra />}
      desktopNode={<Desktop />}
      // authSeed={authSeed}
      // beforeTaskEach={opt => {
      //   if (opt.id === 'role1') {
      //     Message.tips({ content: '错误' });
      //     return false;
      //   }
      //   return true;
      // }}
      config={config}
      onConfigChange={configSeed.setState}
    />
  );
};

export default App;
