import { faker } from "@faker-js/faker";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import Story from "./Story";

const Stories = () => {
    const { data: session } = useSession();
    const [stories, setStories] = useState([]);

    useEffect(() => {

        let stories = [...Array(20)].map((_, i) => ({
            id: i,
            avatar: faker.image.avatar(),
            username: faker.name.lastName(),
        }));

        if(!!session)
            stories.unshift({
                id: stories.length + 1,
                avatar: session.user?.image,
                username: session.user?.username
            });

        setStories(stories);
    }, [session]);
    

    return (
        <div className="flex space-x-2 p-6 
            bg-white mt-8 border border-gray-300
            overflow-x-scroll
            scrollbar-none
            rounded-lg">
            {stories.map(profile => (
                <Story 
                    key={profile.id} 
                    img={profile.avatar} 
                    username={profile.username} 
                />
            ))}
        </div>
    );
}

export default Stories;