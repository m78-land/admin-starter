import React from 'react';
import { Form, useForm } from 'm78/form';
import { Input } from 'm78/input';
import { Button, ButtonColorEnum } from 'm78/button';
import { WindowLayout } from '@m78/admin';
import { SizeEnum } from 'm78/types';

const Register = () => {
  const [form] = useForm();

  return (
    <WindowLayout
      footer={
        <Button size={SizeEnum.large} onClick={form.submit} color={ButtonColorEnum.primary}>
          提交
        </Button>
      }
    >
      <div className="pt-32 plr-12">
        <Form
          form={form}
          className="center-block"
          onFinish={e => {
            alert(JSON.stringify(e, null, 4));
          }}
          // layout="horizontal"
        >
          <Form.Item label="账号" name="account" required>
            <Input placeholder="请输入账号" format="phone" />
          </Form.Item>
          <Form.Item label="密码" name="psw" required>
            <Input placeholder="请输入密码" type="password" />
          </Form.Item>
          <Form.Item label="确认密码" name="r_psw" required>
            <Input placeholder="请再次输入密码" type="password" />
          </Form.Item>
          <Form.Item label="个人简介" name="r_psw" required>
            <Input textArea placeholder="输入关于您的一段简短描述😀" type="password" />
          </Form.Item>
        </Form>
      </div>
    </WindowLayout>
  );
};

export default Register;
