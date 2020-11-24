import React from "react";
import { Row, Col } from "react-bootstrap";

class ShowDetails extends React.Component {
  state = {
    movie: {},
  };

  componentDidMount = async () => {
    try {
      let response = await fetch(
        `http://www.omdbapi.com/?apikey=1846c79&i=${this.props.match.params.id}`
      );
      let parsedResponse = await response.json();
      console.log(parsedResponse);
      this.setState({ movie: parsedResponse });
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <>
        <Row>
          <Col md={4} className="text-center">
            <img src={this.state.movie.Poster} alt="movie poster" />
          </Col>
          <Col md={8}>
            <h1>{this.state.movie.Title}</h1>
          </Col>
        </Row>
      </>
    );
  }
}

export default ShowDetails;
