import React from 'react';
import { WindowLayout } from '@m78/admin';
import TextList from '../../components/list/text-list';
import Pagination from 'm78/pagination';
import listData from '@/mock-data/list-data';
import Button from 'm78/button';
import ResponsePagination from '@/components/response/response-pagination';
import Logo from '@m78/admin/assets/logo.png';

const TextListExample = () => {
  return (
    <WindowLayout footer={<ResponsePagination total={40} defaultPage={1} jumper />}>
      {listData.map((item, ind) => (
        <TextList
          key={ind}
          title={item.title}
          desc={item.desc}
          tags={item.tags}
          infos={(
            <>
              <a>
                <img
                  style={{ height: 30, width: 30 }}
                  className="circle-img mr-8"
                  src={Logo}
                  alt="logo"
                />
                {item.user.name}
              </a>
              <span className="color-second ml-12">录入于: 2021-04-01</span>
            </>
          )}
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

export default TextListExample;
