import React from 'react';
import { MediaQueryType, MediaQueryTypeMete, WindowLayout } from '@m78/admin';
import { ListView, ListViewItem, ListViewItemStyleEnum } from 'm78/list-view';
import { Check } from 'm78/check';
import ResponsePagination from '@/components/response/response-pagination';

const getColumn = (meta: MediaQueryTypeMete) => {
  if (meta.isMedium()) return 2;
  if (meta.isLarge()) return 3;
  return 1;
};

const getItemStyle = (meta: MediaQueryTypeMete) => {
  if (meta.isMedium() || meta.isLarge()) return ListViewItemStyleEnum.border;
  return undefined;
};

const NormalListExample = () => {
  return (
    <WindowLayout footer={<ResponsePagination total={40} defaultPage={1} jumper />}>
      <MediaQueryType>
        {meta => (
          <ListView effect column={getColumn(meta)} itemStyle={getItemStyle(meta)}>
            <ListViewItem leading="🍊" title="橘子" arrow />
            <ListViewItem leading="🍉" title="西瓜" arrow />
            <ListViewItem leading="🥝" title="猕猴桃" arrow desc="水果之王" />
            <ListViewItem leading="🍇" title="葡萄" trailing={<Check type="switch" />} />
            <ListViewItem leading="🍓" title="草莓" arrow trailing="其实不是水果" />
            <ListViewItem
              leading="🍒"
              title={
                <span>
                  樱<span className="color-red">桃</span>
                </span>
              }
              arrow
            />
            <ListViewItem
              leading="🍋"
              title="柠檬"
              arrow
              desc="一年一度的“我吃柠檬”挑战又要开始啦~，请记住我们的活动代号“#WCNM#”"
            />
            <ListViewItem leading="🍍" title="菠萝" arrow trailing="也叫凤梨" />
            <ListViewItem leading="🍎" title="苹果" arrow />
            <ListViewItem leading="🍈" title="甜瓜" arrow />
            <ListViewItem leading="🍑" title="桃" arrow />
            <ListViewItem leading="🍐" title="梨" arrow />
            <ListViewItem leading="🍌" title="香蕉" arrow />
          </ListView>
        )}
      </MediaQueryType>
    </WindowLayout>
  );
};

export default NormalListExample;
