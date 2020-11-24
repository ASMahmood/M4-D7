import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import AddComment from "./AddComment";
import CommentList from "./CommentList";

class CommentArea extends React.Component {
  render() {
    return (
      <Container id="commentArea">
        <Row>
          <Col xs={6} className="offset-3">
            <h2>{this.props.movieId.Title}</h2>
          </Col>
        </Row>
        <Row>
          <CommentList movieId={this.props.movieId.imdbID} />
          <AddComment movieId={this.props.movieId.imdbID} />
        </Row>
      </Container>
    );
  }
}

export default CommentArea;
