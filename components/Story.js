const Story = ({ img, username }) => {
    return (
        <div className="cursor-pointer">
            <img 
                className="h-14 w-14 rounded-full
                  border-red-500 border-2 p-[1.5px] object-contain 
                    hover:scale-110 
                    transition 
                    transform 
                    ease-out
                    duration-100" 
                src={img} 
                alt="user profile picture" 
            />
            <p className="text-xs w-14 truncate text-center">{username}</p>
        </div>
    );
}

export default Story;