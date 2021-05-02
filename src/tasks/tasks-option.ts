import { TaskOpt } from '@m78/admin';
import React from 'react';

const tasksOption: TaskOpt = [
  {
    name: '测试功能',
    children: [
      {
        id: 'demo1',
        name: '测试功能1',
        icon: '✨',
        component: React.lazy(() => import('../views/demo/demo1')),
      },
      {
        id: 'demo2',
        name: '测试功能2',
        icon: '🎉',
        component: React.lazy(() => import('../views/demo/demo2')),
      },
      {
        id: 'demo3',
        name: '测试功能3',
        icon: '🎨',
        component: React.lazy(() => import('../views/demo/demo3')),
      },
      {
        id: 'demo4',
        name: '测试功能4',
        icon: '🎨',
        component: React.lazy(() => import('../views/demo/demo4')),
      },
      {
        id: 'demo5',
        name: '测试功能5',
        icon: '💎',
        component: React.lazy(() => import('../views/demo/demo5')),
      },
      {
        id: 'demo6',
        name: '测试功能6',
        icon: '🐶',
        component: React.lazy(() => import('../views/demo/demo6')),
      },
    ],
  },
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
        name: '基础表单',
        icon: '📑',
        component: React.lazy(() => import('../views/form/base-form')),
        width: 760,
        height: 620,
      },
      // {
      //   id: 'step-form',
      //   name: '分步表单',
      //   icon: '📰',
      //   component: React.lazy(() => import('../views/form/step-form')),
      //   width: 760,
      //   height: 620,
      // },
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
        width: 760,
        height: 620,
      },
      {
        id: 'forget_psw',
        name: '忘记密码',
        icon: '😖',
        component: React.lazy(() => import('../views/user/register')),
      },
    ],
  },
];

export default tasksOption;
