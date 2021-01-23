import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import SearchArea from './features/search/SearchArea';

const App = () => (
  <Container className="w-100 h-100 p-5">
    <Row>
      <Col>
        <h1>Project Neutral</h1>
        <SearchArea />
      </Col>
    </Row>
    <Row>
      <Col>This is column 1. Put stuff here.</Col>
      <Col>This is column 2. Put stuff here.</Col>
      <Col>This is column 3. Put stuff here.</Col>
    </Row>
  </Container>
);

export default App;
