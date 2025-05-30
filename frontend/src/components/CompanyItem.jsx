import { Link } from 'react-router-dom';

const CompanyItem = ({id, role, image, start, end}) => {
    return (
        <Link className='text-gray-700 cursor-pointer' to={`/work-experience/company/${id}`}>
            <div className='overflow-hidden'>
                <img className='hover:scale-110 transition ease-in-out rounded-md border border-gray-200' src={image}/>
            </div>
            <p className='pt-1 pb-1 text-sm'>{role}</p>
            <div className='flex flex-col-2 gap-2'>
                <p className='text-sm'>Duration:</p>
                <p className='text-sm font-medium'>{start} to {end}</p>
            </div>
    </Link>
    )
}

export default CompanyItem;