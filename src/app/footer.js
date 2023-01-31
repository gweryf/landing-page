import Image from 'next/image'
import cardlogo from '../pages/images/logohb.png'

export default function Footer() {
  
    return (
        <div className=' max-w-1240px w-full mx-auto py-2rem px-10 grid lg:grid-cols-3 gap-8 text-white'>
            <div className='h-[60%] w-full sm:m-10 sm:px-10  hover:scale-110 transition duration-300 ease-in-out'>
                              <Image className='mx-auto' src={cardlogo} width={200} height={300}/>

            </div>
            <div className='lg:col-span-2 pt-5 flex justify-evenly '>
                <div>
                    <h6 className='font-medium text-gray-800'>Community</h6>
                    <div className='p-2 text-black'>GuideLine</div> 
                </div>
                <div>
                    <h6 className='font-medium text-gray-800 px-2'>Features1</h6>
                    <ul className="p-2 text-black">
                        <li className='py-2 text-sm'>Chat</li>
                        <li className='py-2 text-sm'>Profile</li>
                        <li className='py-2 text-sm'>Interact</li>
                        <li className='py-2 text-sm'>TeamUp</li>
                    </ul>
                </div>
                <div>
                    <h6 className='font-medium text-gray-800 px-2'>Features2</h6>
                    <ul className="p-2 text-black">
                        <li className='py-2 text-sm'>Chat</li>
                        <li className='py-2 text-sm'>Discussion</li>
                        <li className='py-2 text-sm'>Solutions</li>
                        <li className='py-2 text-sm'>Hackathons</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
