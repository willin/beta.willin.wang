import { getStats } from '@/models/statistics';
import { OnlineStatus } from '../../ui/home/online-status';
import { use } from 'react';
import { Stats } from '@/ui/home/stats';

export default function Home() {
  const stats = use(getStats());
  if (!stats) return null;

  return (
    <div className='text-center'>
      <OnlineStatus online={stats.online} coding={stats.coding} />
      <h1 className='py-2'>To be Willin is to be willing.</h1>
      {/* @ts-ignore */}
      <Stats stats={stats} />
    </div>
  );
}
