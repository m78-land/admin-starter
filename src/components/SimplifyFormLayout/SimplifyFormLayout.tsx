import React from 'react';
import { TaskWindowLayoutProps, WindowLayout } from '@m78/admin';
import { MediaQueryMeta, MediaQuery, Spacer } from 'm78/layout';
import { Button, ButtonColorEnum } from 'm78/button';
import { DirectionEnum, SizeEnum } from 'm78/types';
import { Form, FormInstance, FormProps, useForm } from 'm78/form';
import { getResponseColumn } from '@/components/Response/getResponseColumn';
import { isFunction } from '@lxjx/utils';

interface Props<Data> {
  /** 子项 */
  children?: React.ReactNode;
  /** 触发提交，传入当前录入的查询表单值 */
  onFinish?: (data: Data) => void;
  /** 自定义底栏, 如果为null则隐藏底栏 */
  footer?: null | ((form: FormInstance) => React.ReactNode);
  /** '提交' | 提交按钮文本 */
  submitText?: React.ReactNode;
  /** 响应式布局的多栏表单 (常规表单为单栏的响应式) */
  response?: boolean;
  /**
   * 传递给内部Form组件的props
   * - 如果传入了onFinish，则覆盖根配置上的onFinish
   * */
  formProps?: FormProps;
  /**
   * 传递给内部WindowLayout组件的props
   * - layoutProps.footer配置被代理到了footer, 通过此项传入的配置会被忽略
   * */
  layoutProps?: Omit<TaskWindowLayoutProps, 'footer'>;
}

function getLayout(meta: MediaQueryMeta, hasSideTabs: boolean) {
  if (hasSideTabs) return undefined;
  return meta.isXS() ? DirectionEnum.vertical : DirectionEnum.horizontal;
}

/**
 * 简化表单页的使用和编码:
 * - 整合了WindowLayout + Form
 * - 自动响应式调整布局, 支持多列
 * - 减少实现同样功能的编码量
 * */
function SimplifyFormLayout<Data = any>({
  children,
  formProps,
  layoutProps,
  submitText = '提交',
  footer,
  response = false,
  onFinish,
}: Props<Data>) {
  const [insideForm] = useForm();

  const form = formProps?.form || insideForm;

  const hasSideTabs = !!layoutProps?.sideTabs?.length;

  function renderFooter() {
    if (footer === null) return null;
    if (isFunction(footer)) return footer(form);
    return (
      <Button size={SizeEnum.large} onClick={form.submit} color={ButtonColorEnum.primary}>
        {submitText}
      </Button>
    );
  }

  return (
    <WindowLayout {...layoutProps} footer={renderFooter()}>
      <MediaQuery>
        {meta => (
          <>
            {!hasSideTabs && <Spacer height={32} />}
            <Form
              form={form}
              className="center-block"
              column={response ? getResponseColumn(meta) : undefined}
              layout={getLayout(meta, hasSideTabs)}
              onFinish={onFinish}
              {...formProps}
            >
              {children}
            </Form>
            {!hasSideTabs && <Spacer height={42} />}
          </>
        )}
      </MediaQuery>
    </WindowLayout>
  );
}

export default SimplifyFormLayout;
