import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../firebase";
import Post from "./Post";

const Posts = () => {

    const [posts, setPosts] = useState([]);

    useEffect(
        () =>
            onSnapshot(query(collection(db, 'posts'), orderBy("timestamp", "desc")),
                (snapshot) => {
                    setPosts(snapshot.docs);
                }
            ),
        [db]
    );

    return (
        <div className="mt-8">
            {posts.map(post => (
                <Post
                    key={post.id}
                    id={post.id}
                    username={post.data().username}
                    userImage={post.data().profileImage}
                    caption={post.data().caption}
                    img={post.data().image}
                />
            ))}
        </div>
    );
}

export default Posts;