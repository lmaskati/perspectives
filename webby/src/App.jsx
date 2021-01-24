import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import SearchArea from './features/search/SearchArea';
import Reps from './features/search/Reps'
import Libs from './features/search/Libs'

const App = () => (
  <Container className="w-100 h-100 p-5">
    <Row>
      <Col>
        <h1>Project Neutral</h1>
        <SearchArea />
      </Col>
    </Row>
    <Row>
      <Col><Libs /> </Col>
      <Col>This is column 2. Put stuff here.</Col>
      <Col><Reps url = 'https://blog.logrocket.com/axios-or-fetch-api/'/></Col>
      </Row>
  </Container>
);

export default App;
