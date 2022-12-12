'use client';
import { languages, useI18n } from '@/i18n';
import { Counter } from '../components/counter';

type ContentStatsProps = {
  locale: string;
  count: number;
  sum: {
    wordcount: number;
    readtime: number;
  };
};

export function ContentStats({ stats, locale }: { locale: string; stats: ContentStatsProps[] }) {
  const { t } = useI18n();
  const totalContents = stats.reduce<number>((acc, item) => acc + item.count, 0);
  const localeContents = stats.filter((item) => item.locale === locale).reduce<number>((acc, item) => acc + item.count, 0);
  const totalWordcount = stats.reduce<number>((acc, item) => acc + item.sum.wordcount, 0);
  const localeWordcount = stats.filter((item) => item.locale === locale).reduce<number>((acc, item) => acc + item.sum.wordcount, 0);
  const totalReadtime = Math.ceil(stats.reduce<number>((acc, item) => acc + item.sum.readtime, 0) / 60);
  const localeReadtime = Math.ceil(stats.filter((item) => item.locale === locale).reduce<number>((acc, item) => acc + item.sum.readtime, 0) / 60);
  const lang = locale as 'zh-CN';

  return (
    <div className='stats stats-vertical lg:stats-horizontal shadow my-2 flex'>
      <div className='stat place-items-center basis-1/3'>
        <div className='stat-title'>{t('stats.total_contents')}</div>
        <div className='stat-value'>
          <Counter from={0} to={totalContents} />
        </div>
        <div
          className='stat-desc'
          dangerouslySetInnerHTML={{ __html: t('stats.locale_contents', { value: localeContents, locale: languages[lang].name }) }}></div>
      </div>

      <div className='stat place-items-center basis-1/3'>
        <div className='stat-title'>{t('stats.total_wordcount')}</div>
        <div className='stat-value'>
          <Counter from={0} to={totalWordcount} />
        </div>
        <div
          className='stat-desc'
          dangerouslySetInnerHTML={{ __html: t('stats.locale_wordcount', { value: localeWordcount, locale: languages[lang].name }) }}></div>
      </div>

      <div className='stat place-items-center basis-1/3'>
        <div className='stat-title'>{t('stats.total_readtime')}</div>
        <div className='stat-value'>
          <Counter from={0} to={totalReadtime} />
        </div>
        <div
          className='stat-desc'
          dangerouslySetInnerHTML={{ __html: t('stats.locale_readtime', { value: localeReadtime, locale: languages[lang].name }) }}></div>
      </div>
    </div>
  );
}
