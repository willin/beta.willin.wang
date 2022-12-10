'use client';
import clsx from 'classnames';
import { useI18n } from '@/i18n';

export function OnlineStatus({ online, coding }: { online: boolean; coding: boolean }) {
  const { t } = useI18n();
  const status = coding ? t('status.coding') : online ? t('status.online') : t('status.offline');

  return (
    <div data-tip={status} className='tooltip tooltip-primary tooltip-bottom'>
      <div
        className={clsx('my-6 avatar indicator', {
          online: online,
          offline: !online
        })}>
        {coding && <span className='indicator-item indicator-bottom badge'>Coding...</span>}
        <div className='rounded-full w-24 h-24 ring ring-primary ring-offset-base-100 ring-offset-2'>
          <img
            alt='avatar'
            src='/images/avatar.jpg'
            className={clsx({
              grayscale: !online
            })}
          />
        </div>
      </div>
    </div>
  );
}
