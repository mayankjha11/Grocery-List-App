import React from 'react';
import './Item.css';
import { Link } from 'react-router-dom';
import Avatar from 'react-avatar';


const Item = ({ _id, name, quantity, removeItem }) => {

  return(
    <tr>
      <td>{ name }</td>
      <td>{ quantity }</td>
      <td>
        <button onClick={ () => removeItem(_id) } className="Action-Button fa fa-trash"></button>
        <Link to={{ pathname: '/edit', search: _id }}>
         <button className="Action-Button fa fa-pencil"></button>
        </Link>
      </td>
    </tr>
  );
};

export default Item;
