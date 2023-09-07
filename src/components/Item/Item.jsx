import React, { Component } from 'react'



import { Alert } from 'react-bootstrap';

import "./item.scss"

export class Item extends Component {
  render() {
    const { firsname, lastName, categories, phone, N } = this.props;
    return (
      <Alert variant="success" className='d-flex align-items-center justify-content-between'>
        <div className="title">
          <h3>
            {N}. {firsname} {lastName}
          </h3>
          <h5>category: {categories}</h5>
          <h5>Phone: {phone}</h5>
        </div>
        <div className="btn">
          <button className='btn__done'>Done</button>
        </div>
      </Alert>
    );
  }
}

export default Item