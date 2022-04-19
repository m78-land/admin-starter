import React from 'react';
import { required } from 'm78/form';
import { Input } from 'm78/input';
import { useFn } from '@lxjx/hooks';
import {
  SimplifyFormField,
  SimplifyFormLayout,
} from '@/components/simplify-form-layout/simplify-form-layout';

const Register = () => {
  const onFinish = useFn(data => {
    console.log(data);
  });

  return (
    <SimplifyFormLayout onFinish={onFinish}>
      <SimplifyFormField label="账号" name="account" validator={[required()]}>
        <Input placeholder="请输入账号" format="phone" />
      </SimplifyFormField>
      <SimplifyFormField label="密码" name="psw" validator={[required()]}>
        <Input placeholder="请输入密码" type="password" />
      </SimplifyFormField>
      <SimplifyFormField label="确认密码" name="r_psw" validator={[required()]}>
        <Input placeholder="请再次输入密码" type="password" />
      </SimplifyFormField>
      <SimplifyFormField label="个人简介" name="r_psw" validator={[required()]}>
        <Input textArea placeholder="输入关于您的一段简短描述😀" type="password" />
      </SimplifyFormField>
    </SimplifyFormLayout>
  );
};

export default Register;
