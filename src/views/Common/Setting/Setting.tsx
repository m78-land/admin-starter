import React from 'react';
import { Form } from 'm78/form';
import { Input } from 'm78/input';

import { Check } from 'm78/check';
import { useFn } from '@lxjx/hooks';
import _debounce from 'lodash/debounce';
import configSeed, { DeskTypesEnum } from '@/seed/configSeed';
import SimplifyFormLayout from '@/components/SimplifyFormLayout/SimplifyFormLayout';
import { RadioBox } from 'm78/radio-box';

const Setting = () => {
  const changeHandle = useFn(configSeed.setState, fn => _debounce(fn, 250));

  return (
    <SimplifyFormLayout
      formProps={{
        onValuesChange: changeHandle,
        initialValues: configSeed.getState(),
      }}
      footer={null}
    >
      {/* TODO: Logo使用上传方式 */}
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
        desc="设为全屏时，所有未预设尺寸的窗口一律全屏打开"
      >
        <Check type="switch" beforeLabel="自动" label="全屏" />
      </Form.Item>
      <Form.Item
        label="最大窗口数"
        name="maxWindow"
        desc="同时打开的最大窗口数量, 可以根据电脑配置适当增减此值"
      >
        <Input type="integer" />
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
      <Form.Item label="桌面类型" name="deskType">
        <RadioBox
          options={[
            {
              label: '工作台',
              value: DeskTypesEnum.workbench,
            },
            {
              label: '桌面',
              value: DeskTypesEnum.desk,
            },
          ]}
        />
      </Form.Item>
      <Form.Item label="桌面背景" name="deskBg">
        <Input />
      </Form.Item>
      <Form.Item label="背景透明度" name="deskOpacity">
        <Input type="integer" />
      </Form.Item>
    </SimplifyFormLayout>
  );
};

export default Setting;
