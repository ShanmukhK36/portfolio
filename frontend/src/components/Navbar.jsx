import { NavLink } from 'react-router-dom'
import { FaTachometerAlt, FaBuilding, FaFolderOpen, FaRegAddressCard } from 'react-icons/fa';
import { ImBook } from "react-icons/im";

const Navbar = () => {
  return (
    <div className='bg-black text-lg text-white left-2 top-0 bottom-0 space-y-2 w-16 sm:w-45'>
        <div className='px-2'>
            <NavLink to='/'
                className={({isActive}) => `${isActive ? 'bg-white text-black' : 'bg-black text-white'} flex items-center sm:space-x-4 block py-2.5 px-4 rounded`}
            >
                <FaTachometerAlt />
                <span className='hidden sm:inline'>Home</span>
            </NavLink>
            <NavLink to='/work-experience'
                className={({isActive}) => `${isActive ? 'bg-white text-black' : 'bg-black text-white'} flex items-center sm:space-x-4 block py-2.5 px-4 rounded`}
            >
                <FaBuilding />
                <span className='hidden sm:inline'>Work Experience</span>
            </NavLink>
            <NavLink to='/education'
                className={({isActive}) => `${isActive ? 'bg-white text-black' : 'bg-black text-white'} flex items-center sm:space-x-4 block py-2.5 px-4 rounded`}
            >
                <ImBook />
                <span className='hidden sm:inline'>Education</span>
            </NavLink>
            <NavLink to='/projects'
                className={({isActive}) => `${isActive ? 'bg-white text-black' : 'bg-black text-white'} flex items-center sm:space-x-4 block py-2.5 px-4 rounded`}
            >
                <FaFolderOpen />
                <span className='hidden sm:inline'>Projects</span>
            </NavLink>
            <NavLink to='/certifications'
                className={({isActive}) => `${isActive ? 'bg-white text-black' : 'bg-black text-white'} flex items-center sm:space-x-4 block py-2.5 px-4 rounded`}
            >
                <FaRegAddressCard />
                <span className='hidden sm:inline'>Certifications</span>
            </NavLink>
        </div>
    </div>
  )
}

export default Navbar