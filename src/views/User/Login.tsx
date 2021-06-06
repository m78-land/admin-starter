import React from 'react';
import { Form } from 'm78/form';
import { Input } from 'm78/input';
import { Row } from 'm78/layout';
import { Button } from 'm78/button';
import { Link, Login as AdminLogin } from '@m78/admin';
import Logo from '@m78/admin/assets/logo.png';

const Login = () => {
  return (
    <AdminLogin
      logo={Logo}
      title="M78 Admin"
      desc="你的下一个后台管理系统"
      content={
        <Form style={{ width: 300 }}>
          <Form.Item name="name">
            <Input size="large" placeholder="用户名" />
          </Form.Item>
          <Form.Item name="password">
            <Input size="large" type="password" placeholder="密码" />
          </Form.Item>

          <Row mainAlign="between" crossAlign="center">
            <Link id="register">
              <a className="fs">忘记密码</a>
            </Link>

            <Button outline color="primary">
              登录
            </Button>
          </Row>
        </Form>
      }
    />
  );
};

export default Login;
