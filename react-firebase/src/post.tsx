import { Row } from "react-bootstrap"

export const Post = (props: { post: any }) => {
    return (
        <Row className="mt-5">
            <Row><h3>{props.post.title}</h3></Row>
            <Row><hr></hr></Row>
            <Row><span>{props.post.content}</span></Row>
        </Row>
    )
}