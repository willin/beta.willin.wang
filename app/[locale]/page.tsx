import { getStats } from '@/models/statistics';
import { OnlineStatus } from '../../ui/home/online-status';
import { use } from 'react';
import { Stats } from '@/ui/home/stats';
import { SiteStates } from '@/ui/home/content-stats';
import { getInteractionStatistics, InteractionType, updateContentInteract } from '@/models/interactions';
import { getContentsStatistics } from '@/models/contents';

export default function Home({ params: { locale } }: { params: { locale: string } }) {
  const stats = use(getStats());
  const contentStats = use(getContentsStatistics());
  const interactionStats = use(getInteractionStatistics());
  if (!stats || !contentStats || !interactionStats) return null;
  void updateContentInteract('index', InteractionType.OTHER, locale);

  return (
    <div className='text-center'>
      <OnlineStatus online={stats.online} coding={stats.coding} />
      <h1 className='py-2'>To be Willin is to be willing.</h1>
      <SiteStates stats={contentStats as any} interactions={interactionStats as any} />
      <div>Top Views TBD</div>
      {/* @ts-ignore */}
      <Stats stats={stats} />
    </div>
  );
}
