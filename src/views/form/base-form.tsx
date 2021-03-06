import React from 'react';
import { required } from 'm78/form';
import { Input } from 'm78/input';
import { Dates, DateType } from 'm78/dates';
import { CheckBox } from 'm78/check-box';
import { Select } from 'm78/select';
import { Tree } from 'm78/tree';
import { useFn } from '@lxjx/hooks';
import {
  SimplifyFormField,
  SimplifyFormLayout,
} from '@/components/simplify-form-layout/simplify-form-layout';

const BaseForm = () => {
  const onFinish = useFn(data => {
    console.log(data);
  });

  return (
    <SimplifyFormLayout onFinish={onFinish}>
      <SimplifyFormField label="生鲜名称" name="title" validator={[required()]}>
        <Input placeholder="请输入生鲜名称" />
      </SimplifyFormField>
      <SimplifyFormField label="生鲜描述" name="desc" validator={[required()]}>
        <Input textArea charCount maxLength={100} placeholder="请输入生鲜描述" />
      </SimplifyFormField>
      <SimplifyFormField label="日期" name="date" validator={[required()]}>
        <Dates placeholder="选择入库期/保质期" type={DateType.DATE} range />
      </SimplifyFormField>
      <SimplifyFormField label="类型" name="type">
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
      </SimplifyFormField>
      <SimplifyFormField label="操作员" name="staff">
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
      </SimplifyFormField>
      <SimplifyFormField label="来源地" name="source">
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
      </SimplifyFormField>
    </SimplifyFormLayout>
  );
};

export default BaseForm;
