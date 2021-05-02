import { Button } from 'm78/button';
import React from 'react';
import Logo from '@m78/admin/assets/logo.png';

import sty from './text-list.module.scss';
import { MediaQueryType } from '@m78/admin';
import clsx from 'clsx';

interface Props {
  /** 标题 */
  title: React.ReactNode;
  /** 说明文本 */
  desc: React.ReactNode;
  /** 标签 */
  tags?: string[];
  /** 操作 */
  actions?: React.ReactNode;
}

const TextList = ({ title, desc, tags, actions }: Props) => {
  return (
    <MediaQueryType>
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
          <div>
            <a>
              <img
                style={{ height: 30, width: 30 }}
                className="circle-img mr-8"
                src={Logo}
                alt="logo"
              />
              李圆圆
            </a>
            <span className="color-second ml-12">录入于: 2021-04-01</span>
          </div>
          {actions && <div>{actions}</div>}
        </div>
      )}
    </MediaQueryType>
  );
};

export default TextList;
