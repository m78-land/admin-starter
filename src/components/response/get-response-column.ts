import { MediaQueryMeta } from 'm78/layout';

/**
 * 根据传入meta获取合适的column信息
 * */
export const getResponseColumn = (meta: MediaQueryMeta) => {
  if (meta.isSM()) return 2;
  if (meta.isMedium()) return 3;
  if (meta.isLarge()) return 4;
  return 1;
};
