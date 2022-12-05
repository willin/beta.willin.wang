import { MainHeader } from './header';
import { PageLinks } from './page-links';

export function MainDrawer({ children, locale }: { children: React.ReactNode; locale: string }) {
  return (
    <div className='drawer'>
      <input id='my-drawer-3' type='checkbox' className='drawer-toggle' />
      <div className='drawer-content flex flex-col'>
        <MainHeader locale={locale} />
        {children}
      </div>
      <div className='drawer-side'>
        <label htmlFor='my-drawer-3' className='drawer-overlay'></label>
        <PageLinks className='menu p-4 w-80 bg-base-100' locale={locale} />
      </div>
    </div>
  );
}
