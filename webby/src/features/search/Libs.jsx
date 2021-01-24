import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Form, Button } from 'react-bootstrap';
import {get, getArticle} from '../../utils/GetArticle'

const getinfo = async   ({ url }) => {
  return  await get('https://freegeoip.app/json/')
}
class Libs extends React.Component {
    constructor(props) {
      super(props);
   
      this.state = {
        data: 'hii',
      };
    }
  componentDidMount() {
    get('https://freegeoip.app/json/')
    .then(res => this.setState({ data: res }));
  }

 render  () {
  const {data} = this.state;
   return(
    <div className="d-flex flex-row">
    {console.log(data)}
    <p>
    My IP is: {data.ip || data}
    </p>
    </div>
   )
 };
};

Libs.propTypes = {
  url: PropTypes.string,
};

export default Libs;


