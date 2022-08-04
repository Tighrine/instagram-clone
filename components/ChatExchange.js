import { useState } from "react";
import { useSession } from "next-auth/react";
import { useRecoilValue } from "recoil";
import { messagesList } from "../atoms/SelectedChatState";


const ChatExchange = ({ img, username }) => {

    const [message, setMessage] = useState(null);
    const [messages, setMessages] = useState([]);
    const { data: session } = useSession();
    const listMessages = useRecoilValue(messagesList);

    const sendMessage = () => {
        setMessages(...messages, {
            message,
            username: session.user.username
        });
    }


    return (
        <div className="flex flex-col w-full">
            {
                listMessages.map(item => {
                    return item.username !== session.user.username ? (
                        <div className="self-start border border-[#dbdbdb] p-4 text-sm max-w-xs break-words w-fit h-fit rounded-3xl ml-3 mt-2">
                            {item.msg}
                        </div>
                    ) : (
                        <div className="self-end bg-[#efefef] p-4 text-sm max-w-xs break-words w-fit h-fit rounded-3xl mr-3 mt-2">
                            {item.msg}
                        </div>
                    )
                })
            }
        </div>
    );
}

export default ChatExchange;