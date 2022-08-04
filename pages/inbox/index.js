import { PencilAltIcon, ChevronDownIcon } from "@heroicons/react/outline";
import { useSession } from "next-auth/react";
import { useRecoilValue } from "recoil";
import { selectedChatState } from "../../atoms/SelectedChatState";
import ChatExchange from "../../components/ChatExchange";
import ChatList from "../../components/ChatList";
import Header from "../../components/Header";
import HeadPage from "../../components/HeadPage";
import StartChat from "../../components/StartChat";

const Inbox = () => {

    const { data: session } = useSession();
    const selectedChat = useRecoilValue(selectedChatState);

    return (
        <main className="bg-gray-50 h-full">
            <HeadPage headTitle="Inbox • Direct" />
            <Header />
            <div className="grid grid-cols-1 md:grid-cols-2 md:max-w-3xl
                xl:grid-cols-3 xl:max-w-6xl mx-auto mt-4 bg-white">
                <div className="md:col-span-1 border border-[#dbdbdb] rounded-tl-md rounded-bl-md
                overflow-y-hidden">
                    <div className="flex justify-between w-full border-b border-[#dbdbdb] px-4 py-5">
                        <div className="flex items-center mx-auto hover:cursor-pointer">
                            <span className="font-semibold">{session?.user?.username}</span>
                            <ChevronDownIcon className="w-5 ml-1" />
                        </div>
                        <PencilAltIcon className="w-7 cursor-pointer" />
                    </div>
                    <div className="overflow-x-hidden max-h-[580px]">
                        <ChatList />
                    </div>
                </div>
                <div className="xl:col-span-2 lg:col-span-1  md:col-span-1 
                    sm:col-span1 border border-l-0 border-[#dbdbdb] 
                    rounded-tr-md rounded-br-md">
                    {Object.keys(selectedChat).length === 0 ? (<StartChat />) : (
                        <div className="flex flex-col">
                            <div className="flex justify-between w-full border-b border-[#dbdbdb] px-7 py-2.5">
                                <div className="flex items-center hover:cursor-pointer">
                                    <img
                                        className="w-12 h-12 rounded-full"
                                        src={selectedChat.avatar}
                                    />
                                    <span className="font-semibold ml-2">{selectedChat.username}</span>
                                </div>
                                <div className="flex space-x-4">
                                    <button>
                                        <svg aria-label="Appel vocal" className="h-7 w-7" color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24">
                                            <path d="M18.227 22.912c-4.913 0-9.286-3.627-11.486-5.828C4.486 14.83.731 10.291.921 5.231a3.289 3.289 0 01.908-2.138 17.116 17.116 0 011.865-1.71 2.307 2.307 0 013.004.174 13.283 13.283 0 013.658 5.325 2.551 2.551 0 01-.19 1.941l-.455.853a.463.463 0 00-.024.387 7.57 7.57 0 004.077 4.075.455.455 0 00.386-.024l.853-.455a2.548 2.548 0 011.94-.19 13.278 13.278 0 015.326 3.658 2.309 2.309 0 01.174 3.003 17.319 17.319 0 01-1.71 1.866 3.29 3.29 0 01-2.138.91 10.27 10.27 0 01-.368.006zm-13.144-20a.27.27 0 00-.167.054A15.121 15.121 0 003.28 4.47a1.289 1.289 0 00-.36.836c-.161 4.301 3.21 8.34 5.235 10.364s6.06 5.403 10.366 5.236a1.284 1.284 0 00.835-.36 15.217 15.217 0 001.504-1.637.324.324 0 00-.047-.41 11.62 11.62 0 00-4.457-3.119.545.545 0 00-.411.044l-.854.455a2.452 2.452 0 01-2.071.116 9.571 9.571 0 01-5.189-5.188 2.457 2.457 0 01.115-2.071l.456-.855a.544.544 0 00.043-.41 11.629 11.629 0 00-3.118-4.458.36.36 0 00-.244-.1z" />
                                        </svg>
                                    </button>
                                    <button>
                                        <svg aria-label="Appel vidéo" className="h-7 w-7" color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24">
                                            <rect fill="none" height="18" rx="3" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" width="16.999" x="1" y="3" />
                                            <path d="M17.999 9.146l2.495-2.256A1.5 1.5 0 0123 8.003v7.994a1.5 1.5 0 01-2.506 1.113L18 14.854" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                                        </svg>
                                    </button>
                                    <button>
                                        <svg aria-label="Voir les détails du fil" className="h-7 w-7" color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24">
                                            <circle cx="12.001" cy="12.005" fill="none" r="10.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                                            <circle cx="11.819" cy="7.709" r="1.25" />
                                            <line fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" x1="10.569" x2="13.432" y1="16.777" y2="16.777" />
                                            <polyline fill="none" points="10.569 11.05 12 11.05 12 16.777" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                            <div className="w-full overflow-y-auto max-h-[500px]">
                                <ChatExchange img={selectedChat.avatar} username={selectedChat.username} />
                            </div>
                            <div className="flex items-center justify-center my-4 mx-3">
                                <div className="flex items-center justify-center border border-[#dbdbdb] rounded-3xl w-full mx-5">
                                    <button className="ml-3">
                                        <svg aria-label="Emoji" color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24">
                                            <path d="M15.83 10.997a1.167 1.167 0 101.167 1.167 1.167 1.167 0 00-1.167-1.167zm-6.5 1.167a1.167 1.167 0 10-1.166 1.167 1.167 1.167 0 001.166-1.167zm5.163 3.24a3.406 3.406 0 01-4.982.007 1 1 0 10-1.557 1.256 5.397 5.397 0 008.09 0 1 1 0 00-1.55-1.263zM12 .503a11.5 11.5 0 1011.5 11.5A11.513 11.513 0 0012 .503zm0 21a9.5 9.5 0 119.5-9.5 9.51 9.51 0 01-9.5 9.5z" />
                                        </svg>
                                    </button>
                                    <div
                                        className="flex-1 border-none overflow-auto max-h-[120px] focus:outline-none justify-center p-3"
                                        contentEditable
                                    />
                                    <button className="mr-3">
                                        <svg aria-label="Ajouter une photo ou une vidéo" color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24">
                                            <path d="M6.549 5.013A1.557 1.557 0 108.106 6.57a1.557 1.557 0 00-1.557-1.557z" fillRule="evenodd" />
                                            <path d="M2 18.605l3.901-3.9a.908.908 0 011.284 0l2.807 2.806a.908.908 0 001.283 0l5.534-5.534a.908.908 0 011.283 0l3.905 3.905" fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="2" />
                                            <path d="M18.44 2.004A3.56 3.56 0 0122 5.564h0v12.873a3.56 3.56 0 01-3.56 3.56H5.568a3.56 3.56 0 01-3.56-3.56V5.563a3.56 3.56 0 013.56-3.56z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                                        </svg>
                                    </button>

                                    {false && <button onClick={sendMessage} className="mr-3 font-semibold text-[#0095f6]">Send</button>}
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </main>
    );
}

export default Inbox;