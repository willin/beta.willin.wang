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

type InteractionStatsProps = {
  locale: string;
  sum: {
    views: number;
    likes: number;
  };
};

export function SiteStates({ stats, interactions }: { stats: ContentStatsProps[]; interactions: InteractionStatsProps[] }) {
  const { t, locale } = useI18n();
  const lang = locale() as 'zh-CN';

  const totalContents = stats.reduce<number>((acc, item) => acc + item.count, 0);
  const localeContents = stats.filter((item) => item.locale === lang).reduce<number>((acc, item) => acc + item.count, 0);
  const totalWordcount = stats.reduce<number>((acc, item) => acc + item.sum.wordcount, 0);
  const localeWordcount = stats.filter((item) => item.locale === lang).reduce<number>((acc, item) => acc + item.sum.wordcount, 0);
  const totalReadtime = Math.ceil(stats.reduce<number>((acc, item) => acc + item.sum.readtime, 0) / 60);
  const localeReadtime = Math.ceil(stats.filter((item) => item.locale === lang).reduce<number>((acc, item) => acc + item.sum.readtime, 0) / 60);

  const totalViews = interactions.reduce<number>((acc, item) => acc + item.sum.views, 0);
  const localeViews = interactions.filter((item) => item.locale === lang).reduce<number>((acc, item) => acc + item.sum.views, 0);
  // const totalLikes = interactions.reduce<number>((acc, item) => acc + item.sum.likes, 0);
  // const localeLikes = interactions.filter((item) => item.locale === lang).reduce<number>((acc, item) => acc + item.sum.likes, 0);

  return (
    <div className='stats stats-vertical lg:stats-horizontal shadow my-2 flex'>
      <div className='stat place-items-center basis-1/4'>
        <div className='stat-title'>{t('stats.total_contents')}</div>
        <div className='stat-value'>
          <Counter from={0} to={totalContents} />
        </div>
        <div
          className='stat-desc'
          dangerouslySetInnerHTML={{ __html: t('stats.locale_contents', { value: localeContents, locale: languages[lang].name }) }}></div>
      </div>

      <div className='stat place-items-center basis-1/4'>
        <div className='stat-title'>{t('stats.total_wordcount')}</div>
        <div className='stat-value'>
          <Counter from={0} to={totalWordcount} />
        </div>
        <div
          className='stat-desc'
          dangerouslySetInnerHTML={{
            __html: t('stats.locale_wordcount', { value: `${Math.ceil(localeWordcount / 100) / 10}k`, locale: languages[lang].name })
          }}></div>
      </div>

      <div className='stat place-items-center basis-1/4'>
        <div className='stat-title'>{t('stats.total_views')}</div>
        <div className='stat-value'>
          <Counter from={0} to={totalViews} />
        </div>
        <div
          className='stat-desc'
          dangerouslySetInnerHTML={{ __html: t('stats.locale_views', { value: `${Math.ceil(localeViews / 100) / 10}k`, locale: languages[lang].name }) }}></div>
      </div>

      {/* <div className='stat place-items-center basis-1/4'>
        <div className='stat-title'>{t('stats.total_likes')}</div>
        <div className='stat-value'>
          <Counter from={0} to={totalLikes} />
        </div>
        <div className='stat-desc' dangerouslySetInnerHTML={{ __html: t('stats.locale_likes', { value: localeLikes, locale: languages[lang].name }) }}></div>
      </div> */}

      <div className='stat place-items-center basis-1/4'>
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
