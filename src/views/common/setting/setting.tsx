import React from 'react';
import { Form } from 'm78/form';
import { Input } from 'm78/input';

import ResponseFormWindowLayout from '@/components/response/response-form-window-layout';
import { Check } from 'm78/check';
import { useFn } from '@lxjx/hooks';
import _debounce from 'lodash/debounce';
import configSeed from '@/seed/configSeed';

const Setting = () => {
  const changeHandle = useFn(configSeed.setState, fn => _debounce(fn, 150));

  return (
    <ResponseFormWindowLayout
      formProps={{
        onValuesChange: changeHandle,
        initialValues: configSeed.getState(),
      }}
      footer={null}
    >
      <Form.Item label="Logo" name="logo">
        <Input />
      </Form.Item>
      <Form.Item label="后台名称" name="name" desc="显示在logo下方的名称">
        <Input />
      </Form.Item>
      <Form.Item
        label="窗口大小"
        name="initFull"
        valuePropName="checked"
        desc="设为全屏时，所有未明确配置尺寸的任务一律全屏打开"
      >
        <Check type="switch" beforeLabel="自动" label="全屏" />
      </Form.Item>
      <Form.Item label="黑暗模式" name="darkMode" valuePropName="checked">
        <Check type="switch" />
      </Form.Item>
      <Form.Item label="主题色" name="color">
        <Input type={'color' as any} style={{ width: 100 }} allowClear={false} />
      </Form.Item>
      <Form.Item label="次要主题色" name="subColor">
        <Input type={'color' as any} style={{ width: 100 }} allowClear={false} />
      </Form.Item>
      <Form.Item label="默认桌面" name="deskType" valuePropName="checked">
        <Check type="switch" beforeLabel="桌面" label="工作台" />
      </Form.Item>
      <Form.Item label="桌面背景" name="deskBg">
        <Input />
      </Form.Item>
      <Form.Item
        label="最大窗口数"
        name="maxWindow"
        required
        desc="同时打开的最大窗口数量，可以根据电脑配置适当增减此值"
      >
        <Input type="integer" />
      </Form.Item>
    </ResponseFormWindowLayout>
  );
};

export default Setting;
