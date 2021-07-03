import { TaskOpt } from '@m78/admin';
import React from 'react';

const formSize = {
  width: 780,
  height: 620,
};

const config: TaskOpt = [
  {
    name: '列表',
    children: [
      {
        id: 'normal-list',
        name: '常规列表',
        icon: '📜',
        component: React.lazy(() => import('../views/List/NormalListExample')),
      },
      {
        id: 'text-list',
        name: '文字列表',
        icon: '📃',
        component: React.lazy(() => import('../views/List/TextListExample')),
      },
      {
        id: 'picture-list',
        name: '图片列表',
        icon: '🖼',
        component: React.lazy(() => import('../views/List/PictureListExample')),
      },
    ],
  },
  {
    name: '表单',
    children: [
      {
        id: 'base-form',
        name: '常规表单',
        icon: '📑',
        component: React.lazy(() => import('../views/Form/BaseForm')),
        ...formSize,
      },
      {
        id: 'step-form',
        name: '分步表单',
        icon: '📰',
        component: React.lazy(() => import('../views/Form/StepForm')),
        ...formSize,
      },
      {
        id: 'responsive-form',
        name: '响应式表单',
        icon: '🖥',
        component: React.lazy(() => import('../views/Form/ResponsiveForm')),
        ...formSize,
      },
    ],
  },
  {
    name: '用户',
    children: [
      {
        id: 'register',
        name: '注册',
        icon: '✏',
        component: React.lazy(() => import('../views/User/Register')),
        ...formSize,
      },
      {
        id: 'forget_psw',
        name: '忘记密码',
        icon: '😖',
        component: React.lazy(() => import('../views/User/Register')),
      },
    ],
  },
  {
    name: '系统',
    children: [
      {
        id: 'setting',
        name: '设置',
        icon: '⚙',
        component: React.lazy(() => import('../views/Common/Setting/Setting')),
        singleton: true,
        hide: true,
        ...formSize,
      },
      {
        id: 'help',
        name: '帮助中心',
        icon: '📙',
        component: React.lazy(() => import('../views/Common/Setting/Setting')),
        hide: true,
        ...formSize,
      },
    ],
  },
];

export default config;
