import { TaskOpt } from '@m78/admin';
import React from 'react';

// form窗口通用尺寸
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
        component: React.lazy(() => import('../views/list/normal-list-example')),
      },
      {
        id: 'text-list',
        name: '文字列表',
        icon: '📃',
        component: React.lazy(() => import('../views/list/text-list-example')),
      },
      {
        id: 'picture-list',
        name: '图片列表',
        icon: '🖼',
        component: React.lazy(() => import('../views/list/picture-list-example')),
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
        component: React.lazy(() => import('../views/form/base-form')),
        ...formSize,
      },
      {
        id: 'step-form',
        name: '分步表单',
        icon: '📰',
        component: React.lazy(() => import('../views/form/step-form')),
        ...formSize,
      },
      {
        id: 'responsive-form',
        name: '响应式表单',
        icon: '🖥',
        component: React.lazy(() => import('../views/form/responsive-form')),
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
        component: React.lazy(() => import('../views/user/register')),
        ...formSize,
      },
      {
        id: 'forget_psw',
        name: '忘记密码',
        icon: '😖',
        component: React.lazy(() => import('../views/user/register')),
        ...formSize,
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
        component: React.lazy(() => import('../views/common/setting/setting')),
        singleton: true,
        hide: true,
        ...formSize,
      },
      {
        id: 'help',
        name: '帮助中心',
        icon: '📙',
        component: React.lazy(() => import('../views/common/setting/setting')),
        hide: true,
        ...formSize,
      },
    ],
  },
];

export default config;
