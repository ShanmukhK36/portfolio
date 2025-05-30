import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const Certificate = () => {
    const {certificateId} = useParams();
    const {certificates} = useContext(AuthContext);
    const [certificateData, setCertificateData] = useState(false);
    const [image, setImage] = useState([]);

    const fetchCertificateData = async () => {
        certificates.map((item) => {
            if(item._id === certificateId) {
                setCertificateData(item);
                setImage(item.image);
                return null;
            }
        })
    }

    useEffect(() => {
      fetchCertificateData();
    }, [certificateId])
  return (
    <div className='border-t-2 pt-10 pl-5 pr-5 transition-opacity ease-in duration-500 opacity-100'>
      {/* Certificate Data */}
      <div className='flex gap-5 flex-col sm:flex-row sm:gap-12'>
        {/* Certificate Image */}
        <div className='flex-1 w-full sm:w-[50%]'>
          <img className='w-full h-auto border border-gray-200 rounded-md' src={image}/>
        </div>
        {/* Certificate Information */}
        <div className='flex-1'>
          <h1 className='font-medium text-2xl mt-2'>{certificateData.name}</h1>
          <div className='flex flex-col-2 gap-2'>
            <p className='text-sm font-medium'>Issued On:</p>
            <p className='text-sm text-gray-600'>{certificateData.issuedOn}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Certificate