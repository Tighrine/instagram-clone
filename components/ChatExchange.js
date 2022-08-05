import { useEffect, useRef, useState } from "react";
import { useSession } from "next-auth/react";
import { useRecoilValue } from "recoil";
import { messagesList } from "../atoms/SelectedChatState";


const ChatExchange = ({ img, username }) => {

    const [messages, setMessages] = useState([]);
    const { data: session } = useSession();
    const listMessages = useRecoilValue(messagesList);
    const scrollRef = useRef(null);

    useEffect(() => {
      setMessages(listMessages);
      scrollRef?.current?.scrollIntoView();
    }, [listMessages, scrollRef])
    


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
            <div ref={scrollRef} />
        </div>
    );
}

export default ChatExchange;