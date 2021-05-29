import React from 'react';

const ContactCard = (props) => {
  const { id, fullname, email, phone } = props.contact;
  return (
    <div className="item">
      <div style={{ display: 'flex' }} className="content">
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
