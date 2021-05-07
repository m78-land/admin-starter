import React from 'react';
import { MediaQueryType, MediaQueryTypeMete, WindowLayout } from '@m78/admin';
import { ListView, ListViewItem, ListViewItemStyleEnum } from 'm78/list-view';
import { Check } from 'm78/check';
import ResponsePagination from '@/components/response/response-pagination';
import { Form } from 'm78/form';
import { Input } from 'm78/input';
import { Dates, DateType } from 'm78/dates';
import { Select } from 'm78/select';
import { Button } from 'm78/button';
import { RadioBox } from 'm78/radio-box';
import { getResponseColumn } from '@/components/response/getResponseColumn';

const getColumn = (meta: MediaQueryTypeMete) => {
  if (meta.isMedium()) return 2;
  if (meta.isLarge()) return 3;
  return 1;
};

const getItemStyle = (meta: MediaQueryTypeMete) => {
  if (meta.isMedium() || meta.isLarge()) return ListViewItemStyleEnum.border;
  return undefined;
};

const NormalListExample = () => {
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
          <ListView effect column={getColumn(meta)} itemStyle={getItemStyle(meta)} className="p-8">
            <ListViewItem leading="🍊" title="橘子" arrow />
            <ListViewItem leading="🍉" title="西瓜" arrow />
            <ListViewItem leading="🥝" title="猕猴桃" arrow desc="水果之王" />
            <ListViewItem leading="🍇" title="葡萄" trailing={<Check type="switch" />} />
            <ListViewItem leading="🍓" title="草莓" arrow trailing="其实不是水果" />
            <ListViewItem
              leading="🍒"
              title={
                <span>
                  樱<span className="color-red">桃</span>
                </span>
              }
              arrow
            />
            <ListViewItem
              leading="🍋"
              title="柠檬"
              arrow
              desc="一年一度的“我吃柠檬”挑战又要开始啦~，请记住我们的活动代号“#WCNM#”"
            />
            <ListViewItem leading="🍍" title="菠萝" arrow trailing="也叫凤梨" />
            <ListViewItem leading="🍎" title="苹果" arrow />
            <ListViewItem leading="🍈" title="甜瓜" arrow />
            <ListViewItem leading="🍑" title="桃" arrow />
            <ListViewItem leading="🍐" title="梨" arrow />
            <ListViewItem leading="🍌" title="香蕉" arrow />
          </ListView>
        </WindowLayout>
      )}
    </MediaQueryType>
  );
};

export default NormalListExample;
