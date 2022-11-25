import { LanguageChange } from './languages';
import { ThemeChange } from './themes';

export default async function Home() {
  return (
    <div className='p-10 text-center'>
      <h1 className='text-3xl pb-6'>Hello World</h1>
      <div
        style={{
          marginLeft: '200px'
        }}>
        <LanguageChange />
        <ThemeChange />
      </div>
    </div>
  );
}
