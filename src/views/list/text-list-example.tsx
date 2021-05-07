import React from 'react';
import { MediaQueryType, MediaQueryTypeMete, WindowLayout } from '@m78/admin';
import TextList from '../../components/list/text-list';
import listData from '@/mock-data/list-data';
import { Button } from 'm78/button';
import ResponsePagination from '@/components/response/response-pagination';
import Logo from '@m78/admin/assets/logo.png';
import { Form } from 'm78/form';
import { getResponseColumn } from '@/components/response/getResponseColumn';
import { Input } from 'm78/input';
import { Select } from 'm78/select';
import { Dates, DateType } from 'm78/dates';
import { RadioBox } from 'm78/radio-box';

const TextListExample = () => {
  function renderFilters(meta: MediaQueryTypeMete) {
    return (
      <Form
        onReset={() => console.log('reset')}
        onFinish={data => console.log(data)}
        column={getResponseColumn(meta)}
      >
        <Form.Item label="关键词" name="keyword">
          <Input placeholder="输入关键词搜索" />
        </Form.Item>
        <Form.Item label="类别" name="type">
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
        </Form.Item>
        <Form.Item label="入库时间" name="date">
          <Dates placeholder="选择入库期/保质期查询" type={DateType.DATE} range />
        </Form.Item>
        <Form.Item label="发布者" name="publisher">
          <Input placeholder="输入发布者姓名查询" />
        </Form.Item>
        <Form.Item label="是否审核" name="is_audit">
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
        </Form.Item>
        <Form.Actions>
          <div className="tr">
            <Button type="reset">重置</Button>
            <Button type="submit" color="primary">
              查询
            </Button>
          </div>
        </Form.Actions>
      </Form>
    );
  }

  return (
    <MediaQueryType>
      {meta => (
        <WindowLayout
          topBar={renderFilters(meta)}
          footer={<ResponsePagination total={40} defaultPage={1} jumper />}
        >
          {listData.map((item, ind) => (
            <TextList
              key={ind}
              title={item.title}
              desc={item.desc}
              tags={item.tags}
              infos={
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
              }
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
      )}
    </MediaQueryType>
  );
};

export default TextListExample;
