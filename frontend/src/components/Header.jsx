import { Link } from 'react-router-dom';
import { assets } from '../assets/assets';
import { useEffect, useRef, useState } from 'react';
import { TiThListOutline } from "react-icons/ti";
import { FaLinkedin } from 'react-icons/fa';
import { FaHackerrank } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { SiLeetcode } from "react-icons/si";

const Header = () => {
    const [active, setActive] = useState(false);
    const dropdownRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setActive(false);
            }
        };

        if (active) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [active]);

  return (
    <div className="bg-black px-2 py-4 flex items-center justify-between">
        <Link to='/'>
            <img src={assets.logo_1} className='w-36 rounded-md' onMouseOver={(e) => e.currentTarget.src = assets.logo_2} onMouseOut={(e) => e.currentTarget.src = assets.logo_1}/>
        </Link>
        <div className='flex'>
            <div className='hidden sm:flex gap-5 items-end'>
                <Link to={'https://www.linkedin.com/in/shanmukh-katakam'}>
                    <FaLinkedin className='w-8 h-8 text-white rounded-md hover:text-black hover:bg-white'/>
                </Link>
                <Link to={'https://www.hackerrank.com/profile/katakamshanmukh'}>
                    <FaHackerrank className='w-8 h-8 text-white rounded-md hover:text-black hover:bg-white'/>
                </Link>
                <Link to={'https://leetcode.com/katakam_shanmukh'}>
                    <SiLeetcode className='w-8 h-8 text-white rounded-md hover:text-black hover:bg-white'/>
                </Link>
                <Link to={'https://github.com/ShanmukhK36'}>
                    <FaGithub className='w-8 h-8 text-white rounded-md hover:text-black hover:bg-white'/>
                </Link>
            </div>
            <div className='group-relative' ref={dropdownRef}>
                {/*Sidebar menu for smaller screen*/}
                <TiThListOutline onClick={() => setActive(!active)} className='w-8 h-8 text-white rounded-md sm:hidden'/>
                {/* Dropdown menu */}
                { active &&
                    <div className='group-hover:block absolute dropdown-menu right-4 mt-7.5'>
                        <div className='flex flex-col gap-2 w-36 py-3 px-5 bg-black text-white rounded'>
                            <Link to={'https://www.linkedin.com/in/shanmukh-katakam-1356621aa'}>
                                <p className='cursor-pointer hover:text-black'>LinkedIn</p>
                            </Link>
                            <Link to={'https://www.hackerrank.com/profile/katakamshanmukh'}>
                                <p className='cursor-pointer hover:text-black'>Hackerrank</p>
                            </Link>
                            <Link to={'https://leetcode.com/katakam_shanmukh'}>
                                <p className='cursor-pointer hover:text-black'>Leetcode</p>
                            </Link>
                            <Link to={'https://github.com/ShanmukhK36'}>
                                <p className='cursor-pointer hover:text-black'>Github</p>
                            </Link>
                        </div>
                    </div>
                }
            </div>
        </div>
    </div>
  )
}

export default Header;