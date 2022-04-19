import React from 'react';
import { useForm } from 'm78/form';
import { Input } from 'm78/input';
import { Row } from 'm78/layout';
import { Button } from 'm78/button';
import { Link, Login as AdminLogin } from '@m78/admin';
import Logo from '@m78/admin/assets/logo.png';

const Login = () => {
  const Form = useForm();

  return (
    <AdminLogin
      logo={Logo}
      title="M78 Admin"
      desc="你的下一个后台管理系统"
      content={
        <div style={{ width: 300 }}>
          <Form.Field name="name">
            <Input size="large" placeholder="用户名" />
          </Form.Field>
          <Form.Field name="password">
            <Input size="large" type="password" placeholder="密码" />
          </Form.Field>

          <Row mainAlign="between" crossAlign="center">
            <Link id="register">
              <a className="fs">忘记密码</a>
            </Link>

            <Button outline color="primary">
              登录
            </Button>
          </Row>
        </div>
      }
    />
  );
};

export default Login;
