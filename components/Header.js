import { useSession, signOut, signIn } from "next-auth/react";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { modalState } from "../atoms/ModalState";
import Image from "next/image";
import {
    SearchIcon,
    PlusCircleIcon,
    UserGroupIcon,
    HeartIcon,
    PaperAirplaneIcon,
    MenuIcon,
    HomeIcon
} from "@heroicons/react/outline";

import { HomeIcon as HomeIconFilled } from "@heroicons/react/solid";
import "../styles/Header.module.css";


const Header = () => {

    const { data: session } = useSession();
    const [open, setOpen] = useRecoilState(modalState);
    const router = useRouter();

    return (
        <div className="headerContainer">
            <div className="flex justify-between max-w-6xl mx-5 lg:mx-auto">
                {/* LEFT */}
                <div onClick={() => router.push('/')} className="relative hidden lg:inline-grid w-24 cursor-pointer">
                    <Image
                        src='https://links.papareact.com/ocw'
                        layout="fill"
                        objectFit="contain"
                    />
                </div>

                <div onClick={() => router.push('/')}  className="relative lg:hidden flex-shrink-0 w-10 cursor-pointer">
                    <Image
                        src='https://links.papareact.com/jjm'
                        layout="fill"
                        objectFit="contain"
                    />
                </div>

                {/* MIDDLE */}
                <div className="max-w-xs">
                    <div className="relative mt-1 p-3 rounded-md">
                        <div className="absolute inset-y-0 pl-3 flex items-center pointer-events-none">
                            <SearchIcon className="h-5 w-5 text-gray-500" />
                        </div>
                        <input
                            className="bg-gray-50 
                            block 
                            w-full 
                            pl-10 
                            sm:text-sm
                            border-gray-300 
                            focus:ring-black 
                            focus:border-black
                            rounded-md"
                            type="text"
                            placeholder="Search"
                        />
                    </div>
                </div>
                {/* RIGHT */}

                <div className="flex items-center space-x-4">
                    <HomeIcon onClick={() => router.push('/')} className="navBtn" />
                    <MenuIcon className="h-6 w-6 md:hidden" />
                    {session ? (
                        <>
                            <div className="relative navBtn">
                                <PaperAirplaneIcon 
                                    onClick={() => router.push('inbox')} className="navBtn rotate-45" />
                                <div className="absolute 
                                                -top-2 
                                                -right-1  
                                                w-5
                                                h-5 
                                                bg-red-500 
                                                rounded-full 
                                                text-white
                                                flex
                                                justify-center
                                                items-center
                                                animate-pulse
                                                text-xs
                                                font-semibold
                                            "
                                >3</div>
                            </div>
                            <PlusCircleIcon onClick={() => setOpen(true)} className="navBtn" />
                            <UserGroupIcon className="navBtn" />
                            <HeartIcon className="navBtn" />
                            <img
                                src={session?.user?.image}
                                alt="profile picture"
                                className="h-10 rounded-full cursor-pointer"
                                onClick={signOut}
                            />
                        </>
                    ) : (
                        <button onClick={signIn}>Sign In</button>
                    )}

                </div>
            </div>
        </div>
    );
}

export default Header;