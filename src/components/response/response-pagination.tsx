import React from 'react';
import { Pagination } from 'm78/pagination';
import { MediaQuery } from 'm78/layout';

type PaginationType = typeof Pagination;

/**
 * 适应当前MediaQuery上下文的分页组件
 * */
const ResponsePagination: PaginationType = props => {
  return (
    <MediaQuery>
      {meta => <Pagination {...props} size={meta.isXS() ? 'small' : undefined} />}
    </MediaQuery>
  );
};

export default ResponsePagination;
