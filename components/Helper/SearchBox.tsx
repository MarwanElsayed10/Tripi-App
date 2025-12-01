import { FaCalendarWeek, FaMap } from 'react-icons/fa'
import { FaUserGroup } from 'react-icons/fa6'

const SearchBox = () => {
  return (
    <div data-aos="zoom-in" data-aos-once="true" className='bg-white rounded-lg py-8 px-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 items-center justify-center gap-x-2 gap-y-8  mt-4 sm:mt-12 w-[90%] sm:w-[80%]'>
      <div className='flex items-center space-x-6 justify-center ml-2 md:ml-6'>
        <FaMap className='w-6 h-6 text-blue-600'/>
        <div className='flex items-start  flex-col w-[50%]'>
            <p className='text-lg font-medium mb-[0.2rem]'>Location</p>
            <input type="text" placeholder='Where are you going?' className='outline-none border-none text-lg' />
        </div>
      </div>
      <div className='flex items-center justify-center space-x-6 ml-2 md:ml-6 '>
        <FaCalendarWeek className='w-6 h-6 text-blue-600'/>
        <div className='flex items-start flex-col w-[50%]'>
            <p className='text-lg font-medium mb-[0.2rem]'>Start Date</p>
            <input type="date" className='outline-none border-none text-lg' />
        </div>
      </div>
      <div className='flex items-center justify-center space-x-6 ml-2 md:ml-6'>
        <FaCalendarWeek className='w-6 h-6 text-blue-600'/>
        <div className='flex items-start flex-col w-[50%]'>
            <p className='text-lg font-medium mb-[0.2rem]'>End Date</p>
            <input type="date" className='outline-none border-none text-lg' />
        </div>
      </div>
      <div className='flex items-center justify-center space-x-6 ml-2 md:ml-6'>
        <FaUserGroup className='w-6 h-6 text-blue-600'/>
        <div className='flex items-start flex-col w-[50%]'>
            <p className='text-lg font-medium mb-[0.2rem]'>Guest</p>
            <p className='text-base font-medium'>
              <select className='text-gray-400 outline-none'>
                <option value="1 Guest 1 Room">1 Guest 1 Room </option>
                <option value="2 Guests 2 Rooms">2 Guests 2 Rooms </option>
                <option value="2 Guests 1 Room">2 Guests 1 Room </option>
                <option value="3 Guests 1 Room">3 Guests 1 Room </option>
                <option value="3 Guests 2 Rooms">3 Guests 2 Rooms </option>
                <option value="3 Guests 3 Rooms">3 Guests 3 Rooms </option>
              </select>
            </p>
        </div>
      </div>
    </div>
    
  )
}

export default SearchBox
