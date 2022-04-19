import React, { createContext, useContext, useMemo } from 'react';
import { createForm, RForm } from 'm78/form';
import { getResponseColumn } from '@/components/response/getResponseColumn';
import { Grids, GridsItem, MediaQuery, MediaQueryMeta, Row } from 'm78/layout';
import { Button } from 'm78/button';
import { UndoOutlined } from 'm78/icon';
import { isArray, shakeFalsy } from '@lxjx/utils';
import { If } from 'm78/fork';
import { FieldProps } from 'm78/form/types';

import sty from './simplify-filter.module.scss';

interface Props<Data> {
  /** form实例, 需要主动控制更多表单行为时传入 */
  form?: RForm;
  /** 交由内部进行布局管理的元素，通常是一组SimplifyFilterField */
  children?: React.ReactElement[];
  /** 控制是否只显示首行, 通常会传入来自 WindowLayout.topBar 的toggle参数 */
  toggle: boolean;
  /** 触发查询，传入当前录入的查询表单值 */
  onSearch?: (data: Data) => void;
  /** 触发重置 */
  onReset?: () => void;
}

const ctx = createContext<{
  form: RForm;
  /** 行数 */
  col?: number;
  /** 是否显示 */
  hidden?: boolean;
}>({ form: null as any });

/**
 * 简化查询栏的使用和编码:
 * - 简化了查询表单的编写
 * - 自动响应式调整布局, 并显示最优的布局方案
 * - 展开/折叠式的查询栏
 * - 减少实现同样功能的编码量
 * */
export function SimplifyFilter<Data = any>({
  children,
  toggle,
  onSearch,
  onReset,
  form: f,
}: Props<Data>) {
  const form = useMemo(() => {
    return f || createForm({ bubbleTips: true });
  }, []);

  form.submitEvent.useEvent(data => {
    onSearch?.(shakeFalsy(data) as any);
  });

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
            form.reset();
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
      <Row style={{ paddingTop: 12 }}>
        <Grids className={sty.main} gutter={[0, 12]}>
          {filteredChildren.map((item, ind) => {
            const isFirstLine = ind < column;
            const shouldShow = toggle || isFirstLine;

            return (
              <ctx.Provider
                key={ind}
                value={{
                  form,
                  col,
                  hidden: !shouldShow,
                }}
              >
                {item}
              </ctx.Provider>
            );
          })}
          <If when={inlineActions}>
            <div className="tr p-8">{renderActions()}</div>
          </If>
        </Grids>
        <If when={!inlineActions}>
          <Row crossAlign="center" style={{ paddingTop: 20, paddingRight: 8 }}>
            {renderActions()}
          </Row>
        </If>
      </Row>
    );
  }

  if (!filteredChildren.length) return null;

  return <MediaQuery>{render}</MediaQuery>;
}

/** 包装Form.Field, 提供了一些布局行为, 只能用作SimplifyFilter的子级 */
export function SimplifyFilterField(props: FieldProps) {
  const { form, col, hidden } = useContext(ctx);

  return (
    <GridsItem col={col} hidden={hidden}>
      <form.Field {...props}>{props.children}</form.Field>
    </GridsItem>
  );
}
