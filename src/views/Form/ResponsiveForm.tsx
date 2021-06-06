import React from 'react';
import { Form } from 'm78/form';
import { Input } from 'm78/input';
import { useFn } from '@lxjx/hooks';
import SimplifyFormLayout from '@/components/SimplifyFormLayout/SimplifyFormLayout';

const ResponsiveForm = () => {
  const onFinish = useFn(data => {
    console.log(data);
  });

  return (
    <SimplifyFormLayout onFinish={onFinish} response>
      <div className="tc">💡 拖动任务窗口边缘调整大小</div>
      {Array.from({ length: 50 }).map((_, ind) => {
        return (
          <Form.Item key={ind} label={`字段${ind}`} name={`field_${ind}`}>
            <Input placeholder={`请输入字段${ind}的值`} />
          </Form.Item>
        );
      })}
    </SimplifyFormLayout>
  );
};

export default ResponsiveForm;
