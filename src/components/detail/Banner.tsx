import { AiOutlineClockCircle } from 'react-icons/ai'
function Banner() {
  return (
    <>
      <div className='relative mt-[6rem]'>
        <img src='/src/assets/mha-banner.jpg' alt='' className='w-full  overflow-hidden rounded-t-lg' />
        <div className='bg-hero absolute top-0 h-full w-full'>
          <div className='relative mx-auto h-full w-32 lg:w-full'>
            <img
              src='/src/assets/mha.jpg'
              alt=''
              className='absolute bottom-0 mx-auto w-full translate-y-3/4 transform rounded-lg shadow-lg lg:w-auto lg:translate-x-24 lg:translate-y-1/2'
            />
            <div className='absolute bottom-0 ml-[20rem] mt-20 hidden lg:mt-0 lg:block'>
              <div className=' m-4'>
                <h2 className='text-sm text-gray-200 text-opacity-75'>Horikoshi Kohei</h2>
                <h3 className='mt-1 text-2xl font-extrabold text-white'>My Hero Academia (FULL HD)</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='border-b-2 border-gray-400 bg-gray-200 py-4'>
        <div className='mx-auto mt-40 lg:ml-[20rem] lg:mt-0'>
          <div className='m-4 mt-0 text-center lg:text-start'>
            <div className='lg:hidden'>
              <p className='text-xl font-extrabold text-gray-800 '>My Hero Academia (FULL HD)</p>
              <p className='mb-4 text-sm text-gray-500'>Horikoshi Kohei</p>
            </div>
            <p className='mb-4 flex items-center justify-center gap-2 text-sm text-gray-700 lg:justify-start'>
              <AiOutlineClockCircle />8 giờ trước
            </p>
            <p className='mb-4 text-justify text-gray-900'>
              Câu chuyện kể về hành trình Deku trở thành anh hùng tuyệt vời nhất. Xem những thông tin mới nhất tại
              Fanpage: https://www.facebook.com/BnHAVN
            </p>
            <div className='flex justify-center gap-2 lg:justify-start'>
              <button className='cursor-pointer rounded-md bg-gray-500 px-6 py-2 text-sm font-bold uppercase text-gray-600'>
                ĐĂNG NHẬP ĐỂ THEO DÕI
              </button>
              <button className='button cursor-pointer rounded-md bg-blue-600 px-6 py-2 text-sm font-bold uppercase text-white'>
                Đọc từ chap 1001
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Banner
