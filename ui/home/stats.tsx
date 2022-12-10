'use client';
import { Statistics } from '@/models/statistics';
import { useI18n } from '@/i18n';
import { Counter } from '@/ui/components/counter';

export function Stats({ stats }: { stats: Statistics }) {
  const { t } = useI18n();

  const { value: githubStars = 0 } = stats.contribution?.find((item) => item.name === 'Total Stars Earned') || {};

  return (
    <div>
      <div className='stats stats-vertical lg:stats-horizontal shadow'>
        <div className='stat'>
          <div className='stat-title'>{t('stats.github_followers')}</div>
          <div className='stat-value'>
            <Counter from={0} to={stats.github} />
          </div>
        </div>

        <div className='stat'>
          <div className='stat-title'>{t('stats.github_stars')}</div>
          <div className='stat-value'>
            <Counter from={0} to={githubStars} />
          </div>
        </div>

        <div className='stat'>
          <div className='stat-title'>{t('stats.npm_downloads')}</div>
          <div className='stat-value'>
            <Counter from={0} to={stats.npm} />
          </div>
        </div>
      </div>
    </div>
  );
}
