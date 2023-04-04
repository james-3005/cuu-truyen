import { useState } from 'react'

function Statistic() {
  const [active, setActive] = useState(1)
  return (
    <section
      className='py-16 px-3 lg:py-24'
      style={{
        backgroundImage: 'url(https://cuutruyen.net/img/stacked.dc6fa1b1.svg)',
        backgroundRepeat: 'repeat-x',
        backgroundSize: 'auto 100%'
      }}
    >
      <h2 className='text-xl font-bold uppercase text-blue-100'>Truyện nổi bật</h2>
      <div className='my-10 flex justify-end'>
        <div className='flex rounded-3xl bg-white'>
          <button
            className={`btn-switch ${active === 1 && 'bg-blue-600 text-white hover:bg-blue-700'}`}
            onClick={() => setActive(1)}
          >
            Tuần
          </button>
          <button
            className={`btn-switch ${active === 2 && 'bg-blue-600 text-white hover:bg-blue-700'}`}
            onClick={() => setActive(2)}
          >
            Tháng
          </button>
          <button
            className={`btn-switch ${active === 3 && 'bg-blue-600 text-white hover:bg-blue-700'}`}
            onClick={() => setActive(3)}
          >
            Mọi lúc
          </button>
        </div>
      </div>
      <div className='mt-4 grid grid-cols-2 gap-4'>
        {Array(10)
          .fill('')
          .map((_, index) => (
            <div className='relative flex cursor-pointer rounded-lg bg-blue-100 p-2 hover:bg-white' key={index}>
              <div className='absolute top-0 right-0 mr-2 text-3xl text-gray-800 text-opacity-10 md:text-4xl'>
                {`${index + 1}`.padStart(2, '0')}
              </div>
              <img
                src='/src/assets/jjk.jpg'
                alt=''
                className='h-[5.25rem] w-[3.5rem] flex-none cursor-pointer overflow-hidden rounded-lg'
              />
              <div className='p-2'>
                <p className='font-extrabold text-black text-opacity-90 line-clamp-1'>Jujutsu Kaisen</p>
                <p className='text-sm uppercase tracking-wide text-black text-opacity-60 line-clamp-1'>
                  <span className='font-semibold'>Chương 314</span>
                  <span> - 3 ngày trước</span>
                </p>
              </div>
            </div>
          ))}
      </div>
    </section>
  )
}

export default Statistic
