import { PieConfig } from '@ant-design/charts/es/pie';

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

export const liquidConfig = {
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
