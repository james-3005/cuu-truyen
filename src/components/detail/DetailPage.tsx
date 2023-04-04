import Banner from './Banner'
import Content from './Content'

function DetailPage() {
  return (
    <div className='p-2'>
      <div className='container mx-auto w-full overflow-hidden rounded-t-lg'>
        <Banner />
        <Content />
      </div>
    </div>
  )
}

export default DetailPage
