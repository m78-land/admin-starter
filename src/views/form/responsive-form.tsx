import React from 'react';
import { Input } from 'm78/input';
import { useFn } from '@lxjx/hooks';
import {
  SimplifyFormField,
  SimplifyFormLayout,
} from '@/components/simplify-form-layout/simplify-form-layout';

const ResponsiveForm = () => {
  const onFinish = useFn(data => {
    console.log(data);
  });

  return (
    <SimplifyFormLayout onFinish={onFinish} response>
      <div className="tc mb-24" style={{ width: '100%' }}>
        💡 拖动任务窗口边缘调整大小
      </div>

      {Array.from({ length: 50 }).map((_, ind) => {
        return (
          <SimplifyFormField key={ind} label={`字段${ind}`} name={`field_${ind}`}>
            <Input placeholder={`请输入字段${ind}的值`} />
          </SimplifyFormField>
        );
      })}
    </SimplifyFormLayout>
  );
};

export default ResponsiveForm;
