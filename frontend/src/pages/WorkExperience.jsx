import { useContext } from 'react';
import CompanyItem from '../components/CompanyItem';
import { AuthContext } from '../context/AuthContext';
import '../index.css';

const WorkExperience = () => {
    const {companies} = useContext(AuthContext);
    
  return (
    <div>
        <div className='text-2xl text-center pt-8 border-t playfair-display'>
            <h1>WORK EXPERIENCE</h1>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 gap-y-6 pl-4 pt-4 pr-4'>
            {
                companies.map((item, index) => (
                    <CompanyItem key={index} id={item._id} role={item.role} image={item.image} start={item.start} end={item.end}/>
                ))
            }
        </div>
    </div>
  )
}

export default WorkExperience;