import { signOut, useSession } from "next-auth/react";

const MiniProfile = ({ img, username, status, btnText }) => {

    const {data: session} = useSession();

    return (
        <div className="flex items-center">
            <img
                src={img}
                className="
                    h-16 w-16 
                    rounded-full
                    border
                    border-gray-300
                    cursor-pointer
                    p-[2px]
                "
            />
            <div className="ml-4 flex-1">
                <p className="font-bold text-sm text-[#262626] cursor-pointer">{username}</p>
                <p className="text-[#8e8e8e] text-sm">{status}</p>
            </div>
            <button 
                className="
                    text-sm
                    font-bold
                    cursor-pointer
                    text-[#0095f6]
                    ml-4
                "
                onClick={signOut}
            >{btnText}</button>
        </div>
    );
}

export default MiniProfile;