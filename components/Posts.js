import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../firebase";
import Post from "./Post";

const Posts = () => {

    const DUMMY_DATA = [
        {
            id: "123",
            username: "Aghiles",
            userImg: "https://media-exp1.licdn.com/dms/image/C5603AQGD34HMroDdBA/profile-displayphoto-shrink_800_800/0/1517350773297?e=1664409600&v=beta&t=xnK2KuP9Fm9JPWap_dV7lPtBdAbvqfkdIF-B94EkAWU",
            img: "https://media-exp1.licdn.com/dms/image/sync/D4D34AQGizpQnZhrz2A/ugc-proxy-shrink_1280_800/0/1658158346816?e=1659722400&v=beta&t=xWDihsoQ2H3_hvLRxOBgd9FjKKyjR_22MCBQCdyXZPY",
            caption: "Hit the heart, comment and subscribe !!"
        },
        {
            id: "456",
            username: "Aghiles",
            userImg: "https://media-exp1.licdn.com/dms/image/C5603AQGD34HMroDdBA/profile-displayphoto-shrink_800_800/0/1517350773297?e=1664409600&v=beta&t=xnK2KuP9Fm9JPWap_dV7lPtBdAbvqfkdIF-B94EkAWU",
            img: "https://media-exp1.licdn.com/dms/image/sync/D4D34AQGizpQnZhrz2A/ugc-proxy-shrink_1280_800/0/1658158346816?e=1659722400&v=beta&t=xWDihsoQ2H3_hvLRxOBgd9FjKKyjR_22MCBQCdyXZPY",
            caption: "Hit the heart, comment and subscribe !!"
        }
    ];

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