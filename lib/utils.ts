export const formatNumber = (num: number, locale = 'zh-CN') => new Intl.NumberFormat(locale, { maximumSignificantDigits: 3 }).format(num);

// eslint-disable-next-line no-unused-vars
export const groupBy = <T, K extends keyof any>(list: Array<T> | T[], getKey: (item: T) => K) =>
  list.reduce((previous, currentItem) => {
    const group = getKey(currentItem);
    // eslint-disable-next-line no-param-reassign
    if (!previous[group]) previous[group] = [];
    previous[group].push(currentItem);
    return previous;
  }, {} as Record<K, T[]>);

/* eslint-disable @typescript-eslint/ban-types */
export const debounce = <T = Function>(fn: T, ms?: number, immediate?: boolean): T => {
  let timeoutId: ReturnType<typeof setTimeout>;
  return function (this: any, ...args: any[]) {
    const callNow = immediate && !ms;
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    const next = () => (fn as Function).apply(this, args);

    clearTimeout(timeoutId);
    timeoutId = setTimeout(next, ms);
    if (callNow) next();
  };
};
