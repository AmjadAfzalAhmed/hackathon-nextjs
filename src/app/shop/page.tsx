

import { ChevronRight, Search, UserRound } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import bgPic from '/public/images/menutop.png'
import { PiHandbag } from 'react-icons/pi'
import card1 from '/public/images/imgs1.png'
import card2 from '/public/images/chocolate.png'
import card3 from '/public/images/imgs3.png'
import icon from '/public/images/muffIco.png'
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"


function OurShop() {
    return (
        <div className='w-[1920px] h-[3347px]'>
            {/* Header */}
            <div className="w-[1920px] min-h-[90px] flex items-center bg-stone-950 " >
                <div className="w-[1320px] h-8 absolute top-[29px] left-[300px] flex flex-wrap gap-10 items-center">
                    <div className="w-[109px] h-8 self-stretch text-2xl font-bold leading-none text-amber-500 ">

                        <span className="text-white">Food</span>

                        <span className="text-amber-500">tuck</span>
                    </div>
                    <nav className="max-w-[508px] h-6 flex flex-wrap absolute top-2 left-[451px] gap-8 self-stretch text-base text-white max-md:max-w-full" aria-label="Main navigation">
                        <Link href="/" className="grow font-bold text-amber-500" aria-current="page">Home</Link>
                        <Link href="/menu">Menu</Link>
                        <Link href="/blog">Blog</Link>
                        <Link href="/pages">Pages</Link>
                        <Link href="/about">About</Link>
                        <Link href="/shop">Shop</Link>
                        <Link href="/contact">Contact</Link>
                    </nav>
                    <div className="flex gap-4 self-stretch my-auto" aria-label="Social media links">
                        <Search className=" absolute left-[1216px] top-2 shrink-0 w-6 h-6 aspect-square text-[#ffffff]" />
                        <UserRound className=" absolute left-[1256px] top-2 shrink-0 w-6 h-6 aspect-square text-[#ffffff]" />
                        <PiHandbag className=" absolute left-[1296px] top-2 shrink-0 w-6 h-6 aspect-square text-[#ffffff]" />
                    </div>
                </div>
            </div>

            <div className="w-[1920px] h-[410px]">
                <Image
                    src={bgPic}
                    className="object-contain w-full aspect-[4.67] -z-10"
                    alt="Decorative banner image"
                />
                <div className='w-[225px] h-[104px] z-100'>
                    <h1 className='text-white text-5xl font-bold absolute top-[198px] left-[850px] leading-14'>Our Shop</h1>

                    <div className='w-[190px] h-7 flex items-center absolute top-[274px] left-[897px]'>
                        <Link href='/' className='text-white text-[20px] leading-7'>Home</Link>
                        <ChevronRight className='w-6 h-6 text-white' />
                        <Link href='/shop/shopdetails' className='text-[#ff9f0d] text-[20px] font-normal leading-7'>Shopdetails</Link>
                    </div>

                </div>

            </div>
            {/* Header ends here */}

            {/* Mid Section */}
            <div className='w-[1320px] h-[1923px] flex flex-col gap-6 absolute top-[560px] left-[300px]'>
                <div className='flex gap-4'>
                    <div className="sort flex gap-7">
                        <div className="one w-[332px] h-[46px] flex items-center gap-4">
                            <p className='font-semibold text-xl'>Sort By:</p>
                            <Select>
                                <SelectTrigger className="w-[236px] h-[46px]">
                                    <SelectValue placeholder="Newest" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectLabel></SelectLabel>
                                        <SelectItem value="Fresh Lime">Fresh Lime</SelectItem>
                                        <SelectItem value="Country Burger">Country Burger</SelectItem>
                                        <SelectItem value="Chocolate Muffin">Chocolate Muffin</SelectItem>
                                        <SelectItem value="Drinks">Drinks</SelectItem>
                                        <SelectItem value="Pizza">Pizza</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                        </div>
                        <div className="two w-[332px] h-[46px] flex items-center gap-4">
                            <p className='font-semibold text-xl'>Show:</p>
                            <Select>
                                <SelectTrigger className="w-[236px] h-[46px]">
                                    <SelectValue placeholder="Default" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectLabel></SelectLabel>
                                        <SelectItem value="Fresh Lime">Fresh Lime</SelectItem>
                                        <SelectItem value="Country Burger">Country Burger</SelectItem>
                                        <SelectItem value="Chocolate Muffin">Chocolate Muffin</SelectItem>
                                        <SelectItem value="Drinks">Drinks</SelectItem>
                                        <SelectItem value="Pizza">Pizza</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>

                </div>
                <div className="cards w-[984px]">

                    {/* Row 1 */}
                    <div className="row1 flex gap-6">
                        <div className="card1 w-[312px] h-[330px]">
                            <Image src={card1} alt='fresh lime' width={312} height={267} />
                            <p className='text-xl font-bold mt-3'>Fresh Lime</p>
                            <div className='flex gap-2 mt-3'>
                                <p className='text-amber-500'>$38.00</p> <p className='text-slate-400 line-through'>$45.00</p>
                            </div>
                            <Image src={icon} alt='icons' width={146} height={34} className='relative top-[-200px] left-20 ' />
                        </div>
                        <div className="card2 w-[312px] h-[330px]">
                            <Image src={card2} alt='chocolate muffin' width={312} height={267} />
                            <p className='text-xl font-bold mt-3'>Chocolate Muffin</p>
                            <div className='flex gap-2 mt-3'>
                                <p className='text-amber-500'>$38.00</p>
                            </div>

                        </div>
                        <div className="card3 w-[312px] h-[330px]">
                            <Image src={card3} alt='fresh lime' width={312} height={267} />
                            <p className='text-xl font-bold mt-3'>Burger</p>
                            <div className='flex gap-2 mt-3'>
                                <p className='text-amber-500'>$21.00</p>
                            </div>
                        </div>
                    </div>

                    {/* Row 2 */}
                    <div className="row2 flex gap-6 mt-6">
                        <div className="card1 w-[312px] h-[330px]">
                            <Image src={card1} alt='fresh lime' width={312} height={267} />
                            <p className='text-xl font-bold mt-3'>Fresh Lime</p>
                            <div className='flex gap-2 mt-3'>
                                <p className='text-amber-500'>$38.00</p> <p className='text-slate-400 line-through'>$45.00</p>
                            </div>

                        </div>
                        <div className="card2 w-[312px] h-[330px]">
                            <Image src={card2} alt='chocolate muffin' width={312} height={267} />
                            <p className='text-xl font-bold mt-3'>Chocolate Muffin</p>
                            <div className='flex gap-2 mt-3'>
                                <p className='text-amber-500'>$38.00</p>
                            </div>

                        </div>
                        <div className="card3 w-[312px] h-[330px]">
                            <Image src={card3} alt='fresh lime' width={312} height={267} />
                            <p className='text-xl font-bold mt-3'>Burger</p>
                            <div className='flex gap-2 mt-3'>
                                <p className='text-amber-500'>$21.00</p>
                            </div>
                        </div>
                    </div>

                    {/* Row 3 */}
                    <div className="row3 flex gap-6 mt-6">
                        <div className="card1 w-[312px] h-[330px]">
                            <Image src={card1} alt='fresh lime' width={312} height={267} />
                            <p className='text-xl font-bold mt-3'>Fresh Lime</p>
                            <div className='flex gap-2 mt-3'>
                                <p className='text-amber-500'>$38.00</p> <p className='text-slate-400 line-through'>$45.00</p>
                            </div>

                        </div>
                        <div className="card2 w-[312px] h-[330px]">
                            <Image src={card2} alt='chocolate muffin' width={312} height={267} />
                            <p className='text-xl font-bold mt-3'>Chocolate Muffin</p>
                            <div className='flex gap-2 mt-3'>
                                <p className='text-amber-500'>$38.00</p>
                            </div>

                        </div>
                        <div className="card3 w-[312px] h-[330px]">
                            <Image src={card3} alt='fresh lime' width={312} height={267} />
                            <p className='text-xl font-bold mt-3'>Burger</p>
                            <div className='flex gap-2 mt-3'>
                                <p className='text-amber-500'>$21.00</p>
                            </div>
                        </div>
                    </div>

                    {/* Row 4 */}
                    <div className="row4 flex gap-6 mt-6">
                        <div className="card1 w-[312px] h-[330px]">
                            <Image src={card1} alt='fresh lime' width={312} height={267} />
                            <p className='text-xl font-bold mt-3'>Fresh Lime</p>
                            <div className='flex gap-2 mt-3'>
                                <p className='text-amber-500'>$38.00</p> <p className='text-slate-400 line-through'>$45.00</p>
                            </div>

                        </div>
                        <div className="card2 w-[312px] h-[330px]">
                            <Image src={card2} alt='chocolate muffin' width={312} height={267} />
                            <p className='text-xl font-bold mt-3'>Chocolate Muffin</p>
                            <div className='flex gap-2 mt-3'>
                                <p className='text-amber-500'>$38.00</p>
                            </div>

                        </div>
                        <div className="card3 w-[312px] h-[330px]">
                            <Image src={card3} alt='fresh lime' width={312} height={267} />
                            <p className='text-xl font-bold mt-3'>Burger</p>
                            <div className='flex gap-2 mt-3'>
                                <p className='text-amber-500'>$21.00</p>
                            </div>
                        </div>
                    </div>

                    {/* Row 5 */}
                    <div className="row1 flex gap-6 mt-6">
                        <div className="card1 w-[312px] h-[330px]">
                            <Image src={card1} alt='fresh lime' width={312} height={267} />
                            <p className='text-xl font-bold mt-3'>Fresh Lime</p>
                            <div className='flex gap-2 mt-3'>
                                <p className='text-amber-500'>$38.00</p> <p className='text-slate-400 line-through'>$45.00</p>
                            </div>

                        </div>
                        <div className="card2 w-[312px] h-[330px]">
                            <Image src={card2} alt='chocolate muffin' width={312} height={267} />
                            <p className='text-xl font-bold mt-3'>Chocolate Muffin</p>
                            <div className='flex gap-2 mt-3'>
                                <p className='text-amber-500'>$38.00</p>
                            </div>

                        </div>
                        <div className="card3 w-[312px] h-[330px]">
                            <Image src={card3} alt='fresh lime' width={312} height={267} />
                            <p className='text-xl font-bold mt-3'>Burger</p>
                            <div className='flex gap-2 mt-3'>
                                <p className='text-amber-500'>$21.00</p>
                            </div>
                        </div>
                    </div>

                </div>

            </div>

        </div>
    )
}

export default OurShop
