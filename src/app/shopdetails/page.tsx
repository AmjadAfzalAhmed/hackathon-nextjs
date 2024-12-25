import Image from 'next/image'
import image20 from '/public/images/img20.png'
import image21 from '/public/images/img21.png'
import image22 from '/public/images/img22.png'
import image23 from '/public/images/img23.png'
import image24 from '/public/images/img24.png'
import stars from '/public/images/Stars.png'
import { GoBriefcase } from "react-icons/go";
import { BiGitCompare } from "react-icons/bi";
import { FaArrowLeft, FaArrowRight, FaFacebook, FaMinus, FaPlus, FaTwitter, FaVimeo, FaYoutubeSquare } from 'react-icons/fa'
import { CiHeart } from 'react-icons/ci'
import { AiFillInstagram } from "react-icons/ai";

function ShopDetails() {
    return (
        <div>
            <div className="rounded-none">
                <div className="flex gap-5 max-md:flex-col">
                    <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                        <div className="max-md:mt-10 max-md:max-w-full">
                            <div className="flex gap-5 max-md:flex-col">
                                <div className="flex flex-col w-[21%] max-md:ml-0 max-md:w-full">
                                    <div className="flex flex-col max-md:mt-6">
                                        <Image
                                            src={image20}
                                            alt="Thumbnail view of chicken chup dish"
                                            className="object-contain aspect-[1.02] w-[132px]"
                                        />
                                        <Image
                                            src={image21}
                                            alt="Second thumbnail view of chicken chup dish"
                                            className="object-contain mt-6 rounded-md aspect-[1.02] w-[132px]"
                                        />
                                        <Image
                                        src={image22}
                                        alt="Third thumbnail view of chicken chup dish"
                                            className="object-contain mt-6 rounded-md aspect-[1.02] w-[132px]"
                                        />
                                        <Image
                                            src={image23}
                                            alt="Fourth thumbnail view of chicken chup dish"
                                            className="object-contain mt-6 rounded-md aspect-[1.02] w-[132px]"
                                        />
                                    </div>
                                </div>
                                <div className="flex flex-col ml-5 w-[79%] max-md:ml-0 max-md:w-full">
                                    <Image
                                        src={image24}
                                        alt="Main large view of Yummy Chicken Chup dish"
                                        className="object-contain grow w-full rounded-md aspect-[0.82] max-md:mt-6 max-md:max-w-full"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                        <div className="flex flex-col items-start w-full max-md:mt-10 max-md:max-w-full">
                            <div className="flex flex-wrap gap-5 justify-between items-start self-stretch w-full max-md:max-w-full">
                                <div className="px-4 py-1 mt-1 text-sm leading-loose text-white bg-amber-500 rounded-md" role="status">
                                    In stock
                                </div>
                                <div className="flex gap-4 text-lg leading-none whitespace-nowrap text-zinc-500">
                                    <button className="flex gap-1" aria-label="Previous product">
                                    <FaArrowLeft className="object-contain shrink-0 self-start w-6 aspect-square" />                                        
                                        <span>Prev</span>
                                    </button>
                                    <button className="flex gap-1" aria-label="Next product">
                                    <FaArrowRight  className="object-contain shrink-0 self-start w-6 aspect-square" />
                                        <span>Next</span>
                                    </button>
                                </div>
                            </div>
                            <h1 className="mt-2 text-5xl font-bold leading-none text-zinc-800 max-md:max-w-full max-md:text-4xl">
                                Yummy Chicken Chup
                            </h1>
                            <p className="self-stretch mt-6 text-lg leading-7 text-neutral-600 max-md:mr-2.5 max-md:max-w-full">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam
                                pellentesque bibendum non dui volutpat fringilla bibendum. Urna, urna,
                                vitae feugiat pretium donec id elementum. Ultrices mattis sed vitae
                                mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.
                            </p>
                            <hr className="shrink-0 self-stretch mt-8 w-full h-px border border-solid bg-neutral-200 border-neutral-200 max-md:mr-2" />
                            <div className="flex gap-4 items-end mt-8">
                                <div className="flex flex-col self-start">
                                    <div className="self-start text-3xl font-bold leading-none text-zinc-800" aria-label="Price: 54 dollars">
                                        54.00$
                                    </div>
                                    <div className="flex gap-3.5 mt-5">
                                        <Image
                                            src={stars}
                                            alt="Product rating stars"
                                            className="object-contain shrink-0 max-w-full aspect-[5.81] w-[116px]"
                                        />
                                        <div className="shrink-0 my-auto w-px h-4 border border-solid border-neutral-400"></div>
                                    </div>
                                </div>
                                <div className="mt-14 text-base text-zinc-500 max-md:mt-10" aria-label="Rating: 5.0 out of 5">
                                    5.0 Rating
                                </div>
                                <div className="shrink-0 mt-16 w-px h-5 border border-solid border-neutral-400 max-md:mt-10"></div>
                                <div className="mt-14 text-base text-zinc-500 max-md:mt-10" aria-label="22 customer reviews">
                                    22 Review
                                </div>
                            </div>
                            <div className="mt-6 text-lg leading-none text-zinc-800">
                                Dictum/cursus/Risus
                            </div>
                            <form className="flex gap-4 mt-6">
                                <div className="flex gap-6 items-center px-5 text-xl font-bold leading-snug whitespace-nowrap border border-solid border-zinc-500 text-zinc-800">
                                    <button type="button" aria-label="Decrease quantity">
                                    <FaMinus className="object-contain shrink-0 self-stretch my-auto w-5 aspect-square" />
                                    </button>
                                    <div className="shrink-0 self-stretch w-px border border-solid bg-zinc-500 border-zinc-500 h-[50px]"></div>
                                    <label className="sr-only">Quantity</label>
                                    <input type="number" id="quantity" value="1" min="1" className="self-stretch my-auto w-8 text-center" aria-label="Product quantity" />
                                    <div className="shrink-0 self-stretch w-px border border-solid bg-zinc-500 border-zinc-500 h-[50px]"></div>
                                    <button type="button" aria-label="Increase quantity">
                                    <FaPlus className="object-contain shrink-0 self-stretch my-auto w-5 aspect-square" />
                                    </button>
                                </div>
                                <button type="submit" className="flex gap-2 px-5 py-3 text-lg leading-none text-white bg-amber-500">
                                <GoBriefcase className="object-contain shrink-0 my-auto w-5 aspect-square" />
                                    <span>Add to cart</span>
                                </button>
                            </form>
                            <hr className="shrink-0 self-stretch mt-8 h-px border border-solid bg-neutral-200 border-neutral-200 max-md:max-w-full" />
                            <div className="flex gap-4 mt-6 text-lg leading-none text-neutral-600">
                                <button className="flex gap-2">
                                <CiHeart  className="object-contain shrink-0 my-auto w-5 aspect-square" />
                                    <span>Add to Wishlist</span>
                                </button>
                                <button className="flex gap-2 whitespace-nowrap">
                                <BiGitCompare className="object-contain shrink-0 my-auto w-5 aspect-square" />
                                    <span>Compare</span>
                                </button>
                            </div>
                            <div className="flex gap-2 mt-2 text-lg leading-none whitespace-nowrap">
                                <span className="grow text-zinc-800">Category:</span>
                                <span className="text-neutral-600">Pizza</span>
                            </div>
                            <div className="flex gap-2 mt-2 text-lg leading-none">
                                <span className="text-zinc-800">Tag:</span>
                                <span className="text-neutral-600">Our Shop</span>
                            </div>
                            <div className="flex gap-1.5 mt-6 text-lg leading-none text-zinc-800">
                                <span className="grow">Share :</span>
                                <FaYoutubeSquare className="object-contain shrink-0 self-start max-w-full aspect-[7.69] w-[184px]" />
                                <FaFacebook />
                                <FaTwitter />
                                <FaVimeo />
                                <AiFillInstagram />
                            </div>
                            <hr className="shrink-0 self-stretch mt-8 w-full h-px border border-solid bg-neutral-200 border-neutral-200 max-md:mr-2.5" />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ShopDetails
