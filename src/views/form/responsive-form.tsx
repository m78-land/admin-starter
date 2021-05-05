import React from 'react';
import { MediaQueryType, MediaQueryTypeMete, WindowLayout } from '@m78/admin';
import { Form, useForm } from 'm78/form';
import { Input } from 'm78/input';
import { Button, ButtonColorEnum } from 'm78/button';
import { Dates, DateType } from 'm78/dates';
import { CheckBox } from 'm78/check-box';
import { Select } from 'm78/select';
import { Tree } from 'm78/tree';
import { DirectionEnum, SizeEnum } from 'm78/types';
import { Spacer } from 'm78/layout';

const getColumn = (meta: MediaQueryTypeMete) => {
  if (meta.isLarge()) return 4;
  if (meta.isMedium()) return 3;
  return 0;
};

const ResponsiveForm = () => {
  const [form] = useForm();

  return (
    <WindowLayout
      footer={
        <Button size={SizeEnum.large} onClick={form.submit} color={ButtonColorEnum.primary}>
          提交
        </Button>
      }
    >
      <MediaQueryType>
        {meta => (
          <>
            <Spacer height={24} />
            <div className="tc">💡 拖动任务窗口边缘调整大小</div>
            <Form
              form={form}
              className="center-block"
              onFinish={e => {
                alert(JSON.stringify(e, null, 4));
              }}
              layout={meta.isXS() ? DirectionEnum.vertical : DirectionEnum.horizontal}
              column={getColumn(meta)}
            >
              {Array.from({ length: 50 }).map((_, ind) => {
                return (
                  <Form.Item key={ind} label={`字段${ind}`} name={`field_${ind}`}>
                    <Input placeholder={`请输入字段${ind}的值`} />
                  </Form.Item>
                );
              })}
            </Form>
          </>
        )}
      </MediaQueryType>
    </WindowLayout>
  );
};

export default ResponsiveForm;
