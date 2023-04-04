import { AiFillFacebook, AiFillInstagram, AiOutlineDownload } from 'react-icons/ai'
function Content() {
  return (
    <div className='rounded-b-lg bg-white py-6  px-4 shadow-2xl'>
      <div className='flex gap-8'>
        <div className='grow'>
          <div className='mb-4 overflow-hidden rounded-md'>
            <div className='flex items-center bg-gray-100 p-4'>
              <div className='grid h-7 w-7 place-items-center rounded-full bg-blue-300 text-xs font-bold uppercase text-blue-600'>
                M
              </div>
              <div className='ml-2'>
                <p className='text-sm font-bold uppercase text-gray-800'>MY HERO ACADEMIA VN FANPAGE</p>
                <p className='text-xs uppercase text-gray-500'> 1 Truyện</p>
              </div>
              <div className='ml-auto flex gap-2 text-gray-500'>
                <AiFillFacebook />
                <AiFillInstagram />
              </div>
            </div>
            <div className='bg-gray-200 p-4'>
              <p className='mb-2 text-sm font-bold uppercase text-gray-600'>Trang chính thức</p>
              <p className='mb-2 text-sm text-gray-700'>nxbkimdong.com.vn</p>
              <p className='mb-2 text-sm font-bold uppercase text-gray-600'>Thông tin thêm</p>
              <p className='text-sm text-gray-700'>
                <span className='font-extrabold text-gray-800'>91</span>
                &nbsp;chương đã đăng
              </p>
            </div>
          </div>
          <div className='max-h-[35rem] overflow-y-auto'>
            {Array(10)
              .fill('')
              .map((item, index) => (
                <div
                  key={index}
                  className='mt-1 flex items-center border-l-4 border-gray-300 bg-gray-50 p-2 first:mt-0 even:bg-gray-100'
                >
                  <p className='w-[120px] px-3 font-bold text-gray-800'>Chương {index + 1}</p>
                  <div className=''>
                    <p className='text-gray-700'>Chút nữa thì</p>
                    <p className='text-xs text-gray-500'>7 ngày trước - 30,8K lượt xem - 23 bình luận</p>
                  </div>
                  <div className='ml-auto grid h-8 w-8 cursor-pointer place-items-center rounded-full bg-gray-300'>
                    <AiOutlineDownload />
                  </div>
                </div>
              ))}
          </div>
        </div>
        <section className='hidden w-72 lg:block'>
          <p className='mb-4 text-xs font-bold uppercase text-gray-700'>Cùng nhóm dịch</p>
          {Array(5)
            .fill('')
            .map((_, index) => (
              <div className='mt-2 flex first:mt-0' key={index}>
                <img
                  src='/src/assets/list.jpg'
                  alt=''
                  className='fine-transition h-[3.75rem] w-[2.5rem] flex-none cursor-pointer overflow-hidden rounded-lg object-cover shadow hover:shadow-lg'
                />
                <div className='p-2 pt-1'>
                  <h4 className='mb-1 text-sm font-bold text-gray-600 line-clamp-2'>After GOD</h4>
                  <div className='text-xs uppercase'>
                    <span className='font-semibold'>C. 23</span>
                    <span>- 3 giờ trước</span>
                  </div>
                </div>
              </div>
            ))}
          <p className='my-4 text-xs font-bold uppercase text-gray-700'>Đề xuất</p>
          {Array(5)
            .fill('')
            .map((_, index) => (
              <div className='mt-2 flex first:mt-0' key={index}>
                <img
                  src='/src/assets/blue-lock.jpg'
                  alt=''
                  className='fine-transition h-[3.75rem] w-[2.5rem] flex-none cursor-pointer overflow-hidden rounded-lg object-cover shadow hover:shadow-lg'
                />
                <div className='p-2 pt-1'>
                  <h4 className='mb-1 text-sm font-bold text-gray-600 line-clamp-2'>Blue Lock ({index + 1})</h4>
                  <div className='text-xs uppercase'>
                    <span className='font-semibold'>C. 23</span>
                    <span>- 3 giờ trước</span>
                  </div>
                </div>
              </div>
            ))}
        </section>
      </div>
    </div>
  )
}

export default Content
