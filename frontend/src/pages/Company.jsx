import { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const Company = () => {
    const {companyId} = useParams();
    const {companies} = useContext(AuthContext);
    const [companyData, setCompanyData] = useState(false);
    const [image, setImage] = useState([]);

    const fetchCompanyData = async () => {
        companies.map((item) => {
            if(item._id === companyId) {
                setCompanyData(item);
                setImage(item.image);
                return null;
            }
        })
    }

    useEffect(() => {
      fetchCompanyData();
    }, [companyId])

  return (
    <div className='border-t-2 pt-10 pl-5 pr-5 transition-opacity ease-in duration-500 opacity-100'>
      {/* Company Data */}
      <div className='flex gap-5 flex-col sm:flex-row sm:gap-12'>
        {/* Company Image */}
        <div className='flex-1 w-full sm:w-[50%]'>
          <img className='w-full h-auto border border-gray-200 rounded-md' src={image}/>
        </div>
        {/* Company Information */}
        <div className='flex-1'>
          <h1 className='font-medium text-2xl mt-2'>{companyData.role}</h1>
          <div className='flex flex-col-2 gap-2'>
            <p className='text-sm font-medium'>Organisation:</p>
            <p className='text-sm text-gray-600'>{companyData.name}</p>
          </div>
          <div className='flex flex-col-2 gap-2'>
            <p className='text-sm font-medium'>Duration:</p>
            <p className='text-sm text-gray-600'>{companyData.start} to {companyData.end}</p>
          </div>
          <div className='flex flex-col-2 gap-2'>
            <p className='text-sm font-medium'>Location:</p>
            <p className='text-sm text-gray-600'>{companyData.location}</p>
          </div>
          <div className='flex flex-col-2 gap-2'>
            <p className='text-sm font-medium'>Responsibilities:</p>
            <ul className="list-disc ml-6">
                {
                    companyData.responsibilities?.map((responsibility, index) => (
                        <li key={index} className="text-sm text-gray-600">
                            {responsibility}
                        </li>
                    ))
                }
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Company;