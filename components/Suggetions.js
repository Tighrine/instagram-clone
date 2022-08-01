import { faker } from "@faker-js/faker";
import { useEffect, useState } from "react";
import MiniProfile from "./MiniProfile";

const Suggetions = () => {

    const [suggetions, setSuggetions] = useState([]);

    useEffect(() => {
        const suggetions = [...Array(5)].map((_, i) => (
            {
                id: i,
                avatar: faker.image.avatar(),
                address: faker.address.streetAddress(true),
                username: faker.name.lastName(),
                phone: faker.phone.number(),
                email: faker.internet.email(),
                company: faker.company.companyName()
            }
        ));
        setSuggetions(suggetions);
    }, [])


    return (
        <div className="mt-4">
            <div className="flex justify-between text-sm mb-5">
                <p className="font-bold text-gray-400 flex-1">Suggetions for you</p>
                <button className="font-bold border-none">See All</button>
            </div>
            <div>
                {
                    suggetions.map(({ id, avatar, username, company }) => (
                        <div key={id} className="flex items-center mb-2">
                            <img
                                src={avatar}
                                className="
                                    h-10 w-10 
                                    rounded-full
                                    border
                                    border-gray-300
                                    cursor-pointer
                                    p-[2px]
                                "
                            />
                            <div className="ml-4 flex-1">
                                <p className="font-bold text-xs text-[#262626] cursor-pointer">{username}</p>
                                <p className="text-[#8e8e8e] text-xs break-words">Works at {company}</p>
                            </div>
                            <button
                                className="
                                    text-xs
                                    font-bold
                                    cursor-pointer
                                    text-[#0095f6]
                                "
                            >Follow</button>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default Suggetions;