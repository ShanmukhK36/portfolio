import { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const University = () => {
    const {universityId} = useParams();
    const {universities} = useContext(AuthContext);
    const [universityData, setUniversityData] = useState(false);
    const [image, setImage] = useState([]);

    const fetchUniversityData = async () => {
        universities.map((item) => {
            if(item._id === universityId) {
                setUniversityData(item);
                setImage(item.image);
                return null;
            }
        })
    }

    useEffect(() => {
      fetchUniversityData();
    }, [universityId])
  return (
    <div className='border-t-2 pt-10 pl-5 pr-5 transition-opacity ease-in duration-500 opacity-100'>
      {/* University Data */}
      <div className='flex gap-5 flex-col sm:flex-row sm:gap-12'>
        {/* University Image */}
        <div className='flex-1 w-full sm:w-[50%]'>
          <img className='w-full h-auto border border-gray-200 rounded-md' src={image}/>
        </div>
        {/* University Information */}
        <div className='flex-1'>
          <h1 className='font-medium text-2xl mt-2'>{universityData.studyLevel}</h1>
          <div className='flex flex-col-2 gap-2'>
            <p className='text-sm font-medium'>University:</p>
            <p className='text-sm text-gray-600'>{universityData.name}</p>
          </div>
          <div className='flex flex-col-2 gap-2'>
            <p className='text-sm font-medium'>Major:</p>
            <p className='text-sm text-gray-600'>{universityData.major}</p>
          </div>
          <div className='flex flex-col-2 gap-2'>
            <p className='text-sm font-medium'>Duration:</p>
            <p className='text-sm text-gray-600'>{universityData.start} to {universityData.end}</p>
          </div>
          <div className='flex flex-col-2 gap-2'>
            <p className='text-sm font-medium'>Location:</p>
            <p className='text-sm text-gray-600'>{universityData.location}</p>
          </div>
          <div className='flex flex-col-2 gap-2'>
            <p className='text-sm font-medium'>CGPA:</p>
            <p className='text-sm text-gray-600'>{universityData.cgpa}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default University