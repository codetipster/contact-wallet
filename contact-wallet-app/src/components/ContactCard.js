import React from 'react';
import boyd from '../images/boyd.jpeg';

const ContactCard = (props) => {
  const { id, fullname, email, phone } = props.contact;
  return (
    <div className="item">
      <div style={{ display: 'flex' }} className="content">
        <img className="ui avatar image" src={boyd} alt="user" />
        <div>
          <div className="header">{fullname}</div>
          <div>{email}</div>
          <div>{phone}</div>
        </div>
        <i
          style={{ color: 'blue', marginLeft: '100px', marginTop: '15px' }}
          className="trash alternate outline icon"
        ></i>
      </div>
      <hr></hr>
    </div>
  );
};

export default ContactCard;
