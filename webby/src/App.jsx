import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import SearchArea from './features/search/SearchArea';
import Reps from './features/search/Reps';
import Libs from './features/search/Libs';
import Central from './features/search/Central';

class App extends React.Component {
  state = { message: 'coronavirus' };
  callbackFunction = (childData) => {
    this.setState({ message: childData });
  };

  render() {
    return (
      <div style={{ 
        backgroundImage: `url("https://media.socastsrm.com/wordpress/wp-content/blogs.dir/2165/files/2020/12/news-1.jpg")` 
      }}> 
      <Container className="w-100 h-100 p-5">
        <Row>
          <Col>
            <h1>Project Neutral</h1>
            <SearchArea parentCallback={this.callbackFunction} />
          </Col>
        </Row>
        <Row>
          <Col>
            <Libs query={this.state.message} />{' '}
          </Col>
          <Col>
            <Central query={this.state.message} />
          </Col>
          <Col>
            <Reps query={this.state.message} />
          </Col>
        </Row>
      </Container>
      </div>
    );
  }
}

export default App;
