import { BsBell } from 'react-icons/bs';
import { CiSearch } from 'react-icons/ci';
import { FiEdit } from 'react-icons/fi';
import { RiMenuFill } from 'react-icons/ri';


export default function HomePage() {
  return (
    <div className="flex h-screen w-full flex-col ">
      <header className="h-20 w-full flex flex-row justify-around items-center border-b border-gray-300">
        <div>
          <RiMenuFill className='text-2xl' />
        </div>
        <div>Ultimate Blog App</div>
        <div className='flex items-center space-x-2'>
          <div>
            <BsBell className='text-2xl text-gray-600' />
          </div>
          <div>
            <div className='w-5 h-5 bg-gray-500 rounded-full'></div>
          </div>
          <div>
            <button className='flex justify-center items-center border border-gray-200 hover:bg-gray-600 hover:text-gray-100 px-4 py-2 rounded bg-[#e3e7f0] space-x-3 text-gray-600'>
              <div>Write</div>
              <div>
                <FiEdit className='text-2xl' />
              </div>
            </button>
          </div>
        </div>
      </header>
      <section className='grid grid-cols-12 place-items-center w-full h-full px-20'>
        <main className='col-span-8 border-r border-gray-300 w-full h-full'>
          <div className='flex flex-col space-y-4 w-full p-10'>
            <div className='flex space-x-4 items-center relative'>
              <CiSearch className='absolute flex items-center left-5 text-xl' />
              <input
                type="text"
                name='search'
                id='search'
                className='px-6 py-2 bg-gray-300 rounded' />
            </div>
            <div className='flex '>
              <div>My Topics</div>
              <div>all tags are here</div>
            </div>
          </div>
          <div>

          </div>
        </main>
        <aside className='col-span-4 w-full h-full'>this is used for side bar</aside>

      </section>

    </div >
  )
}
