import React from 'react';
import { M78Admin } from '@m78/admin';
import Desktop from '@/widgets/desktop/desktop';
import FuncBarExtra from '@/widgets/func-bar-extra/func-bar-extra';
import { createSeed } from 'm78/seed';
import { createPermissionPro } from 'm78/permission';
import configSeed from './seed/config.seed';
import taskConfig from './tasks/config';

const PermissionPro = createPermissionPro({
  seed: createSeed(),
});

const App = () => {
  const config = configSeed.useState();

  return (
    <M78Admin
      permission={PermissionPro}
      tasks={taskConfig}
      loading={false}
      funcBarExtra={<FuncBarExtra />}
      desktop={<Desktop />}
      config={config}
      onConfigChange={configSeed.set}
    />
  );
};

export default App;
