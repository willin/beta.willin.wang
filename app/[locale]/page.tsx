import { getStats } from '@/models/statistics';
import { OnlineStatus } from '../../ui/home/online-status';
import { use } from 'react';
import { Stats } from '@/ui/home/stats';
import { InteractionType, updateContentInteract } from '@/models/interactions';

export default function Home({ params: { locale } }: { params: { locale: string } }) {
  const stats = use(getStats());
  if (!stats) return null;
  use(updateContentInteract('index', InteractionType.OTHER, locale));

  return (
    <div className='text-center'>
      <OnlineStatus online={stats.online} coding={stats.coding} />
      <h1 className='py-2'>To be Willin is to be willing.</h1>
      {/* @ts-ignore */}
      <Stats stats={stats} />
    </div>
  );
}
