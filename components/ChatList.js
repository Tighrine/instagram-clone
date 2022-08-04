import { faker } from "@faker-js/faker";
import { useEffect, useState } from "react";
import ChatItem from "./ChatItem";

const ChatList = () => {

    const [chats, setChats] = useState([]);

    useEffect(() => {
        let chats = [...Array(20)].map((_, i) => ({
            id: i,
            avatar: faker.image.avatar(),
            username: faker.name.lastName(),
            lastMsg: faker.lorem.sentence(),
            selected: false
        }));

        setChats(chats);
    }, []);

    return (
        <div className="my-1">
            {
                chats.map(chat => (
                    <ChatItem
                        key={chat.id}
                        id={chat.id}
                        avatar={chat.avatar}
                        username={chat.username}
                        lastMsg={chat.lastMsg}
                        selected={chat.selected}
                        setChats={setChats}
                        chats={chats}
                    />
                ))
            }
        </div>
    );
}

export default ChatList;