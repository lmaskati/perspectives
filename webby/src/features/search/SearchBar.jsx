import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Form, Button } from 'react-bootstrap';

const SearchBar = ({ onSubmit }) => {
  const [text, setText] = useState('');
  return (
    <div>
      <div className="d-flex flex-row">
        <Form.Control value={text} onChange={(e) => setText(e.target.value)} className="mr-1" />
        <Button disabled={text === ''} onClick={() => onSubmit(text)} className="ml-1">
          Search
        </Button>
      </div>
      <br></br>
    </div>
  );
};

SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default SearchBar;
