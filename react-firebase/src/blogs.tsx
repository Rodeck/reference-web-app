import { addDoc, collection, getDocs, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import { Button, Form, Row, Stack } from "react-bootstrap";
import { AddPost } from "./add-post";
import { db, postsRef } from "./storage";
import { Post } from "./post";

export interface BlogPost {
    title: String,
    content: String,
    createdDate: Date,
}

export const Blogs = () => {
    const [addEnabled, setAddEnabled] = useState(false);
    const [page, setPage] = useState(0);
    const [posts, setPosts] = useState<Array<any>>([]);

    useEffect(() => {
        getDocs(db.posts)
            .then((querySnapshot) => {
                const newData = querySnapshot.docs
                    .map((doc) => ({ ...doc.data(), id: doc.id }));
                setPosts(newData);
                console.log(newData);
            })
    }, [posts])

    return (
        <div>
            <Row>
                <Stack>
                    <Button onClick={() => setAddEnabled(!addEnabled)}>Add post</Button>
                    {addEnabled ? (<AddPost></AddPost>) : null}
                </Stack>

            </Row>
            <Row>
                <h1>Posts</h1>
                { posts.map(p => (<Post key={p.id} post={p.post}></Post>))}
            </Row>
        </div>
    )
};