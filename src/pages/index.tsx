import { BsBell } from 'react-icons/bs';
import { FiEdit } from 'react-icons/fi';
import { RiMenuFill } from 'react-icons/ri';


export default function HomePage() {
  return (
    <div className="flex h-screen w-full flex-col px-40 ">
      <header className="h-20 w-full flex flex-row justify-between items-center">
        <div>
          <RiMenuFill className='text-xl' />
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
            <button className='flex justify-center items-center border border-gray-200 px-4 py-2 rounded bg-[#e3e7f0]'>
              <div>Write </div>
              <div>
                <FiEdit className='mx-1' />
              </div>
            </button>
          </div>
        </div>
      </header>
      <div className='grid grid-cols-3'>

      </div>

    </div >
  )
}
