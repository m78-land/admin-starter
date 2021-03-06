import { cacheMiddleware, createSeed } from 'm78/seed';
import { M78AdminConfig } from '@m78/admin';

type DeskTypeKeys = 'desk' | 'workbench';

/** 桌面类型 */
export enum DeskType {
  /** 桌面 */
  desk = 'desk',
  /** 工作台 */
  workbench = 'workbench',
}

interface CustomConfig extends M78AdminConfig {
  /** 'workbench' | 桌面类型 */
  deskType?: DeskType | DeskTypeKeys;
  /** 桌面背景 */
  deskBg?: string;
  /** 背景透明度 */
  deskOpacity?: number;
}

/**
 * 管理所有可能需要持久化的配置，默认通过localStorage存放缓存，可以配置通过远程接口来进行配置持久化
 * */
const configSeed = createSeed<CustomConfig>({
  middleware: [cacheMiddleware('M78_ADMIN_CONFIG', { type: 'local' })],
  state: {
    collectFunc: [
      'normal-list',
      'text-list',
      'picture-list',
      'base-form',
      'step-form',
      'responsive-form',
      'register',
      'forget_psw',
    ],
    darkMode: false,
    deskType: DeskType.workbench,
    maxWindow: 12,
    deskOpacity: 60,
  },
});

configSeed.subscribe(() => {
  /* TODO: 可以在这里同步配置到接口 */
  /* configSeed.getState() */
});

export default configSeed;
