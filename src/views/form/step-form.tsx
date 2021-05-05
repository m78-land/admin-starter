import React from 'react';
import { WindowLayout } from '@m78/admin';
import { Form, useForm } from 'm78/form';
import { Input } from 'm78/input';
import { Button, ButtonColorEnum } from 'm78/button';
import { Dates, DateType } from 'm78/dates';
import { CheckBox } from 'm78/check-box';
import { Select } from 'm78/select';
import { Tree } from 'm78/tree';
import { SizeEnum } from 'm78/types';
import { Spacer } from 'm78/layout';

const BaseForm = () => {
  const [form] = useForm();

  return (
    <WindowLayout
      footer={
        <Button size={SizeEnum.large} onClick={form.submit} color={ButtonColorEnum.primary}>
          提交
        </Button>
      }
      sideTabs={[
        {
          label: '基础信息',
          selector: '#SF_BASE',
        },
        {
          label: '次要信息',
          selector: '#SF_SUB',
        },
        {
          label: '其他信息',
          selector: '#SF_OTHER',
        },
      ]}
    >
      <Form
        form={form}
        className="center-block"
        onFinish={e => {
          alert(JSON.stringify(e, null, 4));
        }}
      >
        <div id="SF_BASE">
          <Form.Title subTile>基础信息</Form.Title>

          <Form.Item label="生鲜名称" name="title" required>
            <Input placeholder="请输入生鲜名称" />
          </Form.Item>
          <Form.Item label="编号" name="number" required>
            <Input placeholder="请输入生鲜编号" />
          </Form.Item>
          <Form.Item label="描述" name="desc" required>
            <Input textArea charCount maxLength={100} placeholder="请输入生鲜描述" />
          </Form.Item>
        </div>

        <div id="SF_SUB">
          <Form.Title subTile>次要信息</Form.Title>

          <Form.Item label="标签" name="tags" required>
            <Input placeholder="请输入生鲜标签" />
          </Form.Item>
          <Form.Item label="门店" name="shop" required>
            <Input placeholder="请输入所属门店" />
          </Form.Item>
          <Form.Item label="日期" name="date" required>
            <Dates placeholder="选择入库期/保质期" type={DateType.DATE} range />
          </Form.Item>
          <Form.Item label="类型" name="type" required>
            <CheckBox
              name="like"
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
                  disabled: true,
                },
              ]}
            />
          </Form.Item>
        </div>

        <div id="SF_OTHER">
          <Form.Title subTile>其他信息</Form.Title>

          <Form.Item label="操作员" name="staff" required>
            <Select
              options={[
                {
                  label: '李圆圆',
                  value: 1,
                },
                {
                  label: '周星星',
                  value: 2,
                },
                {
                  label: '赵玥玥',
                  value: 3,
                },
                {
                  label: '郑阳阳',
                  value: 4,
                },
              ]}
              placeholder="请选择操作员"
            />
          </Form.Item>
          <Form.Item label="产地" name="source" required>
            <Tree
              style={{ width: '100%' }}
              multipleCheckable
              dataSource={[
                {
                  label: '仙女座星云',
                  children: [
                    {
                      label: 'TQ356',
                    },
                    {
                      label: 'G0127',
                    },
                    {
                      label: 'Y6684',
                    },
                    {
                      label: 'ZW795',
                    },
                  ],
                },
                {
                  label: '猎户座星云',
                  children: [
                    {
                      label: 'Y1966',
                    },
                    {
                      label: 'Z0000',
                    },
                    {
                      label: 'U1288',
                    },
                    {
                      label: 'II949',
                    },
                  ],
                },
                {
                  label: '织女座星云',
                  children: [
                    {
                      label: 'Y1676',
                    },
                    {
                      label: 'Z2686',
                    },
                    {
                      label: 'U9692',
                    },
                    {
                      label: 'II179',
                    },
                  ],
                },
              ]}
              defaultOpens={['JS', '基本对象']}
            />
          </Form.Item>
        </div>

        <Spacer height={200} />
      </Form>
    </WindowLayout>
  );
};

export default BaseForm;
