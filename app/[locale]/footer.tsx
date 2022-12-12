'use client';
import { LocaleLink } from '@/ui/locale-link';
import clsx from 'classnames';
import { useI18n } from '@/i18n';

const WillinLogo = ({ size, className }: { size: string; className: string }) => (
  <svg
    viewBox='0 0 512 512'
    xmlns='http://www.w3.org/2000/svg'
    className={clsx('fill-current', className)}
    style={{
      width: size || '32px',
      height: size || '32px'
    }}>
    <circle
      cx='256'
      cy='256'
      r='220'
      style={{
        strokeWidth: '32px',
        stroke: 'currentColor',
        fill: 'none'
      }}
    />
    <path d='M 257.366 65.784 L 257.366 446.234 C 247.816 445.374 238.366 445.124 229.126 443.534 C 218.666 441.734 208.426 438.654 198.056 436.294 C 194.856 435.564 193.526 433.694 192.626 430.674 C 184.006 401.834 175.32 373.011 166.566 344.204 C 166.056 342.514 165.426 340.854 164.486 338.114 L 133.886 400.114 C 93.216 363.854 70.496 319.114 67.966 265.114 C 65.176 205.634 86.896 155.714 131.176 115.274 L 131.176 273.274 L 132.326 273.714 L 164.566 236.884 L 193.956 304.274 L 195.146 304.064 L 195.146 298.304 C 195.146 226.304 195.11 154.304 195.036 82.304 C 195.036 77.714 196.216 75.684 200.776 74.304 C 219.137 68.78 238.193 65.911 257.366 65.784 Z' />
    <path d='M 348.903 238.435 C 338.903 261.355 329.393 283.255 319.853 305.145 L 319.213 304.995 L 319.213 77.315 C 325.313 79.855 331.213 82.075 336.873 84.705 C 352.455 91.91 366.933 101.294 379.873 112.575 C 381.518 114.051 382.544 116.094 382.743 118.295 C 382.89 170.295 382.923 222.295 382.843 274.295 C 382.843 274.765 382.723 275.295 382.493 276.935 Z' />
    <path d='M 320.519 434.238 L 349.729 337.878 C 350.487 338.942 351.192 340.043 351.839 341.178 C 360.832 359.371 369.812 377.571 378.779 395.778 C 379.779 397.778 380.779 399.388 378.389 401.388 C 361.156 415.619 341.572 426.736 320.519 434.238 Z' />
  </svg>
);

const Github = () => (
  <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' className='inline-block w-6 h-6 fill-current'>
    <path d='M256,32C132.3,32,32,134.9,32,261.7c0,101.5,64.2,187.5,153.2,217.9a17.56,17.56,0,0,0,3.8.4c8.3,0,11.5-6.1,11.5-11.4,0-5.5-.2-19.9-.3-39.1a102.4,102.4,0,0,1-22.6,2.7c-43.1,0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1,1.4-14.1h.1c22.5,2,34.3,23.8,34.3,23.8,11.2,19.6,26.2,25.1,39.6,25.1a63,63,0,0,0,25.6-6c2-14.8,7.8-24.9,14.2-30.7-49.7-5.8-102-25.5-102-113.5,0-25.1,8.7-45.6,23-61.6-2.3-5.8-10-29.2,2.2-60.8a18.64,18.64,0,0,1,5-.5c8.1,0,26.4,3.1,56.6,24.1a208.21,208.21,0,0,1,112.2,0c30.2-21,48.5-24.1,56.6-24.1a18.64,18.64,0,0,1,5,.5c12.2,31.6,4.5,55,2.2,60.8,14.3,16.1,23,36.6,23,61.6,0,88.2-52.4,107.6-102.3,113.3,8,7.1,15.2,21.1,15.2,42.5,0,30.7-.3,55.5-.3,63,0,5.4,3.1,11.5,11.4,11.5a19.35,19.35,0,0,0,4-.4C415.9,449.2,480,363.1,480,261.7,480,134.9,379.7,32,256,32Z'></path>
  </svg>
);

const CSDN = () => (
  <svg viewBox='0 0 1024 1024' version='1.1' xmlns='http://www.w3.org/2000/svg' className='inline-block w-6 h-6 fill-current'>
    <path d='M512 1024C229.2224 1024 0 794.7776 0 512 0 229.2224 229.2224 0 512 0c282.7776 0 512 229.2224 512 512 0 282.7776-229.2224 512-512 512z m17.066667-413.525333c34.850133 4.352 68.778667 5.12 102.741333 2.0992 23.04-2.048 44.817067-8.362667 64.170667-21.9136 38.212267-26.794667 49.783467-85.1968 24.251733-123.050667-14.626133-21.7088-36.8128-30.344533-60.757333-35.498667-35.054933-7.543467-70.4512-5.751467-105.847467-3.413333-5.666133 0.3584-6.7584 3.072-7.236267 8.209067-3.072 32.682667-6.536533 65.314133-9.813333 97.962666-2.5088 24.814933-4.932267 49.629867-7.509333 75.605334z m53.4016-33.928534c1.962667-20.906667 3.6352-39.338667 5.4272-57.770666 1.553067-15.906133 3.413333-31.778133 4.727466-47.701334 0.3584-4.283733 1.553067-6.656 5.956267-6.382933 15.616 1.041067 31.709867 0.034133 46.728533 3.652267 36.488533 8.823467 48.725333 54.306133 23.3472 83.029333-15.8208 17.902933-36.7616 23.586133-59.255466 25.088-8.465067 0.546133-17.015467 0.085333-26.9312 0.085333zM512 434.295467c-2.184533-0.648533-3.5328-1.1776-4.932267-1.4336-37.717333-6.877867-75.690667-8.328533-113.646933-2.816-20.974933 3.037867-41.0112 9.489067-57.480533 23.330133-22.9888 19.319467-21.640533 46.848 4.4032 62.0032 13.056 7.594667 28.023467 12.509867 42.5984 17.288533 14.08 4.608 28.996267 6.826667 43.144533 11.264 12.5952 3.925333 14.011733 14.318933 3.584 22.306134-3.345067 2.56-7.441067 5.085867-11.537067 5.751466-11.195733 1.826133-22.698667 4.386133-33.826133 3.566934-24.098133-1.774933-48.042667-5.461333-72.5504-8.430934-1.365333 10.615467-2.935467 23.0912-4.5568 35.9424 4.181333 1.365333 7.68 2.730667 11.264 3.618134 33.9456 8.4992 68.386133 9.608533 102.912 5.12 20.087467-2.6112 39.4752-7.901867 56.695467-19.029334 28.603733-18.4832 36.693333-57.1904-4.676267-75.383466-14.506667-6.382933-30.190933-10.410667-45.482667-15.086934-11.4176-3.4816-23.313067-5.614933-34.525866-9.5232-9.7792-3.413333-11.144533-12.202667-3.037867-18.397866 4.6592-3.549867 10.717867-6.997333 16.384-7.3728a480.853333 480.853333 0 0 1 53.384533-0.853334c15.377067 0.699733 30.651733 3.549867 46.4896 5.5296L512 434.295467z m257.143467 2.048L750.933333 614.2976h54.152534c4.778667-45.636267 9.710933-90.7264 14.062933-135.8848 0.6144-6.365867 2.3552-8.840533 8.686933-9.0112 11.434667-0.273067 22.8864-1.979733 34.286934-1.570133 23.722667 0.853333 42.3936 9.728 38.4 43.264-2.901333 24.2688-5.597867 48.571733-8.2432 72.874666-1.092267 10.069333-1.826133 20.189867-2.730667 30.4128h55.330133c3.584-35.259733 7.9872-70.058667 10.496-104.994133 3.413333-47.4624-17.7664-73.3184-64.682666-80.213333-40.96-6.007467-81.339733-0.341333-121.5488 7.133866z m-483.498667 134.6048c-8.738133 1.297067-16.384 2.798933-24.098133 3.4816-25.6512 2.235733-51.319467 3.9424-76.305067-4.266667-13.909333-4.590933-24.6784-12.578133-29.7984-25.9584-7.901867-20.701867 0.887467-47.104 19.831467-60.3136 17.373867-12.117333 37.717333-15.9232 58.453333-15.9232 22.545067-0.017067 45.090133 2.423467 68.232533 3.84L307.2 432.298667c-15.069867-1.723733-29.4912-3.925333-43.997867-4.9152-41.0112-2.798933-80.64 2.6112-117.469866 20.462933-30.020267 14.557867-52.053333 36.010667-58.6752 68.130133-7.850667 38.144 11.537067 69.495467 51.7632 85.845334 19.1488 7.765333 39.287467 12.509867 60.0064 12.5952 24.746667 0.1024 49.493333-1.570133 74.205866-2.952534 3.106133-0.170667 8.311467-2.901333 8.669867-5.034666 1.979733-11.554133 2.730667-23.278933 3.9424-35.464534z'></path>
  </svg>
);

const Zhihu = () => (
  <svg viewBox='0 0 1024 1024' version='1.1' xmlns='http://www.w3.org/2000/svg' className='inline-block w-6 h-6 fill-current'>
    <path d='M512 73.28A438.72 438.72 0 1 0 950.72 512 438.72 438.72 0 0 0 512 73.28z m-98.56 458.88l-16.8 66.88 23.68-20.8s53.92 61.28 64 76.48 1.44 68.96 1.44 68.96l-92.48-113.12s-29.12 101.12-68.48 124.16a97.6 97.6 0 0 1-80 6.56 342.08 342.08 0 0 0 85.44-89.76 382.88 382.88 0 0 0 39.52-119.36h-115.04s8.8-40.48 24.16-41.6 90.88 0 90.88 0l-1.76-124.8-43.2 2.24a96 96 0 0 1-32 48c-24.16 17.44-38.4 10.88-38.4 10.88s42.72-118.24 55.84-141.28 50.4-25.12 50.4-25.12l-23.04 66.72h147.84c17.6 0 18.56 40.64 18.56 40.64h-90.56v122.56s61.28-2.24 81.12 0 19.68 41.6 19.68 41.6z m329.44 160h-91.52l-65.12 46.24-13.6-46.24h-36.96v-368h208z'></path>
    <path d='M602.88 691.68l54.88-41.44h43.04V364.64h-121.12v285.6h11.2l12 41.44z'></path>
  </svg>
);

const Juejin = () => (
  <svg viewBox='0 0 36 28' xmlns='http://www.w3.org/2000/svg' className='inline-block w-6 h-6 fill-current'>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M17.5875 6.77268L21.8232 3.40505L17.5875 0.00748237L17.5837 0L13.3555 3.39757L17.5837 6.76894L17.5875 6.77268ZM17.5863 17.3955H17.59L28.5161 8.77432L25.5526 6.39453L17.59 12.6808H17.5863L17.5825 12.6845L9.61993 6.40201L6.66016 8.78181L17.5825 17.3992L17.5863 17.3955ZM17.5828 23.2891L17.5865 23.2854L32.2133 11.7456L35.1768 14.1254L28.5238 19.3752L17.5865 28L0.284376 14.3574L0 14.1291L2.95977 11.7531L17.5828 23.2891Z'
    />
  </svg>
);

const SegmentFault = () => (
  <svg viewBox='0 0 1024 1024' version='1.1' xmlns='http://www.w3.org/2000/svg' className='inline-block w-6 h-6 fill-current'>
    <path d='M0 512V0h1024v1024H0z m388.670877 371.042807c52.484491-13.904842 91.791719-44.404772 110.645895-85.849825 8.344702-18.337684 10.213053-30.284351 10.195088-65.122807-0.013474-37.376-1.482105-45.451228-11.838878-65.122807-21.616281-41.072281-50.391579-61.287298-131.637894-92.478877-59.329123-22.779509-69.111018-28.725895-76.557474-46.547087-12.305965-29.453474 4.464281-53.400702 41.256421-58.91593 32.368281-4.855018 70.534737 5.313123 123.805193 32.983579 4.239719 2.200702 43.987088-77.352421 43.987088-88.041544 0-6.018246-8.623158-12.350877-30.31579-22.276491-88.477193-40.465965-211.653614-35.341474-272.397473 11.34035-72.748912 55.911298-72.178526 173.981193 1.100351 227.377404 24.724211 18.018807 52.277895 31.959579 102.992842 52.098246C347.827649 701.51186 363.789474 715.946667 363.789474 740.257684c0 63.640702-94.199018 71.671018-169.440562 14.448281l-23.475649-17.857123-11.331368 20.066807-22.559439 39.949474c-6.175439 10.940632-11.22807 22.85586-11.22807 26.480281 0 7.792281 32.673684 29.561263 67.381895 44.894315 22.878316 10.105263 54.914246 18.476912 87.565473 22.873825 21.845333 2.941754 83.918596-1.702175 107.969123-8.075228z m380.52379-201.498947l-1.046456-196.491228H866.807018V377.263158h-98.807018l0.026947-46.035088C768.067368 255.492491 778.689123 233.54386 815.301614 233.54386c11.196632 0 27.454877 2.964211 36.127439 6.588631 12.036491 5.030175 16.217825 5.299649 17.664 1.122807 1.037474-3.009123 8.025825-22.528 15.521684-43.37628 7.500351-20.852772 13.630877-41.512421 13.630877-45.909334 0-13.886877-56.140351-28.016281-112.280702-28.258807-59.005754-0.251509-87.264561 8.560281-117.185123 36.549614-35.579509 33.28-41.826807 53.557895-43.677193 141.774597L623.521684 377.263158H561.403509v107.789474h62.877193v395.452631l72.982456-1.235088 72.982456-1.235087z'></path>
  </svg>
);

export function MainFooter() {
  const { t } = useI18n();

  return (
    <footer className='p-10 bg-neutral text-neutral-content mt-10'>
      <div className='footer w-full max-w-screen-2xl mx-auto'>
        <div>
          <LocaleLink href='/'>
            <WillinLogo size='50px' className='hover:rotate-[360deg] ease-linear duration-300 transition-all' />
          </LocaleLink>
          <p>
            Willin Wang <small>&copy; 2002 ~ {new Date().getFullYear()}.</small>
            <br />
            <small>
              Made with ❤️ and{' '}
              <a href='http://nextjs.org' target='_blank' rel='noopener noreferrer'>
                Next.js
              </a>{' '}
              |{' '}
              <a href='https://beian.miit.gov.cn/' target='_blank' rel='noopener noreferrer'>
                苏ICP备17011988号-1
              </a>
            </small>
          </p>
        </div>
        <div>
          <span className='footer-title'>{t('social')}</span>
          <div className='grid grid-flow-col gap-4'>
            <a href='https://segmentfault.com/u/willin' target='_blank' className='hover:text-secondary' rel='noopener noreferrer' aria-label='SegmentFault'>
              <SegmentFault />
            </a>

            <a href='https://blog.csdn.net/jslygwx?type=blog' target='_blank' className='hover:text-secondary' rel='noopener noreferrer' aria-label='CSDN'>
              <CSDN />
            </a>
            <a href='https://www.zhihu.com/people/willin' target='_blank' className='hover:text-secondary' rel='noopener noreferrer' aria-label='知乎'>
              <Zhihu />
            </a>

            <a href='https://juejin.cn/user/1873223546052391' target='_blank' className='hover:text-secondary' rel='noopener noreferrer' aria-label='掘金'>
              <Juejin />
            </a>

            <a href='https://github.com/willin' target='_blank' className='hover:text-secondary' aria-label='Github' rel='noopener noreferrer'>
              <Github />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
