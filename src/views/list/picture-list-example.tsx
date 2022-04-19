import React from 'react';
import { WindowLayout } from '@m78/admin';
import listData from '@/mock-data/list-data';
import PictureList from '@/components/list/picture-list';
import { Button } from 'm78/button';
import ResponsePagination from '@/components/response/response-pagination';
import { Input } from 'm78/input';
import { Select } from 'm78/select';
import { Dates, DateType } from 'm78/dates';
import { RadioBox } from 'm78/radio-box';
import { SimplifyFilterField, SimplifyFilter } from '@/components/simplify-filter/simplify-filter';
import { Grids } from 'm78/layout';

const PictureListExample = () => {
  function renderFilters(toggle: boolean) {
    return (
      <SimplifyFilter
        toggle={toggle}
        onReset={() => console.log('reset')}
        onSearch={data => console.log('search', data)}
      >
        <SimplifyFilterField label="关键词" name="keyword">
          <Input placeholder="输入关键词搜索" />
        </SimplifyFilterField>
        <SimplifyFilterField label="类别" name="type">
          <Select
            multiple
            showTag={false}
            options={[
              {
                label: '🍉 水果',
                value: 1,
              },
              {
                label: '🍆 蔬菜',
                value: 2,
              },
              {
                label: '🌮 熟食',
                value: 3,
              },
              {
                label: '🥤 饮品',
                value: 4,
              },
            ]}
            placeholder="请选择操作员查询"
          />
        </SimplifyFilterField>

        <SimplifyFilterField label="入库时间" name="date">
          <Dates placeholder="选择入库期/保质期查询" type={DateType.DATE} range />
        </SimplifyFilterField>

        <SimplifyFilterField label="发布者" name="publisher">
          <Input placeholder="输入发布者姓名查询" />
        </SimplifyFilterField>
        <SimplifyFilterField label="是否审核" name="is_audit">
          <RadioBox
            name="like"
            options={[
              {
                label: '是',
                value: 1,
              },
              {
                label: '否',
                value: 2,
              },
            ]}
          />
        </SimplifyFilterField>
      </SimplifyFilter>
    );
  }

  return (
    <WindowLayout
      topBar={renderFilters}
      topBarType="eclipse"
      footer={<ResponsePagination total={40} defaultPage={1} jumper />}
    >
      <Grids gutter={12}>
        {listData.slice(0, 8).map((item, ind) => (
          <Grids.Item key={ind} xs={12} sm={6} md={4} xl={3} xxl={2.4}>
            <PictureList
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
          </Grids.Item>
        ))}
      </Grids>
    </WindowLayout>
  );
};

export default PictureListExample;
