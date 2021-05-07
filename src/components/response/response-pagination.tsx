import React from 'react';
import { Pagination } from 'm78/pagination';
import { MediaQueryType } from '@m78/admin';

type PaginationType = typeof Pagination;

/**
 * 适应当前MediaQuery上下文的分页组件
 * */
const ResponsePagination: PaginationType = props => {
  return (
    <MediaQueryType>
      {meta => <Pagination {...props} size={meta.isXS() ? 'small' : undefined} />}
    </MediaQueryType>
  );
};

export default ResponsePagination;
