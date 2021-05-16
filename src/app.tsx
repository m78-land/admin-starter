import React from 'react';
import { M78Admin, Auth, Badge, FuncBtn } from '@m78/admin';
import Desktop from '@/views/_widget/desktop/desktop';
import configSeed from './seed/configSeed';
import option from './tasks/option';
import FuncBarExtra from '@/views/_widget/func-bar-extra/func-bar-extra';

Auth.setAuth(['user:cr', 'setting:ud']);

const App = () => {
  const config = configSeed.useState();

  // return <Login />;

  return (
    <M78Admin
      // width="70vw"
      // height="70vh"
      tasks={option}
      // desktopNode={<span>🎉🎉欢迎</span>}
      // footerNode={<div>🎉✨</div>}
      loading={false}
      authNameMap={{
        user: '用户',
        setting: '设置',
      }}
      customAuthKeysMap={{
        b: {
          name: 'batch',
          label: '批处理',
        },
        p: {
          name: 'publish',
          label: '发布内容',
        },
      }}
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
