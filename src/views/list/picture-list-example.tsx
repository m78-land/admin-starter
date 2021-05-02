import React from 'react';
import { WindowLayout } from '@m78/admin';
import listData from '@/mock-data/list-data';
import PictureList from '@/components/list/picture-list';
import { Button } from 'm78/button';
import ResponsePagination from '@/components/response/response-pagination';

const PictureListExample = () => {
  return (
    <WindowLayout footer={<ResponsePagination total={40} defaultPage={1} jumper />}>
      {listData.slice(0, 8).map((item, ind) => (
        <PictureList
          key={ind}
          image={item.image}
          title={item.title}
          desc={item.desc}
          actions={
            <div>
              <Button size="small" text>
                ✒编辑
              </Button>
              <Button size="small" text>
                🗑删除
              </Button>
              <Button size="small" text>
                🔒锁定
              </Button>
            </div>
          }
        />
      ))}
    </WindowLayout>
  );
};

export default PictureListExample;
