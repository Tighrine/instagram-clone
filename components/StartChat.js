const StartChat = () => {
    return (
        <div className="flex flex-col h-full items-center justify-center space-y-3">
            <img
                src="/assets/inbox.png"
                className="w-24"
            />
            <p className="text-3xl font-light mx-auto">Your messages</p>
            <p className="text-gray-500">Send private pictures or messages to a friend or group of friend.</p>
            <button className="font-bold text-white bg-blue-500 px-3 py-1.5 rounded-md hover:cursor-pointer">Send a message</button>
        </div>
    );
}

export default StartChat;