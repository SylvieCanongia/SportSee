import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getUserMainData } from './../user-http.service';


class UserMainData extends Component {
  constructor(props) {
    super(props)
    this.state = {
      userMainData: {},
    }
  }

  componentDidMount() {
    getUserMainData().then((response) => console.dir(response));
    };

  render() {
    return (
      <div>

      </div>
    );
  }
}

UserMainData.propTypes = {

};

export default UserMainData;