export const pieBaseConfig = {
  angleField: 'value',
  colorField: 'type',
  radius: 0.6,
  legend: false as const,
  label: {
    type: 'outer',
    content: '{name} {percentage}',
  },
  interactions: [{ type: 'pie-legend-active' }, { type: 'element-active' }],
};

export const wordCloudBaseConfig = {
  wordField: 'name',
  weightField: 'value',
  colorField: 'name',
  wordStyle: {
    fontFamily: 'Verdana',
    fontSize: [8, 32] as any,
    rotation: 0,
  },
  random: () => 0.5,
};

export const liquidBaseConfig = {
  percent: 0.68,
  radius: 0.6,
  outline: {
    border: 4,
    distance: 8,
  },
  wave: { length: 128 },
  statistic: {
    title: {
      formatter: function formatter() {
        return '今日销售额已完成';
      },
    },
  },
};

export const areaBaseConfig = {
  xField: 'date',
  yField: 'value',
  seriesField: 'type',
};

export const hollowPieBaseConfig = {
  appendPadding: 10,
  angleField: 'value',
  colorField: 'type',
  radius: 0.7,
  innerRadius: 0.6,
  label: {
    type: 'inner',
    offset: '-50%',
    content: '{value}',
    style: {
      textAlign: 'center',
      fontSize: 14,
    },
  },
  interactions: [{ type: 'element-selected' }, { type: 'element-active' }],
};

export const tinyAreaBaseConfig = {
  smooth: true,
  areaStyle: { fill: '#d6e3fd' },
  annotations: [
    {
      type: 'line',
      start: ['min', 'mean'],
      end: ['max', 'mean'],
      text: {
        content: '平均值',
        offsetY: -2,
        style: {
          textAlign: 'left',
          fontSize: 10,
          fill: 'rgba(44, 53, 66, 0.45)',
          textBaseline: 'bottom',
        },
      },
      style: { stroke: 'rgba(0, 0, 0, 0.25)' },
    } as any,
  ],
};
