import {
    BookmarkIcon,
    ChatIcon,
    DotsHorizontalIcon,
    EmojiHappyIcon,
    HeartIcon,
    PaperAirplaneIcon
} from "@heroicons/react/outline";
import { HeartIcon as HeartIconFilled } from "@heroicons/react/solid";
import { addDoc, collection, deleteDoc, doc, onSnapshot, orderBy, query, serverTimestamp, setDoc } from "firebase/firestore";
import { useEffect, useRef, useState } from "react";
import { useSession } from "next-auth/react";
import { db } from "../firebase";


const Post = ({ id, username, userImage, img, caption }) => {

    const { data: session } = useSession();
    const [comments, setComments] = useState([]);
    const [likes, setLikes] = useState([]);
    const [liked, setLiked] = useState(false);
    const [commentInput, setCommentInput] = useState("");
    const commentRef = useRef(null);

    useEffect(
        () =>
            onSnapshot(query(collection(db, 'posts', id, 'comments'), orderBy("timestamp", "desc")),
                (snapshot) => {
                    setComments(snapshot.docs.map(doc => doc.data()));
                }
            ),
        [db]
    );

    useEffect(
        () =>
            onSnapshot(query(collection(db, 'posts', id, 'likes'), orderBy("timestamp", "desc")),
                (snapshot) => {
                    setLikes(snapshot.docs.map(doc => doc.id));
                }
            ),
        [db]
    );

    useEffect(
        () =>
            setLiked(
                likes.find(id => id === session.user.uid)
            )
        ,
        [likes]
    )

    const likePost = async () => {
        if (liked)
            await deleteDoc(doc(db, 'posts', id, 'likes', session.user.uid));
        else
            await setDoc(doc(db, 'posts', id, 'likes', session.user.uid), {
                username: session?.user?.username,
                userImage: session?.user?.image,
                timestamp: serverTimestamp()
            });

    }

    const sendComment = async () => {
        const CommentToSend = commentInput;
        setCommentInput('');
        await addDoc(collection(db, 'posts', id, 'comments'), {
            comment: CommentToSend,
            username: session?.user?.username,
            userImage: session?.user?.image,
            timestamp: serverTimestamp()
        });
    }

    return (
        <div className="mt-5 mb-5 border border-gray-300 rounded-lg bg-white">
            {/* HEADER */}
            <div className="flex bg-white items-center p-5 mx-2">
                <img src={userImage} className="rounded-full h-12
                         w-12 p-1 mr-3 cursor-pointer"/>
                <p className="flex-1 font-bold"><span className="cursor-pointer">{username}</span></p>
                <DotsHorizontalIcon className="h-5 cursor-pointer" />
            </div>

            {/* image */}
            <img src={img} className="w-full object-cover" onDoubleClick={likePost} />

            {/* Buttons */}
            <div className="flex justify-between items-center px-4 pt-4">
                <div className="flex space-x-4">
                    {!liked && <HeartIcon className="btn" onClick={likePost} />}
                    {liked&& <HeartIconFilled className="btn" color="red" onClick={likePost} />}
                    <ChatIcon className="btn" onClick={() => commentRef.current.focus()} />
                    <PaperAirplaneIcon className="btn rotate-45" />
                </div>
                <BookmarkIcon className="btn" />
            </div>

            {likes.length > 0 && (
                <div className="relative left-5 font-semibold pt-2">
                    {likes.length} likes
                </div>
            )}

            {/* Caption */}
            <p className="px-5 py-3 truncate">
                <span className="font-bold mr-1">{username}</span> {caption}
            </p>

            {/* Comments */}
            {comments.length > 0 && (
                <div className="ml-10 h-20 overflow-y-scroll scrollbar-thumb-gray-400 scrollbar-thin">
                    {
                        comments.map(comment => (
                            <div key={comment.id} className="flex space-x-2 items-center mb-3">
                                <img src={comment.userImage} className="h-7 w-7 rounded-full" />
                                <div className="text-sm flex-1">
                                    <span className="font-bold">{comment.username}</span> {" "} {comment.comment}
                                </div>
                                <HeartIcon className="h-7 cursor-pointer pr-5" />
                            </div>
                        ))
                    }
                </div>
            )}

            {/* Input comment */}
            <form className="flex items-center p-4 border-t">
                <EmojiHappyIcon className="h-7" />
                <input
                    type="text"
                    className="flex-1 border-none focus:ring-0 outline-none"
                    placeholder="Add a comment..."
                    value={commentInput}
                    onChange={e => setCommentInput(e.target.value)}
                    ref={commentRef}
                />
                <button disabled={!commentInput.trim()} className="
                    font-bold 
                    cursor-pointer
                    text-[#0095f6] 
                    disabled:text-[#AAC9FF]"
                    onClick={sendComment}
                >Post</button>
            </form>
        </div>
    );
}

export default Post;