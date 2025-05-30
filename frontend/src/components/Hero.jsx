import '../index.css'
import { assets } from '../assets/assets'

const Hero = () => {
  return (
    <div className='flex flex-col sm:flex-row border border-gray-400 px-2 py-2'>
        {/* hero Left */}
        <div className='w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0'>
            <div className='playfair-display'>
                <div className='flex items-center gap-2'>
                    <p className='w-8 md:w-11 h-[2px] bg-[#414141]'></p>
                    <h1 className='text-3xl sm:py-3 lg:text-5xl leading-relaxed'>SHANMUKH</h1>
                </div>
                <div className='flex items-center gap-2'>
                    <h1 className='text-3xl sm:py-3 lg:text-5xl leading-relaxed'>KATAKAM</h1>
                    <p className='w-8 md:w-11 h-[2px] bg-[#414141]'></p>
                </div>
            </div>
        </div>
        {/* Hero Right */}
        <img src={assets.hero} className='sm:w-1/2 max-w-[286px] sm:max-w-[1000px]'/>
    </div>
  )
}

export default Hero