import React from 'react';
import { Pagination } from 'm78/pagination';
import { MediaQuery } from 'm78/layout';

type PaginationType = typeof Pagination;

/**
 * 自适应尺寸的分页组件
 * */
const ResponsePagination: PaginationType = props => {
  return <MediaQuery>{meta => <Pagination {...props} simple={meta.isXS()} />}</MediaQuery>;
};

export default ResponsePagination;
