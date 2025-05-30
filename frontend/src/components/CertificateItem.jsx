import { Link } from 'react-router-dom'

const CertificateItem = ({id, name, image, issuedOn}) => {
  return (
    <Link className='text-gray-700 cursor-pointer' to={`/certifications/certificate/${id}`}>
        <div className='overflow-hidden'>
            <img className='hover:scale-110 transition ease-in-out rounded-md border border-gray-200' src={image}/>
        </div>
        <p className='pt-1 pb-1 text-sm'>{name}</p>
        <div className='flex flex-col-2 gap-2'>
            <p className='text-sm'>Issued On:</p>
            <p className='text-sm font-medium'>{issuedOn}</p>
        </div>
    </Link>
  )
}

export default CertificateItem