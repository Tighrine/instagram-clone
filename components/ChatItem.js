import { faker } from "@faker-js/faker";
import { useSession } from "next-auth/react";
import { useRecoilState } from "recoil";
import { selectedChatState, messagesList } from "../atoms/SelectedChatState";

const ChatItem = ({ id, avatar, username, lastMsg, selected, setChats, chats }) => {

    const [selectedChat, setSelectedChat] = useRecoilState(selectedChatState);
    const [messages, setMessages] = useRecoilState(messagesList);

    const { data: session } = useSession();
    
    const selectItem = id => {
        let chatList = structuredClone(chats);
        chatList = chatList.map((chat, i) =>{ 
            if(i != id) {
                chat.selected = false;
            }
            return chat;
        });
        let chat = chats[id];
        chat.selected = true;
        chatList[id] = chat;
        setChats(chatList);
        setSelectedChat(chat);

        const fakeMessages = [...Array(20)].map((_, i) => {
            let name = faker.name.firstName();
            if (i % 2 === 0) name = session.user.username;

            return {
                id: i,
                username: name,
                msg: faker.lorem.sentence()
            }
        });
        setMessages(fakeMessages);
    }

    return (
        <div onClick={() => selectItem(id)} id={id} className={`flex px-5 py-1.5 items-center ${!selected && "hover:bg-[#fbfbfb] hover:cursor-pointer"} ${selected && "bg-[#efefef]"}`}>
            <img
                src={avatar}
                className="h-16 p-[1px] rounded-full border border-[#dbdbdb]"
            />
            <div className="mx-2">
                <p className="">{username}</p>
                <p className="text-sm text-gray-600 w-40 truncate overflow-hidden">{lastMsg}</p>
            </div>
        </div>
    );
}

export default ChatItem;