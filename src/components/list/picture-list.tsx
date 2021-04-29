import React from 'react';
import { AspectRatio } from 'm78/layout';
import { MediaQueryType } from '@m78/admin';

import img from '@/mock-data/images/1.jpg';
import clsx from 'clsx';
import sty from './picture-list.module.scss';

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
                  {actions}
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
