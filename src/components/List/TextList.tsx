import { Button } from 'm78/button';
import React from 'react';

import { MediaQuery } from 'm78/layout';
import clsx from 'clsx';
import sty from './TextList.module.scss';

interface Props {
  /** 标题 */
  title: React.ReactNode;
  /** 说明文本 */
  desc: React.ReactNode;
  /** 标签 */
  tags?: string[];
  /** 信息区域 */
  infos?: React.ReactNode;
  /** 操作 */
  actions?: React.ReactNode;
}

const TextList = ({ title, desc, tags, infos, actions }: Props) => {
  return (
    <MediaQuery>
      {meta => (
        <div
          className={clsx(sty.TextList, {
            __small: meta.isXS(),
          })}
        >
          <div className={sty.TextListTitle}>{title}</div>
          {tags?.length && (
            <div>
              {tags.map((item, ind) => (
                <Button key={ind} size="mini" outline color="primary">
                  {item}
                </Button>
              ))}
            </div>
          )}
          <div className="ellipsis-2">{desc}</div>
          {infos && <div>{infos}</div>}
          {actions && <div>{actions}</div>}
        </div>
      )}
    </MediaQuery>
  );
};

export default TextList;
