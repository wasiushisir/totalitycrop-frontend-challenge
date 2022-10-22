import React, { useState } from 'react';
import profileImg from '../assests/myimg2.JPG.jpeg'
import twiterImg from '../assests/1_1b-JWy_0DRfDiHplApG4cA-removebg-preview.png'
import viratImg from '../assests/Shri_Virat_Kohli_for_Cricket,_in_a_glittering_ceremony,_at_Rashtrapati_Bhavan,_in_New_Delhi_on_September_25,_2018_(cropped).jpg'
import bcbImg from '../assests/Bangladesh_Cricket_Board_Logo.svg.png'
import tom from '../assests/330px-Tom_Cruise_by_Gage_Skidmore_2.jpg'
import dtbLogo from '../assests/dtb_400x400.jpg'
import dtbWallpaper from '../assests/dtb(wallpaper).jpg'
import sportsLogo from '../assests/skysports(logo).jpg'
import vdo from '../assests/istock-1008822158_preview.mp4'
import { GoFileMedia } from 'react-icons/go';
import { BiPoll } from 'react-icons/bi';
import { AiOutlineSchedule,AiOutlineRetweet } from 'react-icons/ai';
import { BiMap } from 'react-icons/bi';
import { BsFillChatTextFill } from 'react-icons/bs';
import { BsThreeDots, BsBookmark } from 'react-icons/bs';
import { BsTwitter } from 'react-icons/bs';
import { RiHome7Fill, RiFileList2Line } from 'react-icons/ri';
import { HiHashtag } from 'react-icons/hi';
import { BiEnvelope } from 'react-icons/bi';
import { CiCircleMore } from 'react-icons/ci';
import { GrNotification } from 'react-icons/gr';
import { GifIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import { FaceSmileIcon,ChatBubbleOvalLeftIcon,HeartIcon,ArrowDownTrayIcon} from '@heroicons/react/24/outline'
import { XMarkIcon, PlusIcon } from '@heroicons/react/24/outline'
import { UserIcon, ChevronDownIcon } from '@heroicons/react/24/outline'
import disneyImg from '../assests/109-1091211_disney-logo-png-file-download-free-blue-transparent-removebg-preview.png'
import selfieImg from '../assests/happy-asian-family-taking-selfie-three-generation-sitting-grass-using-mobile-phone-outdoors-park-166580534.jpg'


const HomePage = () => {

    const [nav,setNav]=useState(false)

    const handleNav=()=>{
        setNav(!nav)
    }


    return (
        <div className='w-full h-screen flex flex-col justify-between '>
            <div className='grid  lg:grid-cols-[300px_minmax(640px,_1fr)_390px] max-w-[1240px] md:mx-24'>
                <div className='hidden md:block md:h-screen md:sticky top-0 '>
                    <div className='mt-2'>

                        <div className='hover:bg-blue-200/30 p-4 rounded-full w-[28%]'>

                            <BsTwitter className='text-blue-600   ' size={34} />


                        </div>
                        <div className='flex flex-col justify-center cursor-pointer '>

                            <div className='flex items-center hover:bg-zinc-100 p-3 rounded-full max-w-[50%]'>
                                <RiHome7Fill className='text-black   ' size={30} />
                                <h1 className='text-2xl ml-4 font-bold'>Home</h1>


                            </div>
                            <div className='flex items-center hover:bg-zinc-100 p-3 rounded-full max-w-[55%]' >

                                <HiHashtag className='  ' size={30} />
                                <h1 className='text-2xl ml-4 '>Explore</h1>

                            </div>
                            <div className='flex items-center hover:bg-zinc-100 p-3 rounded-full max-w-[70%]'>
                                <GrNotification className='  ' size={30} />
                                <h1 className='text-2xl ml-4 '>Notifications</h1>


                            </div>
                            <div className='flex items-center hover:bg-zinc-100 p-3 rounded-full max-w-[60%]'>
                                <BiEnvelope className='  ' size={30} />
                                <h1 className='text-2xl ml-4 '>Messages</h1>

                            </div>
                            <div className='flex items-center hover:bg-zinc-100 p-3 rounded-full max-w-[63%]'>
                                <BsBookmark className='  ' size={30} />
                                <h1 className='text-2xl ml-4 '>Bookmarks</h1>

                            </div>
                            <div className='flex items-center hover:bg-zinc-100 p-3 rounded-full max-w-[48%]'>
                                <RiFileList2Line className='  ' size={30} />
                                <h1 className='text-2xl ml-4 '>Lists</h1>

                            </div>
                            <div className='flex items-center hover:bg-zinc-100 p-3 rounded-full max-w-[53%]'>
                                <UserIcon className="h-8 w-8 " />
                                <h1 className='text-2xl ml-4 '>Profile</h1>

                            </div>
                            <div className='flex items-center hover:bg-zinc-100 p-3 rounded-full max-w-[45%]'>
                                <CiCircleMore className='  ' size={30} />
                                <h1 className='text-2xl ml-4 '>More</h1>

                            </div>



                        </div>

                        <div className='pt-2'>
                            <button className='px-28 py-4 bg-blue-500 text-white rounded-full font-bold  text-xl'>Tweet</button>

                        </div>
                        <div className='flex justify-between items-center mt-10  hover:bg-blue-200/30 p-2 rounded-full max-w-[100%] cursor-pointer'>
                            <div className='flex items-center'>
                                <img className='w-[55px] md:h-[55px] rounded-full' src={profileImg} alt="" />
                                <div className='ml-4'>
                                    <p>Wasiu Ahmed</p>
                                    <p>@WasiuAhmed10</p>

                                </div>
                            </div>

                            <div className='px-8 '>
                                <BsThreeDots className=' pt-2 text-slate-700' size={26} />
                            </div>


                        </div>



                    </div>



                </div>
                <div className='w-full  border-x-2 border-zinc-200'>
                    <div className='w-full h-[70px] sticky top-0 z-10  bg-[#ffffff] '>
                        <div className='w-full h-full  flex justify-between items-center px-3 '>
                            <div className='flex items-center'>
                                <img onClick={handleNav} className='w-[30px] h-[30px] rounded-full md:hidden' src={profileImg} alt="" />
                                <h2 className='text-lg md:text-2xl  font-bold ml-5'>Home</h2>




                            </div>

                            <div>
                                <img className='w-[30px] h-[30px] md:w-[50px] md:h-[50px]' src={twiterImg} alt="" />
                            </div>

                        </div>


                        <div className={nav?'absolute left-0 top-0 z-100 w-full h-screen bg-black/70 md:hidden':''}>
                            <div className={nav?'absolute left-0 top-0 z-100 w-[75%] h-screen bg-[#ffffff] p-5 ease-in duration-150 md:hidden':'absolute left-[-100%] top-0  p-5 ease-in duration-150 md:hidden'}>

                                <div className='flex justify-between items-center'>
                                    <h2 className='text-lg font-bold'>Account info</h2>
                                    <XMarkIcon onClick={handleNav} className="h-6 w-6 " />
                                </div>
                                <div className='flex justify-between items-center mt-8'>
                                    <img className='w-[45px] h-[45px] rounded-full ' src={profileImg} alt="" />
                                    <div className='p-1 border border-zinc-500 rounded-full'>
                                        <PlusIcon className="h-4 w-4 font-bold text-black" />
                                    </div>
                                </div>
                                <div className='mt-3'>
                                    <h2 className='font-bold text-black text-lg'>Wasiu Ahmed</h2>
                                    <p className='text-lg text-zinc-500'>@WasiuAhmed10</p>
                                </div>
                                <div className='flex items-center space-x-4 my-5 text-black font-bold'>
                                    <p >1 <span className='text-zinc-500'>Following</span></p>
                                    <p>1 <span className='text-zinc-500'>Followers</span></p>

                                </div>

                                <div className='flex flex-col justify-center'>
                                    <div className='flex items-center my-4 space-x-3'>
                                        <UserIcon className="h-8 w-8 " />
                                        <h1 className='text-2xl font-bold text-zinc-600'>Profile</h1>

                                    </div>
                                    <div className='flex items-center my-4 space-x-3'>
                                        <BsFillChatTextFill size={30} />
                                        <h1 className='text-2xl font-bold text-zinc-600'>Topics</h1>

                                    </div>
                                    <div className='flex items-center my-4 space-x-3'>
                                        <BsBookmark className='  ' size={30} />
                                        <h1 className='text-2xl font-bold text-zinc-600'>Bookarks</h1>

                                    </div>
                                    <div className='flex items-center my-4 space-x-3'>
                                        <RiFileList2Line className='  ' size={30} />
                                        <h1 className='text-2xl font-bold text-zinc-600'>Lists</h1>

                                    </div>
                                    <div className='flex items-center my-4 space-x-3'>
                                        <UserIcon className="h-8 w-8 " />
                                        <h2 className='text-2xl font-bold text-zinc-600'>Twitter Circle</h2>

                                    </div>

                                </div>

                                <div className='flex flex-col justify-between text-zinc-600 font-bold'>
                                    <div className='flex justify-between my-3'>
                                        <p>Creator studio</p>
                                        <ChevronDownIcon className="h-6 w-6 " />



                                    </div>
                                    <div className='flex justify-between my-3'>
                                    <p>Professional tools</p>
                                        <ChevronDownIcon className="h-6 w-6 " />

                                    </div>
                                    <div className='flex justify-between my-3'>
                                    <p>settings and support</p>
                                        <ChevronDownIcon className="h-6 w-6 " />

                                    </div>

                                </div>



                            </div>

                        </div>






                    </div>



                    <div className=' w-full flex flex-col justify-between pt-3 '>
                        <div className='hidden md:flex md:items-center px-9'>
                            <img className='md:w-[55px] md:h-[55px] rounded-full ' src={profileImg} alt="" />
                            <h1 className='text-2xl text-slate-500 ml-3 pt-3 '>What's happening?</h1>

                        </div>

                        <div className='hidden  md:flex justify-between items-center px-5 pt-10 border-b-2 text-zinc-400  pb-3 space-x-2'>

                            <div className='flex items-center  text-blue-400 px-20'>
                                <div className='rounded-full hover:bg-blue-200/30 p-2'>

                                    <GoFileMedia size={26} />


                                </div>
                                <div className='rounded-full hover:bg-blue-200/30 p-2'>
                                    <GifIcon className="h-6 w-6 " />

                                </div>
                                <div className='rounded-full hover:bg-blue-200/30 p-2'>
                                    <BiPoll size={26} />

                                </div>

                                <div className='rounded-full hover:bg-blue-200/30 p-2'>
                                    <FaceSmileIcon className="h-6 w-6 " />

                                </div>



                                <div className='rounded-full hover:bg-blue-200/30 p-2'>

                                    < AiOutlineSchedule size={26} />


                                </div>






                                <div>
                                    <BiMap className='text-blue-200' size={26} />


                                </div>

                            </div>

                            <div>
                                <button className='px-5 py-2 bg-blue-300 text-white rounded-full font-bold '>Tweet</button>

                            </div>


                        </div>


                        <div className='pt-2 border-b-2 text-zinc-400 '>
                            <h2 className='text-center text-lg text-blue-300 pt-1 pb-2 hover:bg-zinc-200'>Show 360 Tweets</h2>

                        </div>

                    </div>






                    <div className='w-full '>
                    <div className='hover:bg-zinc-100 cursor-pointer py-7'>
                        <div className='w-full  flex justify-between items-center px-3 pt-2 md:px-5'>
                            <div className='flex items-center space-x-3 px-8 md:px-16'>
                                <BsFillChatTextFill size={14} />
                                <p>Disney</p>
                                <p className='text-blue-500'>See more</p>

                            </div>
                            <XMarkIcon className="h-6 w-6 " />

                        </div>

                        

                       


                        <div className='w-full  flex justify-between items-start  px-3 pt-2 md:px-5 md:pl-[2.75rem]'>
                            <img className='w-[45px] h-[58px] md:w-[55px] md:h-[60px] rounded-full pt-2' src={disneyImg} alt="" />
                            <div className='flex flex-col px-3 py-2 md:w-full text-black'>
                                <p><b>Disney+</b> <span>@DisneyPlus - 13h</span></p>
                                <p>POV:You tried to take a selfie but accidently took a video</p>

                            </div>

                            <BsThreeDots className=' pt-2 text-slate-700' size={26} />


                        </div>

                        <div className='w-full pl-16 pt-2 md:pl-28 md:px-5'>
                            <p className='pb-4'>#IN_THE_SOOP : Friendcation, is now streaming on #DisneyPlus!</p>
                            <img className='h-[200px] rounded-3xl md:w-full md:h-full ' src={selfieImg} alt="" />

                        </div>
                        <div className='  flex justify-around items-center px-3 pl-10 pt-2 md:px-5 md:pl-14'>
                            <div className='flex items-center'>
                            <ChatBubbleOvalLeftIcon className=' h-6 w-6 ' />
                                <p className='ml-3'>251</p>

                            </div>
                            <div className='flex items-center'>
                            <AiOutlineRetweet className=' ' size={26} />
                                <p className='ml-3'>777</p>

                            </div>
                            <div className='flex items-center'>
                            <HeartIcon className=' h-6 w-6 ' />
                                <p className='ml-3'>446</p>

                            </div>

                            <ArrowDownTrayIcon className='h-6 w-6  '  />



                        </div>
                        </div>


                      <div className='hover:bg-zinc-100 cursor-pointer py-7'>

                      
                        <div className='w-full  flex justify-between items-start  px-3 pt-2 md:px-5 md:pl-[2.75rem] my-3'>
                            <img className='w-[45px] h-[45px] md:w-[55px] md:h-[55px] rounded-full mt-3' src={dtbLogo} alt="" />

                            <div className='flex flex-col px-3 py-2 md:w-full text-black'>
                                <p><b>
                                    Defense Technology of Bangladesh-DTB</b> <span>@DefenseDtb</span></p>
                                <p>Bangladesh Army has received Milkor MGL 40mm grenade launchers from South Africa.</p>

                            </div>
                            <BsThreeDots className=' pt-2 text-slate-700' size={26} />

                        </div>

                        <div className='w-full pl-14 pt-2 md:pl-28 md:px-5'>

                            <img className='h-[174px] rounded-3xl md:w-full md:h-full ' src={dtbWallpaper} alt="" />

                        </div>

                        <div className='  flex justify-around items-center px-3 pl-10 pt-2 md:px-5 md:pl-14'>
                            <div className='flex items-center'>
                            <ChatBubbleOvalLeftIcon className=' h-6 w-6 ' />
                                <p className='ml-3'>251</p>

                            </div>
                            <div className='flex items-center'>
                            <AiOutlineRetweet className=' ' size={26} />
                                <p className='ml-3'>777</p>

                            </div>
                            <div className='flex items-center'>
                            <HeartIcon className=' h-6 w-6 ' />
                                <p className='ml-3'>446</p>

                            </div>

                            <ArrowDownTrayIcon className='h-6 w-6  '  />



                        </div>


                        </div>


                       <div className='hover:bg-zinc-100 cursor-pointer py-7'>

                       
                        <div className='w-full  flex justify-between items-start  px-3 pt-2 md:px-5 md:pl-[2.75rem] my-3'>
                            <img className='w-[45px] h-[45px] md:w-[55px] md:h-[55px] rounded-full mt-3' src={sportsLogo} alt="" />

                            <div className='flex flex-col px-3 py-2 md:w-full text-black'>
                                <p><b>
                                    Sky Sports Premier League
                                </b> <span>@SkySportsPL
                                    ·
                                    8h</span></p>
                                <p>Only sports fans can understand what would cause a person to practice like this</p>

                            </div>
                            <BsThreeDots className=' pt-2 text-slate-700' size={26} />

                        </div>

                        










                        <div className='w-full pl-14 pt-2 md:pl-28 md:px-5'>

                            <video className='h-[174px] rounded-3xl md:w-full md:h-full' src={vdo} autoPlay loop muted></video>

                        </div>

                        <div className='  flex justify-around items-center px-3 pl-10 pt-2 md:px-5 md:pl-14'>
                            <div className='flex items-center'>
                            <ChatBubbleOvalLeftIcon className=' h-6 w-6 ' />
                                <p className='ml-3'>251</p>

                            </div>
                            <div className='flex items-center'>
                            <AiOutlineRetweet className=' ' size={26} />
                                <p className='ml-3'>777</p>

                            </div>
                            <div className='flex items-center'>
                            <HeartIcon className=' h-6 w-6 ' />
                                <p className='ml-3'>446</p>

                            </div>

                            <ArrowDownTrayIcon className='h-6 w-6  '  />



                        </div>

                        </div>









                    </div>


                    <div className='w-full h-[75px] sticky bottom-0 z-1  bg-[#ffffff] md:hidden'>
                        <div className='w-full h-full flex justify-around items-center'>
                        <RiHome7Fill className='text-black   ' size={26} />
                        <MagnifyingGlassIcon className="h-6 w-6  " />
                        <GrNotification className='  ' size={26} />
                        <BiEnvelope className='  ' size={26} />


                        </div>
                       

                    </div>






                </div>
                <div className=' hidden md:block'>
                    <div className=' ml-7 sticky top-0  h-[70px]  z-10  bg-[#ffffff] pt-3 w-full '>
                        <form className='flex items-center bg-[#EFF3F4] p-3 rounded-full  '>
                            
                            <MagnifyingGlassIcon className="h-6 w-6 mx-2 " />
                            <input className='bg-transparent border-0 outline-none mx-2  ' type="text" placeholder='Search Twitter' />


                        </form>





                    </div>


                    <div className='flex flex-col justify-center bg-[#EFF3F4] mt-3  rounded-xl ml-7  text-zinc-600   w-full'>
                        <h1 className='text-2xl font-bold my-3 text-black px-3'>Trends for you</h1>

                       <div >
                       <div className=' hover:bg-zinc-300 cursor-pointer '>
                            <div className='flex justify-between items-start my-3  px-3'>

                            
                            <div className=''>
                                <p>Technology Trending</p>
                                <h5 className='text-xl text-black font-bold'>Tiktok</h5>
                                <p>610k Tweets</p>
                            </div>

                            <BsThreeDots className=' pt-2 text-slate-700' size={26} />
                            </div>



                        </div>
                       </div>
                       <div>
                        <div className='hover:bg-zinc-300 cursor-pointer '>
                            <div className='flex justify-between items-start my-3 px-3'>
                            <div>
                                <p>Music Trending</p>
                                <h5 className='text-xl text-black font-bold'>#TheAstronaut</h5>
                                <p>220k Tweets</p>
                            </div>

                            <BsThreeDots className=' pt-2 text-slate-700' size={26} />
                            </div>



                        </div>
                        </div>
                        <div>
                        <div className='hover:bg-zinc-300 cursor-pointer '>
                            <div className='flex justify-between items-start my-3 px-3'>
                            <div>
                                <p>Sports Trending</p>
                                <h5 className='text-xl text-black font-bold'>India</h5>
                                <p>220k Tweets</p>
                            </div>

                            <BsThreeDots className=' pt-2 text-slate-700' size={26} />
                            </div>



                        </div>
                        </div>
                       <div>
                       <div className=' hover:bg-zinc-300 cursor-pointer'>
                        <div className='flex justify-between items-start my-3 px-3'>
                            <div>
                                <p>Music Trending</p>
                                <h5 className='text-xl text-black font-bold'>Aptos</h5>
                                <p>220k Tweets</p>
                            </div>

                            <BsThreeDots className=' pt-2 text-slate-700' size={26} />
                            </div>



                        </div>
                       </div>
                        <div>
                        <div className='hover:bg-zinc-300 cursor-pointer'>
                            <div className='flex justify-between items-start my-3 px-3'>
                            <div>
                                <p>Trending in Bangladseh</p>
                                <h5 className='text-xl text-black font-bold'>#Kalbela</h5>
                                <p>220k Tweets</p>
                            </div>

                            <BsThreeDots className=' pt-2 text-slate-700' size={26} />
                            </div>



                        </div>
                        </div>
                        <div>
                        <div className='hover:bg-zinc-300 cursor-pointer'>
                            <div className='flex justify-between items-start my-3 px-3'>
                            <div>
                                <p>Trending in Bangladseh</p>
                                <h5 className='text-xl text-black font-bold'>Makima</h5>
                                <p>220k Tweets</p>
                            </div>

                            <BsThreeDots className=' pt-2 text-slate-700' size={26} />
                            </div>



                        </div>
                        </div>
                       <div>
                       <div className='hover:bg-zinc-300 cursor-pointer'>
                        <div className='flex justify-between items-start my-3  px-3'>
                            <div>
                                <p>Music Trending</p>
                                <h5 className='text-xl text-black font-bold'>Jennie</h5>
                                <p>220k Tweets</p>
                            </div>

                            <BsThreeDots className=' pt-2 text-slate-700' size={26} />
                            </div>



                        </div>
                       </div>
                        <div>
                        <div className='hover:bg-zinc-300 cursor-pointer '>
                            <div className='flex justify-between items-start my-3 px-3'>
                            <div>
                                <p>Sports Trending</p>
                                <h5 className='text-xl text-black font-bold'>Scotland</h5>
                                <p>220k Tweets</p>
                            </div>

                            <BsThreeDots className=' pt-2 text-slate-700' size={26} />
                            </div>



                        </div>
                        </div>
                        <div>
                        <div className=' hover:bg-zinc-300 cursor-pointer'>
                            <div className='flex justify-between items-start my-3 px-3'>
                            <div>
                                <p>Music Trending</p>
                                <h5 className='text-xl text-black font-bold'>#TheAstronaut</h5>
                                <p>220k Tweets</p>
                            </div>

                            <BsThreeDots className=' pt-2 text-slate-700' size={26} />
                            </div>



                        </div>
                        </div>
                       <div>
                       <div className=' hover:bg-zinc-300 cursor-pointer'>
                        <div className='flex justify-between items-start my-3 px-3'>
                            <div>
                                <p>Trending in Bangladesh</p>
                                <h5 className='text-xl text-black font-bold'>Snapchat</h5>
                                <p>220k Tweets</p>
                            </div>

                            <BsThreeDots className=' pt-2 text-slate-700' size={26} />
                            </div>



                        </div>
                       </div>

                       <div className='hover:bg-zinc-300 cursor-pointer'>
                       <div className='p-3'>
                            <p className='text-blue-500 text-lg'>Show more</p>
                        </div>
                       </div>

                    </div>


                    <div className='flex flex-col justify-center bg-[#EFF3F4] mt-5  rounded-xl ml-7 px-5 text-zinc-600 pb-3 w-full'>

                        <h1 className='text-2xl font-bold my-3 text-black'>Who to follow</h1>

                        <div className='flex justify-between items-center my-3'>

                            <div className='flex items-center'>
                                <img className='w-[55px] h-[55px] rounded-full ' src={viratImg} alt="" />

                                <div className='ml-4'>
                                    <h5 className='text-xl text-black font-bold'>Virat Kohli</h5>
                                    <p>@viratkohli10</p>
                                </div>

                            </div>

                            <button className='bg-black text-white px-7 py-2 rounded-full'>Follow</button>



                        </div>
                        <div className='flex justify-between items-center my-3'>

                            <div className='flex items-center'>
                                <img className='w-[55px] h-[55px] rounded-full ' src={tom} alt="" />

                                <div className='ml-4'>
                                    <h5 className='text-xl text-black font-bold'>Tom Cruise</h5>
                                    <p>@tomcruiise60</p>
                                </div>

                            </div>

                            <button className='bg-black text-white px-7 py-2 rounded-full'>Follow</button>



                        </div>
                        <div className='flex justify-between items-center my-3'>

                            <div className='flex items-center'>
                                <img className='w-[55px] h-[55px] rounded-full ' src={bcbImg} alt="" />

                                <div className='ml-4'>
                                    <h5 className='text-xl text-black font-bold'>Bangladesh Cricket</h5>
                                    <p>@BCBtigers</p>
                                </div>

                            </div>

                            <button className='bg-black text-white px-7 py-2 rounded-full'>Follow</button>



                        </div>

                        <div>
                            <p className='text-blue-500 text-lg'>Show more</p>
                        </div>

                    </div>


                    <div className='ml-12 mt-6 text-zinc-500 pb-16'>
                        <p>Terms of Service Privacy Policy Cookie Policy</p>
                        <p>Accessibily Adds info More...</p>
                        <p>© 2022 Twitter,Inc.</p>

                    </div>


                </div>

            </div>

        </div>
    );
};

export default HomePage;