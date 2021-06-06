import React, { useMemo } from 'react';
import { Form, FormProps, useForm } from 'm78/form';
import { getResponseColumn } from '@/components/Response/getResponseColumn';
import { Grids, MediaQuery, MediaQueryMeta, Row } from 'm78/layout';
import { Button } from 'm78/button';
import { UndoOutlined } from 'm78/icon';
import { isArray, shakeFalsy } from '@lxjx/utils';
import { If } from 'm78/fork';

interface Props<Data> {
  /** 交由内部进行布局管理的元素，通常是一组Form.Item */
  children?: React.ReactElement[];
  /** 控制是否只显示首行, 通常会传入来自 WindowLayout.topBar 的toggle参数 */
  toggle: boolean;
  /** 触发查询，传入当前录入的查询表单值 */
  onSearch?: (data: Data) => void;
  /** 触发重置 */
  onReset?: () => void;
  /**
   * 透传给内部Form组件的props
   *
   * 请注意，onSearch和onReset回调分别是formProps.onFinish和formProps.onReset的快捷方式，如果formProps传入了这两个配置会覆盖快捷设置的回调
   * */
  formProps?: FormProps;
}

/**
 * 简化查询栏的使用和编码:
 * - 简化了查询表单的编写
 * - 自动响应式调整布局, 并显示最优的布局方案
 * - 展开/折叠式的查询栏
 * - 减少实现同样功能的编码量
 * */
function SimplifyFilter<Data = any>({
  children,
  toggle,
  onSearch,
  onReset,
  formProps,
}: Props<Data>) {
  const propForm = formProps?.form;

  const [insideForm] = useForm();

  const form = propForm || insideForm;

  const filteredChildren = useMemo(() => {
    if (!children) return [] as React.ReactElement[];
    if (!isArray(children)) return [children];
    return children;
  }, [children]);

  function renderActions() {
    return (
      <>
        <Button
          text
          title="重置查询条件"
          onClick={() => {
            form.resetFields();
            onReset?.();
          }}
        >
          <UndoOutlined />
        </Button>
        <Button color="primary" onClick={form.submit}>
          查询
        </Button>
      </>
    );
  }

  function render(meta: MediaQueryMeta) {
    // 列数
    const column = getResponseColumn(meta);
    // 列数转换为栅格列
    const col = 12 / column;
    // 内联显示actions, 列数为1且展开时
    const inlineActions = column === 1 && toggle;

    return (
      <Row>
        <Form
          form={form}
          onFinish={data => onSearch?.(shakeFalsy(data) as any)}
          fullWidth
          {...formProps}
        >
          {filteredChildren.map((item, ind) => {
            const isFirstLine = ind < column;
            const shouldShow = toggle || isFirstLine;

            return (
              <Grids.Item key={ind} col={col} hidden={!shouldShow}>
                {item}
              </Grids.Item>
            );
          })}
          <If when={inlineActions}>
            <div className="tr p-8">{renderActions()}</div>
          </If>
        </Form>
        <If when={!inlineActions}>
          <Row crossAlign="center" style={{ paddingTop: 30, paddingRight: 8 }}>
            {renderActions()}
          </Row>
        </If>
      </Row>
    );
  }

  if (!filteredChildren.length) return null;

  return <MediaQuery>{render}</MediaQuery>;
}

export default SimplifyFilter;
