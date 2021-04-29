import React from 'react';
import { AspectRatio, Divider } from 'm78/layout';
import { MediaQueryType } from '@m78/admin';

import sty from './picture-list.module.scss';
import img from '@/mock-data/images/1.jpg';
import clsx from 'clsx';
import { vie } from '@lxjx/utils';

interface Props {
  image: string;
  /** 标题 */
  title: React.ReactNode;
  /** 说明文本 */
  desc?: React.ReactNode;
  /** 操作 */
  actions?: React.ReactNode;
}

const PictureList = ({ image, title, desc, actions }: Props) => {
  return (
    <MediaQueryType>
      {meta => (
        <div className={clsx(sty.PictureList, `__${meta.type}`)}>
          <div className={sty.PictureListWrap}>
            <AspectRatio ratio={0.65}>
              <img src={image} className={sty.PictureListImage} alt="🍊 橘子" />
            </AspectRatio>
            <div className="p-12">
              <div className="fs-md ellipsis">{title}</div>
              {desc && <div className={clsx(sty.PictureListDesc, 'ellipsis-2')}>{desc}</div>}
              {actions && (
                <div className="mt-8 ellipsis">
                  <div>
                    <span className="cus-p">✒ 编辑</span>
                    <Divider vertical />
                    <span className="cus-p">🗑 删除</span>
                    <Divider vertical />
                    <span className="cus-p">🔒 锁定</span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </MediaQueryType>
  );
};

export default PictureList;
