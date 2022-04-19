import React from 'react';
import { useForm } from 'm78/form';
import { Input } from 'm78/input';

import { Check } from 'm78/check';
import { useFn } from '@lxjx/hooks';
import _debounce from 'lodash/debounce';
import configSeed, { DeskType } from '@/seed/config.seed';
import {
  SimplifyFormField,
  SimplifyFormLayout,
} from '@/components/simplify-form-layout/simplify-form-layout';
import { RadioBox } from 'm78/radio-box';

const Setting = () => {
  const Form = useForm({
    defaultValue: configSeed.get(),
  });

  const changeHandle = useFn(configSeed.set, fn => _debounce(fn, 250));

  Form.changeEvent.useEvent(() => {
    changeHandle(Form.getValues());
  });

  return (
    <SimplifyFormLayout form={Form} footer={null}>
      {/* TODO: Logo使用上传方式 */}
      <SimplifyFormField label="Logo" name="logo">
        <Input />
      </SimplifyFormField>
      <SimplifyFormField label="后台名称" name="name" extra="显示在logo下方的名称">
        <Input />
      </SimplifyFormField>
      <SimplifyFormField
        label="窗口大小"
        name="initFull"
        valueKey="checked"
        extra="设为全屏时，所有未预设尺寸的窗口一律全屏打开"
      >
        <Check type="switch" beforeLabel="自动" label="全屏" />
      </SimplifyFormField>
      <SimplifyFormField
        label="最大窗口数"
        name="maxWindow"
        extra="同时打开的最大窗口数量, 可以根据电脑配置适当增减此值"
      >
        <Input type="integer" />
      </SimplifyFormField>
      <SimplifyFormField label="黑暗模式" name="darkMode" valueKey="checked">
        <Check type="switch" />
      </SimplifyFormField>
      <SimplifyFormField label="主题色" name="color">
        <Input type={'color' as any} style={{ width: 100 }} allowClear={false} />
      </SimplifyFormField>
      <SimplifyFormField label="次要主题色" name="subColor">
        <Input type={'color' as any} style={{ width: 100 }} allowClear={false} />
      </SimplifyFormField>
      <SimplifyFormField label="桌面类型" name="deskType">
        <RadioBox
          options={[
            {
              label: '工作台',
              value: DeskType.workbench,
            },
            {
              label: '桌面',
              value: DeskType.desk,
            },
          ]}
        />
      </SimplifyFormField>
      <SimplifyFormField label="桌面背景" name="deskBg">
        <Input />
      </SimplifyFormField>
      <SimplifyFormField label="背景透明度" name="deskOpacity">
        <Input type="integer" />
      </SimplifyFormField>
    </SimplifyFormLayout>
  );
};

export default Setting;
