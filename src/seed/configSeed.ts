import create from 'm78/seed';
import { M78AdminConfig } from '@m78/admin';

const configSeed = create<M78AdminConfig>({
  state: {
    collectFunc: ['demo1', 'demo2', 'demo3', 'register'],
    darkMode: false,
  },
});

export default configSeed;
