import { useContext } from 'react';
import ProjectItem from '../components/ProjectItem';
import { AuthContext } from '../context/AuthContext';
import '../index.css';

const Projects = () => {
  const {projects} = useContext(AuthContext);
    
  return (
    <div>
        <div className='text-2xl text-center pt-8 border-t playfair-display'>
            <h1>PROJECTS</h1>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 gap-y-6 pl-4 pt-4 pr-4'>
            {
                projects.map((item, index) => (
                    <ProjectItem key={index} id={item._id} name={item.name} image={item.image} />
                ))
            }
        </div>
    </div>
  )
}

export default Projects