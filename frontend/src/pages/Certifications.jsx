import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import CertificateItem from '../components/CertificateItem';
import '../index.css';

const Certifications = () => {
    const {certificates} = useContext(AuthContext);

  return (
    <div>
        <div className='text-2xl text-center pt-8 border-t playfair-display'>
            <h1>Certifications</h1>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 gap-y-6 pl-4 pt-4 pr-4'>
            {
                certificates.map((item, index) => (
                    <CertificateItem key={index} name={item.name} id={item._id} issuedOn={item.issuedOn} image={item.image}/>
                ))
            }
        </div>
    </div>
  )
}

export default Certifications