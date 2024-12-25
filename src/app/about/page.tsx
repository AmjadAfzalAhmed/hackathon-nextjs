import Image from 'next/image'
import Link from 'next/link'
import bg from '/public/images/aboutBg.png'
import { PiHandbag, } from "react-icons/pi";
import { ChevronRight, Search, } from 'lucide-react';
import { FiUser } from "react-icons/fi";
import two from '/public/images/fastFood.png'
import one from '/public/images/featured.png'
import three from '/public/images/third.png'
import { CiPlay1 } from "react-icons/ci";
import bg1 from '/public/images/chooseBg.png'
import { BsCupHot } from "react-icons/bs"
import person from '/public/images/Person.png'
import stud from '/public/images/Student.png'
import bg2 from '/public/images/yellowBg.png'
import trans from '/public/images/yellowTrans.png'
import mark from '/public/images/Mark.png'
import { FaFacebookF, FaPinterest, FaTwitter, FaYoutube } from 'react-icons/fa';

function About() {
  return (
    <main className='w-[1920px] h-[5900px]'>
      <div className="flex flex-col">
        <div className="flex relative flex-col items-center pb-28 w-full min-h-[410px] max-md:pb-24 max-md:max-w-full">
          <Image src={bg} className="object-cover absolute inset-0 size-full" alt="About section background" />
          <nav className="flex relative flex-col justify-center items-center self-stretch px-16 py-7 w-full bg-stone-950 max-md:px-5 max-md:max-w-full" aria-label="Main navigation">
            <div className="flex flex-wrap gap-5 justify-between items-center w-full max-w-[1320px] max-md:max-w-full">
              <a href="/" className="self-stretch text-2xl font-bold leading-none text-amber-500" aria-label="Foodtuck home">
                F<span className="text-white">oo</span>d<span className="text-amber-500">tuck</span>
              </a>
              <div className="flex flex-wrap gap-8 self-stretch my-auto text-base text-white max-md:max-w-full" >
                <Link href="/" className="grow font-bold text-amber-500" role="menuitem">Home</Link>
                <Link href="/menu" className="hover:text-amber-500" role="menuitem">Menu</Link>
                <Link href="/blog" className="hover:text-amber-500" role="menuitem">Blog</Link>
                <Link href="/pages" className="hover:text-amber-500" role="menuitem">Pages</Link>
                <Link href="/about" className="hover:text-amber-500" role="menuitem">About</Link>
                <Link href="/shop" className="hover:text-amber-500" role="menuitem">Shop</Link>
                <Link href="/contact" className="hover:text-amber-500" role="menuitem">Contact</Link>
              </div>
              <div className="flex gap-4 self-stretch my-auto" aria-label="Social media links">
                <Search className="object-contain shrink-0 w-6 h-6 aspect-square text-white" />
                <FiUser className="object-contain shrink-0 w-6 h-6 aspect-square text-white" />
                <PiHandbag className="object-contain shrink-0 w-6 h-6 aspect-square text-white" />
              </div>
            </div>
          </nav>
          <h1 className="relative mt-28 text-5xl font-bold leading-none text-white max-md:mt-10 max-md:text-4xl">About Us</h1>
          <nav className="flex relative gap-1 mt-5 mb-0 max-w-full text-xl leading-snug whitespace-nowrap w-[137px] max-md:mb-2.5" aria-label="Breadcrumb">
            <a href="/" className="grow text-white hover:text-amber-500">Home</a>
            <ChevronRight className="text-white object-contain shrink-0 my-auto w-4 aspect-square" />
            <span className="text-amber-500" aria-current="page">About</span>
          </nav>
        </div>
      </div>

      {/* First Sec */}

      <div className="rounded-none w-[1320px] h-[734px] absolute top-[530px] left-[300px]" >
        <div className="flex gap-5 max-md:flex-col">
          <div className="flex flex-col w-[56%] max-md:ml-0 max-md:w-full">
            <div className="grow max-md:mt-10 max-md:max-w-full">
              <div className="flex gap-5 max-md:flex-col">
                <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                  <Image
                    src={one}
                    alt="Featured food presentation"
                    className="object-contain w-full rounded-md aspect-[0.63] max-md:mt-6"
                  />
                </div>
                <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col grow mt-14 max-md:mt-10">
                    <Image
                      src={two}
                      alt="Culinary preparation showcase"
                      className="object-contain w-full rounded-md aspect-[1.14]"
                    />
                    <Image
                      src={three}
                      alt="Dining experience highlight"
                      className="object-contain mt-7 w-full rounded-md aspect-[0.81]"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[44%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col self-stretch my-auto w-full max-md:mt-10 max-md:max-w-full">
              <div className="flex gap-2.5 self-start text-lg leading-none text-amber-500">
                <div className="grow">About us</div>
                <div className="shrink-0 my-auto h-px bg-amber-500 border border-amber-500 border-solid w-[34px]"></div>
              </div>
              <h2 className="mt-2 text-5xl font-bold leading-[56px] text-zinc-800 max-md:max-w-full max-md:text-4xl max-md:leading-[52px]">
                Food is an important
                <br />
                part Of a balanced Diet
              </h2>
              <p className="mt-11 mr-7 text-base leading-6 text-neutral-600 max-md:mt-10 max-md:mr-2.5 max-md:max-w-full">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.
              </p>
              <div className="flex gap-4 mt-10 max-w-full font-bold w-[379px] max-md:mt-10">
                <button className="gap-2.5 self-stretch px-12 py-4 text-lg leading-none text-white bg-amber-500 rounded-md max-md:px-5 hover:bg-amber-600 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2">
                  Show more
                </button>
                <button className="flex gap-2.5 text-base text-zinc-800 items-center hover:text-amber-500 focus:outline-none focus:ring-2 focus:ring-zinc-800 focus:ring-offset-2">
                  <div className="ico flex items-center justify-center w-[60px] h-[60px] rounded-full bg-amber-500">
                    <CiPlay1 className=" w-10 h-6 shrink-0 aspect-square text-white" />
                  </div>

                  <span className="my-auto">Watch video</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* why choose us */}

      <div className="w-[1320px] h-[865px] absolute top-[1384px] left-[300px] flex flex-col items-center pb-2">
        <h2 id="why-choose-title" className="text-5xl font-bold leading-none text-zinc-800 max-md:text-4xl">
          Why Choose us
        </h2>
        <p className="mt-2 text-base leading-6 text-center text-neutral-600 w-[579px] max-md:max-w-full">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam
          pellentesque bibendum non dui volutpat fringilla bibendum.
        </p>
        <Image
          src={bg1}
          alt="Restaurant interior showcasing our dining environment"
          className="object-contain self-stretch mt-14 w-full aspect-[3.42] max-md:mt-10 max-md:max-w-full"
        />
        <div className="mt-14 w-full max-w-[1258px] max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col">
            <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
              <div
                className="flex overflow-hidden flex-col grow items-center pb-1.5 mt-3.5 max-md:mt-10"

              >
                <Image src={stud} alt='graduateIcon' className="object-contain w-20 h-20 aspect-square" />

                <h3 className="mt-6 text-2xl font-bold leading-none text-zinc-800">
                  Best Chef
                </h3>
                <p className="self-stretch mt-7 text-base leading-6 text-center text-neutral-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                  diam pellentesque bibendum non dui volutpat
                </p>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
              <div
                className="flex overflow-hidden flex-col grow items-center pb-1.5 mt-3 max-md:mt-10"

              >
                <BsCupHot className="object-contain w-20 h-20 aspect-square" />

                <h3 className="mt-6 text-2xl font-bold leading-none text-zinc-800">
                  120 Item food
                </h3>
                <p className="self-stretch mt-4 text-base leading-6 text-center text-neutral-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                  diam pellentesque bibendum non dui volutpat
                </p>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col items-center pb-1.5 max-md:mt-10">


                <Image src={person} alt="manIco" className="object-contain w-20 h-20 aspect-[1.03]" />

                <h3 className="mt-6 text-2xl font-bold leading-none text-zinc-800">
                  Clean Environment
                </h3>
                <p className="self-stretch mt-4 text-base leading-6 text-center text-neutral-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                  diam pellentesque bibendum non dui volutpat
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Team Member */}

      <div className="w-[1920px] h-[686px] absolute top-[2369px] flex flex-col rounded-none">
        <div
          className="flex relative flex-col items-center px-20 pt-32 pb-56 w-full min-h-[460px] max-md:px-5 max-md:py-24 max-md:max-w-full"
        >
          <Image src={trans} alt="bg1" className="absolute inset-0 z-0" />
          <Image src={bg2} className="object-cover absolute inset-0 size-full"
            alt="Team members background banner" />

          <div className="flex relative flex-col mb-0 max-w-full w-[418px] max-md:mb-2.5">
            <h1
              className="self-center text-5xl font-bold leading-none text-white max-md:text-4xl"
            >
              Team Member
            </h1>
            <p className="mt-2 text-base leading-6 text-center text-white">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              <br />
              Varius sed pharetra dictum neque massa congue
            </p>
          </div>
        </div>

        <div className="z-10 self-center mt-0 w-full max-w-[1400px] max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col">
            <div className="flex flex-col w-6/12 h-[398px] max-md:ml-0 max-md:w-full">
              <div className="grow max-md:mt-6 max-md:max-w-full">
                <div className="flex gap-5 max-md:flex-col">
                  <div className="flex flex-col w-3/5 max-md:ml-0 max-md:w-full">
                    <Image
                      src={mark}
                      className="object-contain grow -mr-14 w-full aspect-[1.19] max-md:max-w-full"
                      alt="Team member group photo"
                    />
                  </div>
                  <div className="flex flex-col ml-5 w-2/5 max-md:ml-0 max-md:w-full">
                    <div className="flex flex-col grow">
                      <div className="flex relative flex-col pt-6 w-full aspect-[0.784]">
                        <Image
                          src={mark}
                          className="object-cover absolute inset-0 size-full"
                          alt="Lucky Helen profile"
                        />
                        <div
                          className="flex relative flex-col self-end mr-6 text-base whitespace-nowrap text-neutral-600 w-[37px] max-md:mr-2.5"
                          
                        >
                          <button
                            className="px-3.5 w-full h-9 rounded-sm bg-zinc-100 fill-zinc-100"
                            aria-label="Social media link 1"
                          ><FaFacebookF /></button>
                          <button
                            className="px-3 mt-3 w-full h-9 text-center rounded-sm bg-zinc-100 fill-zinc-100"
                            aria-label="Social media link 2"
                          ><FaTwitter /></button>
                          <button
                            className="px-2.5 mt-3 w-full h-9 text-center bg-amber-500 rounded-sm fill-amber-500 text-zinc-100"
                            aria-label="Social media link 3"
                          ><FaYoutube /></button>
                          <button
                            className="px-2.5 mt-3 w-full h-9 text-center rounded-sm bg-zinc-100 fill-zinc-100"
                            aria-label="Social media link 4"
                          ><FaPinterest /></button>
                        </div>
                        <div
                          className="flex relative flex-col items-center px-16 py-4 mt-28 bg-white shadow-[0px_0px_80px_rgba(205,205,205,0.25)] max-md:px-5 max-md:mt-10"
                        >
                          <h2
                            className="text-xl font-bold leading-snug text-neutral-600"
                          >
                            Lucky Helen
                          </h2>
                          <p className="mt-1 text-base text-zinc-500">Chef</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
              <div className="grow max-md:mt-6 max-md:max-w-full">
                <div className="flex gap-5 max-md:flex-col">
                  <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                    <div className="flex flex-col grow max-md:mt-6">
                      <div
                        className="flex relative flex-col pt-80 w-full aspect-[0.784] max-md:pt-24"
                      >
                        <Image
                          src={mark}
                          className="object-cover absolute inset-0 size-full"
                          alt="Moon Henry profile"
                        />
                        <div
                          className="flex relative flex-col items-center px-16 py-4 bg-white shadow-[0px_0px_80px_rgba(205,205,205,0.25)] max-md:px-5"
                        >
                          <h2
                            className="text-xl font-bold leading-snug text-neutral-600"
                          >
                            Moon Henry
                          </h2>
                          <p className="mt-1 text-base text-zinc-500">Founder</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                    <div className="flex flex-col grow max-md:mt-6">
                      <div
                        className="flex relative flex-col pt-80 w-full aspect-[0.784] max-md:pt-24"
                      >
                        <Image
                          src={mark}
                          className="object-cover absolute inset-0 size-full"
                          alt="Tom Monrow profile"
                        />
                        <div
                          className="flex relative flex-col items-center px-16 py-4 bg-white shadow-[0px_0px_80px_rgba(205,205,205,0.25)] max-md:px-5"
                        >
                          <h2
                            className="text-xl font-bold leading-snug text-neutral-600"
                          >
                            Tom Monrow
                          </h2>
                          <p className="mt-1 ml-3 text-base text-zinc-500">
                            Specialist
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </main>
  )
}

export default About
