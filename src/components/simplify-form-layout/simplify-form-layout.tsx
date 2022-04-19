import React, { createContext, useContext, useMemo } from 'react';
import { TaskWindowLayoutProps, WindowLayout } from '@m78/admin';
import { MediaQueryMeta, MediaQuery, Spacer, Grids, GridsItem } from 'm78/layout';
import { Button, ButtonColor } from 'm78/button';
import { Direction, Size } from 'm78/common';
import { RForm, createForm } from 'm78/form';
import { getResponseColumn } from '@/components/response/getResponseColumn';
import { FieldProps } from 'm78/form/types';

interface Props<Data> {
  /** form实例, 需要主动控制更多表单行为时传入 */
  form?: RForm;
  /** 任意结构和内容的子项, 表单项通过<SimplifyFormField />创建 */
  children?: React.ReactNode;
  /** 触发提交，传入当前录入的查询表单值 */
  onFinish?: (data: Data) => void;
  /** 自定义底栏, 如果为null则隐藏底栏 */
  footer?: null | React.ReactNode;
  /** '提交' | 提交按钮文本 */
  submitText?: React.ReactNode;
  /** 响应式布局的多栏表单 (常规表单为单栏的响应式) */
  response?: boolean;
  /**
   * 传递给内部WindowLayout组件的props
   * - layoutProps.footer配置被代理到了footer, 通过此项传入的配置会被忽略
   * */
  layoutProps?: Omit<TaskWindowLayoutProps, 'footer'>;
  /** 440 | 非response模式时的表单区域宽度 */
  contentWidth?: number;
}

const ctx = createContext<{
  form: RForm;
  /** 行数 */
  col?: number;
  /** label方向 */
  layout?: Direction;
  /** 是否启用了Props.response */
  response?: boolean;
}>({ form: null as any });

function getLayout(meta: MediaQueryMeta, hasSideTabs: boolean) {
  if (hasSideTabs) return undefined;
  return meta.isXS() ? Direction.vertical : Direction.horizontal;
}

/**
 * 简化表单页的使用:
 * - 整合了WindowLayout + Form
 * - 自动响应式调整布局, 支持多列
 * - 减少实现同样功能的编码量
 * */
export function SimplifyFormLayout<Data = any>({
  children,
  form,
  layoutProps,
  submitText = '提交',
  footer,
  response = false,
  onFinish,
}: Props<Data>) {
  const f = useMemo(() => {
    return form || createForm();
  }, []);

  const hasSideTabs = !!layoutProps?.sideTabs?.length;

  f.submitEvent.useEvent(onFinish || (() => {}));

  function renderFooter() {
    if (footer === null) return null;
    if (footer) return footer;
    return (
      <Button size={Size.large} onClick={f.submit} color={ButtonColor.primary}>
        {submitText}
      </Button>
    );
  }

  return (
    <WindowLayout {...layoutProps} footer={renderFooter()}>
      <MediaQuery>
        {meta => (
          <ctx.Provider
            value={{
              form: f,
              col: response ? 12 / getResponseColumn(meta) : 12,
              layout: getLayout(meta, hasSideTabs),
              response,
            }}
          >
            <Spacer height={32} />

            {response ? (
              <Grids className="plr-12">{children}</Grids>
            ) : (
              <div className="center-block plr-12" style={{ width: 440 }}>
                {children}
              </div>
            )}

            {!hasSideTabs && <Spacer height={42} />}
          </ctx.Provider>
        )}
      </MediaQuery>
    </WindowLayout>
  );
}

/** 包装Form.Field, 提供了一些布局行为, 只能用作SimplifyFormLayout的子级 */
export function SimplifyFormField(props: FieldProps) {
  const { form, col, layout, response } = useContext(ctx);

  function render() {
    return (
      <form.Field layout={layout} {...props}>
        {props.children}
      </form.Field>
    );
  }

  if (!response) return render();

  return <GridsItem col={col}>{render()}</GridsItem>;
}
