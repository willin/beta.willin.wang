import { getStats } from '@/models/statistics';
import { OnlineStatus } from './online-status';
import { use } from 'react';

export default function Home() {
  const stats = use(getStats());
  if (!stats) return null;

  return (
    <div className='p-10 text-center'>
      <div className='flex justify-center flex-wrap'>
        <OnlineStatus online={stats.online} coding={stats.coding} />
      </div>
    </div>
  );
}
