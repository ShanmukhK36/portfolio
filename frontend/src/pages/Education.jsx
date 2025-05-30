import { useContext } from 'react'
import { AuthContext } from '../context/AuthContext';
import UniversityItem from '../components/UniversityItem';
import '../index.css';

const Education = () => {
  const {universities} = useContext(AuthContext);
    
  return (
    <div>
        <div className='text-2xl text-center pt-8 border-t playfair-display'>
            <h1>EDUCATION</h1>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 gap-y-6 pl-4 pt-4 pr-4'>
            {
                universities.map((item, index) => (
                    <UniversityItem key={index} id={item._id} studyLevel={item.studyLevel} image={item.image} start={item.start} end={item.end}/>
                ))
            }
        </div>
    </div>
  )
}

export default Education