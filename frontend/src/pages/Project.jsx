import { useContext, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const Project = () => {
    const {projectId} = useParams();
    const {projects} = useContext(AuthContext);
    const [projectData, setProjectData] = useState(false);
    const [image, setImage] = useState([]);

    const fetchProjectData = async () => {
        projects.map((item) => {
            if(item._id === projectId) {
                setProjectData(item);
                setImage(item.image);
                return null;
            }
        })
    }

    useEffect(() => {
      fetchProjectData();
    }, [projectId])
  return (
    <div className='border-t-2 pt-10 pl-5 pr-5 transition-opacity ease-in duration-500 opacity-100'>
      {/* Project Data */}
      <div className='flex gap-5 flex-col sm:flex-row sm:gap-12'>
        {/* Project Image */}
        <div className='flex-1 w-full sm:w-[50%]'>
          <img className='w-full h-auto border border-gray-200 rounded-md' src={image}/>
        </div>
        {/* Project Information */}
        <div className='flex-1'>
          <h1 className='font-medium text-2xl mt-2'>{projectData.name}</h1>
          <div className='flex flex-col-2 gap-2'>
            <p className='text-sm font-medium'>Description:</p>
            <p className='text-sm text-gray-600'>{projectData.description}</p>
          </div>
          <div className='flex flex-col-2 gap-2'>
            <p className='text-sm font-medium'>Link:</p>
            <Link to={projectData.link} target='_blank' rel='noopener noreferrer' className='text-sm text-blue-600 hover:text-blue-700 hover:underline'>{projectData.link}</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Project