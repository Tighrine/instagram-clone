import { PencilAltIcon, ChevronDownIcon } from "@heroicons/react/outline";
import { useSession } from "next-auth/react";
import { useRecoilValue } from "recoil";
import { selectedChatState } from "../../atoms/SelectedChatState";
import Chat from "../../components/Chat";
import ChatExchange from "../../components/ChatExchange";
import ChatList from "../../components/ChatList";
import Header from "../../components/Header";
import HeadPage from "../../components/HeadPage";
import StartChat from "../../components/StartChat";

const Inbox = () => {

    const { data: session } = useSession();
    const selectedChat = useRecoilValue(selectedChatState);

    return (
        <main>
            <HeadPage headTitle="Inbox • Direct" />
            <Header />
            <div className="flex justify-center relative h-[70%] w-[70%] 
            mx-auto mt-4 bg-white border border-[#dbdbdb] rounded-md">
                <div className="flex-col w-[40%] border-r border-[#dbdbdb]">
                    <div className="flex justify-between w-full border-b border-[#dbdbdb] px-4 py-5">
                        <div className="flex items-center mx-auto hover:cursor-pointer">
                            <span className="font-semibold">{session?.user?.username}</span>
                            <ChevronDownIcon className="w-5 ml-1" />
                        </div>
                        <PencilAltIcon className="w-7 cursor-pointer" />
                    </div>
                    <div className="h-[75.5vh] overflow-y-auto w-[100%]">
                        <ChatList />
                    </div>
                </div>
                <Chat />
            </div>
        </main>
    );
}

export default Inbox;