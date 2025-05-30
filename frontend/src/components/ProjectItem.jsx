import { Link } from 'react-router-dom';

const ProjectItem = ({id, image, name}) => {
  return (
    <Link className='text-gray-700 cursor-pointer' to={`/projects/project/${id}`}>
        <div className='overflow-hidden'>
            <img className='hover:scale-110 transition ease-in-out rounded-md border border-gray-200' src={image}/>
        </div>
        <p className='pt-1 pb-1 text-sm'>{name}</p>
    </Link>
  )
}

export default ProjectItem;