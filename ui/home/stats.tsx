'use client';
import { Statistics } from '@/models/statistics';
import { useI18n } from '@/i18n';
import { Counter } from '@/ui/components/counter';

export function Stats({ stats }: { stats: Statistics }) {
  const { t } = useI18n();

  const { value: githubStars = 0 } = stats.contribution?.find((item) => item.name === 'Total Stars Earned') || {};
  const { value: githubCommits = 0 } = stats.contribution?.find((item) => item.name === 'Total Commits') || {};
  const { value: githubPRs = 0 } = stats.contribution?.find((item) => item.name === 'Total PRs') || {};
  const { value: githubThirds = 0 } = stats.contribution?.find((item) => item.name === 'Contributed to (last year)') || {};

  return (
    <div className='flex flex-col'>
      <div className='stats stats-vertical lg:stats-horizontal shadow my-2 flex'>
        <div className='stat place-items-center basis-1/3'>
          <div className='stat-title'>{t('stats.github_followers')}</div>
          <div className='stat-value'>
            <Counter from={0} to={stats.github} />
          </div>
        </div>

        <div className='stat place-items-center basis-1/3'>
          <div className='stat-title'>{t('stats.github_stars')}</div>
          <div className='stat-value'>
            <Counter from={0} to={githubStars as number} />
          </div>
        </div>

        <div className='stat place-items-center basis-1/3'>
          <div className='stat-title'>{t('stats.npm_downloads')}</div>
          <div className='stat-value'>
            <Counter from={0} to={stats.npm} />
          </div>
        </div>
      </div>

      <div className='stats stats-vertical lg:stats-horizontal shadow my-2 flex'>
        <div className='stat place-items-center basis-1/3'>
          <div className='stat-title'>{t('stats.github_prs')}</div>
          <div className='stat-value'>
            <Counter from={0} to={githubPRs as number} />
          </div>
        </div>

        <div className='stat place-items-center basis-1/3'>
          <div className='stat-title'>{t('stats.github_commits')}</div>
          <div className='stat-value'>
            <Counter from={0} to={githubCommits as number} />
          </div>
        </div>

        <div className='stat place-items-center basis-1/3'>
          <div className='stat-title'>{t('stats.github_contributes')}</div>
          <div className='stat-value'>
            <Counter from={0} to={githubThirds as number} />
          </div>
        </div>
      </div>

      <div className='flex flex-col lg:flex-row justify-around'>
        <div className='overflow-x-auto flex justify-center my-2 lg:basis-1/2 lg:pr-2'>
          <table className='table table-zebra w-full min-w-full'>
            <thead>
              <tr>
                <th>{t('stats.language')}</th>
                <th>{t('stats.time_last_week')}</th>
              </tr>
            </thead>
            <tbody>
              {stats.wakatime.map(({ name, value }) => (
                <tr key={`t-${name as string}`}>
                  <th>{name as string}</th>
                  <td>{value as string}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className='overflow-x-auto flex justify-center my-2 lg:basis-1/2 lg:pl-2'>
          <table className='table table-zebra w-full min-w-full'>
            <thead>
              <tr>
                <th>{t('stats.language')}</th>
                <th>{t('stats.percentage')}</th>
              </tr>
            </thead>
            <tbody>
              {stats.programming
                .filter(({ name }) => !['Other', 'JSON', 'Text', 'CSV', 'sh'].includes(name))
                .slice(0, stats.wakatime.length)
                .map(({ name, value }) => (
                  <tr key={`p-${name as string}`}>
                    <th>{name as string}</th>
                    <td>{value as string}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
