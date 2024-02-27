export type TimeSeriesParams = {
  function?: string;
  symbol?: string;
  interval?: string;
  apiKey?: string;
};

export type TChartData = {
  date: Date;
  open: number;
  high: number;
  low: number;
  close: number;
  volume: number;
};
