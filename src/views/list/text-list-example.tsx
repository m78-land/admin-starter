import React from 'react';
import { WindowLayout } from '@m78/admin';
import TextList from '../../components/list/text-list';
import listData from '@/mock-data/list-data';
import { Button } from 'm78/button';
import ResponsePagination from '@/components/response/response-pagination';

const TextListExample = () => {
  return (
    <WindowLayout footer={<ResponsePagination total={40} defaultPage={1} jumper />}>
      {listData.map((item, ind) => (
        <TextList
          key={ind}
          title={item.title}
          desc={item.desc}
          tags={item.tags}
          actions={
            <div>
              <Button size="small" className="cus-p" text>
                ✒ 编辑
              </Button>
              <Button size="small" className="cus-p" text>
                🗑 删除
              </Button>
              <Button size="small" className="cus-p" text>
                🔒 锁定
              </Button>
            </div>
          }
        />
      ))}
    </WindowLayout>
  );
};

export default TextListExample;
