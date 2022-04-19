import { MediaQueryMeta } from 'm78/layout';

/**
 * 根据传入meta获取合适的column信息
 * */
export const getResponseColumn = (meta: MediaQueryMeta) => {
  if (meta.isSM()) return 2;
  if (meta.isMedium()) return 3;
  if (meta.isXL()) return 4;
  if (meta.isXXL()) return 5;
  return 1;
};
