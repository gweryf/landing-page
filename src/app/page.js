/* eslint-disable @next/next/no-img-element */
import Head from './head'
import Image from 'next/image'
import {BsFillMoonStarsFill} from 'react-icons/bs'
import card1 from './service1.jpg'
import card2 from './service2.jpg'
import card3 from './service3.jpg'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Credit Card Fraud</title>
        <link rel="icon" href='./favicon.ico'/>
      </Head>
      <main className=' bg-white px-10 md:px-20 lg:px-40'>
        <section className='min-h-screen'>
          <nav className=' py-10 mb-12 flex justify-between'>
            <h1 className=' text-xl'>developed by BigBitTheory</h1>
            <ul className=' flex items-center'>
              <li>
                <BsFillMoonStarsFill className=' cursor-pointer text-2xl'/>
              </li>
              <li>
                <a className=' bg-cyan-500 text-white px-4 py-2 rounded-md ml-8' href='#'>Log-In</a>
              </li>
            </ul>
          </nav>

          <div className=' text-center p-10 py-10'>
            <h2 className=' text-5xl py-2 text-teal-600 font-medium md:text-6xl'>Social Dock</h2>
            <h3 className='text-2xl py-2 md:text-3xl'>A place where excellent developers meet excellent projects</h3>
            <p className=' text-md py-5 leading-8 text-gray-800 md:text-xl max-w-xl mx-auto'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sit amet nisl fringilla, luctus quam id, accumsan nulla. Praesent eu leo nibh. Phasellus eget libero cursus purus sollicitudin ullamcorper. Class.
            </p>
          </div>
        </section>

        <section>
          <div>
            <h3 className=' text-3xl py-1'>Services we offer</h3>
            <p className=' text-md py-2 leading-8 text-gray-800'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus mi tellus, dapibus sed ante ac, ultrices congue nunc. Aenean accumsan.
            </p>
          </div>
          <div className=' lg:flex gap-10'>
            <div className=' text-center shadow-lg p-10 rounded-xl my-10'>
              <Image className='mx-auto' src={card1} width={100} height={100}/>
              <h3 className=' text-lg font-medium pt-8 pb-2'>Service-1</h3>
              <p className='py-2'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis rutrum magna vitae mi pellentesque, ut.
              </p>
            </div>

          <div>
            <div className=' text-center shadow-lg p-10 rounded-xl my-10'>
              <Image className='mx-auto' src={card2} width={100} height={100}/>
              <h3 className=' text-lg font-medium pt-8 pb-2'>Service-1</h3>
              <p className='py-2'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis rutrum magna vitae mi pellentesque, ut.
              </p>
            </div>
          </div>

          <div>
            <div className=' text-center shadow-lg p-10 rounded-xl my-10'>
              <Image className='mx-auto' src={card3} width={100} height={100}/>
              <h3 className=' text-lg font-medium pt-8 pb-2'>Service-1</h3>
              <p className='py-2'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis rutrum magna vitae mi pellentesque, ut.
              </p>
            </div>
          </div>
          </div>
        </section>
      </main>
    </div>
  )
}
