import { collection } from "firebase/firestore";
import { db } from "./auth";
import { BlogPost } from "./blogs";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export const postsRef = collection<BlogPost, BlogPost>(db, "posts");

const database = {
    posts: collection(db, 'posts')
}
export { database as db }