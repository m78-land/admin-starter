import React from 'react';
import { M78Admin, Auth, Badge, FuncBtn } from '@m78/admin';
import configSeed from './seed/configSeed';

import tasksOption from './tasks/tasks-option';

Auth.setAuth(['user:cr', 'setting:ud']);

const App = () => {
  const config = configSeed.useState();

  // return <Login />;

  return (
    <M78Admin
      // width="70vw"
      // height="70vh"
      tasks={tasksOption}
      // desktopNode={<span>🎉🎉欢迎</span>}
      // footerNode={<div>🎉✨</div>}
      loading={false}
      funcBarExtraNode={
        <>
          <FuncBtn text="设置" icon="⚙" small />
          <FuncBtn text="帮助中心" icon="📙" small />
          <FuncBtn
            text="LXJ"
            extraNode={
              <Badge color="red" out>
                23
              </Badge>
            }
            circle
          />
        </>
      }
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
      // authSeed={authSeed}
      // beforeTaskEach={opt => {
      //   if (opt.id === 'role1') {
      //     Message.tips({ content: '错误' });
      //     return false;
      //   }
      //   return true;
      // }}
      config={config}
      onConfigChange={conf => {
        configSeed.setState(conf);
        console.log('config change: ', conf);
      }}
    />
  );
};

export default App;
