import { addDoc, collection } from "firebase/firestore";
import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { db } from "./auth";
import { postsRef } from "./storage";

export const AddPost = () => {
    
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    
    const submit = async () => {
        const blog = {
            title,
            content,
            createdDate: new Date(),
        }

        try {
            const docRef = await addDoc(postsRef, {
              post: blog,    
            });
            console.log("Document written with ID: ", docRef.id);
          } catch (e) {
            console.error("Error adding document: ", e);
          }
    }

    return (
        <div>
            <h1>Blogs</h1>
            <Form>
                <Form.Group className="mb-3" controlId="exampleForm.Title">
                    <Form.Label>Title</Form.Label>
                    <Form.Control onChange={(v) => setTitle(v.target.value)} type="text" placeholder="Your title" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.Text">
                    <Form.Label>Content</Form.Label>
                    <Form.Control onChange={(v) => setContent(v.target.value)} as="textarea" rows={3} />
                </Form.Group>
                <Button onClick={submit}>Submit</Button>
            </Form>

        </div>
    )
}