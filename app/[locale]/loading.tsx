export default function Loading() {
  return (
    <div className='flex justify-center'>
      <div className='w-full max-w-screen-2xl'>
        <div className='text-center py-10'>
          <div>
            <button className='btn btn-ghost loading'></button>
          </div>

          <div>
            <progress className='progress w-1/2'></progress>
          </div>
        </div>
      </div>
    </div>
  );
}
