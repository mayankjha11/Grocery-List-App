import React, { Component } from "react";
import './AddItem.css';
import axios from "axios";
import {toast, ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class AddItem extends Component {
  state = {
    name: "",
    quantity: "",
    response: ""
  };

  onChangeHandler = e => this.setState({ [e.target.name]: e.target.value });

  addItem = async e => {
    e.preventDefault();
    try {
      const newItem = await axios.post("/api/items/", {
          name: this.refs.name.value,
          quantity: this.refs.quantity.value
        }
      );

      toast("Item " + newItem.data.newItem.name + " was added successfully" ,{ type: toast.TYPE.SUCCESS, autoClose: 3000 });
    } catch (err) {
      toast(err.message ,{ type: toast.TYPE.ERROR, autoClose: 3000 });
    }
  };

  render() {
    return (
      <div className="AddItem-Wrapper">
        <h1>Add Item:</h1>
        <form onSubmit={this.addItem}>
          <label htmlFor="name">Item Name:</label>
          <input
            type="text"
            placeholder="Enter item name"
            name="name"
            onChange={this.onChangeHandler}
            ref="name"
            className="Add-Item-Input"
            required
            minLength="2"
            maxLength="20"
            id="name"
          />

          <label htmlFor="quantity">Quantity: </label>
          <input
            type="number"
            placeholder="Enter the quantity"
            name="quantity"
            onChange={this.onChangeHandler}
            ref="quantity"
            className="Add-Item-Input"
            required
            id="quantity"
          />
          <button type="submit" className="Add-Item-Submit fa fa-plus"></button>
          <button type="reset" className="Add-Item-Reset fa fa-refresh"></button>
        </form>
        <ToastContainer />
      </div>
    );
  }
}

export default AddItem;
