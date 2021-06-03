import React from 'react';
import { TaskWindowLayoutProps, WindowLayout } from '@m78/admin';
import { MediaQueryMeta, MediaQuery, Spacer } from 'm78/layout';
import { Button, ButtonColorEnum } from 'm78/button';
import { DirectionEnum, SizeEnum } from 'm78/types';
import { Form, FormProps, useForm } from 'm78/form';

interface Props {
  /** 子项 */
  children?: React.ReactNode;
  /** 传递给内部Form组件的props */
  formProps?: Omit<FormProps, 'layout'>;
  /** 传递给内部WindowLayout组件的props */
  layoutProps?: Omit<TaskWindowLayoutProps, 'footer'>;
  /** 自定义WindowLayout.footerBar */
  footer?: React.ReactNode;
  /** '提交' | 提交按钮文本 */
  submitText?: React.ReactNode;
  /** 响应式列数 */
  responseColumn?: boolean;
}

function getLayout(meta: MediaQueryMeta, hasSideTabs: boolean) {
  if (hasSideTabs) return undefined;
  return meta.isXS() ? DirectionEnum.vertical : DirectionEnum.horizontal;
}

function getColumn(meta: MediaQueryMeta, responseColumn: boolean) {
  if (!responseColumn) return undefined;
  if (meta.isLarge()) return 4;
  if (meta.isMedium()) return 3;
  return 0;
}

/**
 * 整合了WindowLayout + MediaQueryType + Form 常见用例的组件，用于便捷实现常见的表单基础布局
 * */
const ResponseFormWindowLayout = ({
  children,
  formProps,
  submitText = '提交',
  footer,
  layoutProps,
  responseColumn = false,
}: Props) => {
  const [form] = useForm();

  const hasSideTabs = !!layoutProps?.sideTabs?.length;

  return (
    <WindowLayout
      {...layoutProps}
      footer={
        footer === null ? null : (
          <Button size={SizeEnum.large} onClick={form.submit} color={ButtonColorEnum.primary}>
            {submitText}
          </Button>
        )
      }
    >
      <MediaQuery>
        {meta => (
          <>
            {!hasSideTabs && <Spacer height={32} />}
            <Form
              form={form}
              className="center-block"
              column={getColumn(meta, responseColumn)}
              {...formProps}
              layout={getLayout(meta, hasSideTabs)}
            >
              {children}
            </Form>
          </>
        )}
      </MediaQuery>
    </WindowLayout>
  );
};

export default ResponseFormWindowLayout;
