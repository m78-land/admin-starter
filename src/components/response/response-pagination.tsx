import React from 'react';
import { Pagination } from 'm78/pagination';
import { MediaQueryType } from '@m78/admin';

type PaginationType = typeof Pagination;

const ResponsePagination: PaginationType = props => {
  return (
    <MediaQueryType>
      {meta => <Pagination {...props} size={meta.isXS() ? 'small' : undefined} />}
    </MediaQueryType>
  );
};

export default ResponsePagination;
