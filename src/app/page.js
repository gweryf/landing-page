/* eslint-disable @next/next/no-img-element */
import Head from "./head";
import Image from "next/image";
import { BsFillMoonStarsFill } from "react-icons/bs";
import card1 from "./service1.jpg";
import card2 from "./service2.jpg";
import card3 from "./service3.jpg";
import card4 from "./service4.jpg";
import card5 from "./service5.jpg";
import card6 from "./service6.jpg";
import Footer from "./footer";

export default function Home() {
  return (
    <div>
      <Head>
        <title>TechnoHacks EduTech</title>
        <link rel="icon" href="./favicon.ico" />
      </Head>
      <div className="  bg-white text-black  md:px-20 lg:px-40 ">
        <section className=" text-black">
          <nav className=" py-10 mb-12 flex justify-between">
            <h1 className="md:text-xl">developed by Priyam Shrivastava</h1>
            <ul className=" flex items-center">
              <li>
                <BsFillMoonStarsFill className=" cursor-pointer text-2xl" />
              </li>
              <li>
                <a
                  className="bg-cyan-500 text-black px-4 py-2 rounded-md ml-8"
                  href="#"
                >
                  Log-In
                </a>
              </li>
            </ul>
          </nav>

          <div className=" text-center p-10 py-10">
            <h2 className=" text-5xl py-2 text-teal-600 font-medium md:text-6xl">
              TechnoHacks EduTech
            </h2>
            <h3 className="text-2xl py-2 md:text-3xl">
              A place where excellent developers meet excellent projects
            </h3>
            <p className=" text-md py-5 leading-8 text-black md:text-xl max-w-xl mx-auto">
              It can be extremely difficult for developers to find collaborators
              for their projects and find people to discuss projects.<br></br>
              <span className=" text-teal-600 text-2xl">
                TechnoHacks EduTech
              </span>{" "}
              aims to solve this issue by providing the best social platform out
              there for developers!
            </p>
          </div>
        </section>

        <section className="p-10 text-black">
          <div>
            <h3 className=" text-3xl py-1">
              Some of our amazing{" "}
              <span className=" text-teal-600">features</span> include:
            </h3>
            <p className=" text-md py-2 leading-8 text-white">
              Our platform aims to provide the best features out there to help
              our fellow developers connect with like-minded and skilled
              contributors.
            </p>
          </div>
          <div className=" lg:flex gap-10 p-10">
            <div className=" bg-teal-600 text-white text-center shadow-lg p-10 rounded-xl my-10 hover:scale-110 transition duration-300 ease-in-out">
              <Image className="mx-auto" src={card1} width={100} height={100} />
              <h3 className=" text-lg font-medium pt-8 pb-2">Multi-Device</h3>
              <p className="py-2">
                Our Design is created in a way that is very flexible and robust
                at the slimmest and tinniest of display.
              </p>
            </div>

            <div className="">
              <div className="bg-teal-600 text-white text-center shadow-lg p-10 rounded-xl my-10 hover:scale-110 transition duration-300 ease-in-out">
                <Image
                  className="mx-auto"
                  src={card2}
                  width={100}
                  height={100}
                />
                <h3 className=" text-lg font-medium pt-8 pb-2">Privacy</h3>
                <p className="py-2">
                  Our backend is created by the best backend engineers out
                  there, our website is very reliable as it has minimal crashes
                  and bugs
                </p>
              </div>
            </div>

            <div>
              <div className="bg-teal-600 text-white text-center shadow-lg p-10 rounded-xl my-10 hover:scale-110 transition duration-300 ease-in-out">
                <Image
                  className="mx-auto"
                  src={card3}
                  width={100}
                  height={100}
                />
                <h3 className=" text-lg font-medium pt-8 pb-2">
                  User Friendly UI
                </h3>
                <p className="py-2">
                  With the aim of being as simple and clear our team have
                  created a very simple UI that is very easy to use for both
                  rookies and professionals
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className=" text-black">
          <div className="p-2">
            <h3 className=" text-3xl py-1">
              How <span className="text-teal-600">Social Dock</span> helps you
            </h3>
          </div>
          <div className=" lg:flex gap-10 p-10">
            <div className="bg-teal-600 text-white my-10 text-center shadow-lg p-10 rounded-xl hover:scale-110 transition duration-300 ease-in-out ">
              <Image className="mx-auto" src={card4} width={100} height={100} />
              <h3 className=" text-lg font-medium pt-8 pb-2">Get Upskilled</h3>
              <p className="py-2">
                The #1 way developers get experience on working wwith different
                developers
              </p>
            </div>

            <div>
              <div className="bg-teal-600 text-white text-center my-10 shadow-lg p-10 rounded-xl hover:scale-110 transition duration-300 ease-in-out">
                <Image
                  className="mx-auto"
                  src={card5}
                  width={100}
                  height={100}
                />
                <h3 className=" text-lg font-medium pt-8 pb-2">
                  Create Profile
                </h3>
                <p className="py-2">
                  Create your profile with easy-to fill form and get recommended
                  with relevant projects.
                </p>
              </div>
            </div>

            <div>
              <div className="bg-teal-600 text-white text-center shadow-lg my-10 p-10 rounded-xl hover:scale-110 transition duration-300 ease-in-out">
                <Image
                  className="mx-auto"
                  src={card6}
                  width={100}
                  height={100}
                />
                <h3 className=" text-lg font-medium pt-8 pb-2">Hassle Free</h3>
                <p className="py-2">
                  An effortless way to get internships/ jobs through a quick and
                  easy application process.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className="p-10  bg-teal-600">
        <Footer />
      </div>
    </div>
  );
}
