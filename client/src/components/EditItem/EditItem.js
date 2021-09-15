import React, { Component } from "react";
import './EditItem.css';
import axios from "axios";
import { withRouter } from 'react-router'
import {toast, ToastContainer} from "react-toastify";

class EditItem extends Component {
  state = {
    id: '',
    name: "",
    quantity: "",
    response: ""
  };

  onChangeHandler = e => this.setState({ [e.target.name]: e.target.value });

  async componentDidMount() {
    try {
    let search =  this.props.location.search,
      id = search.substring(1, search.length);
    const updateItem = await axios(`/api/items/${id}`);
    const { name, quantity } = updateItem.data.item;
    this.setState({ id, name, quantity  });
    } catch (err) {
      this.setState({ response: "Item not found!" })
    }
  };

  updateItemHandler = async (e) => {
    e.preventDefault();
    try {
      const item = await axios.put(`/api/items/${this.state.id}`, {
        name: this.refs.name.value,
        quantity: this.refs.quantity.value
      });
      toast(item.data.message ,{ type: toast.TYPE.INFO, autoClose: 3000 });

    } catch (err) {
      toast(err.message ,{ type: toast.TYPE.ERROR, autoClose: 3000 });
    }
  };

  render() {
    if (this.state.response === "Item not found!")
      return <h1>Item not found!</h1>
    return (
      <div className="Edit-Item-Wrapper">
        <h1>Edit Item</h1>
        <form onSubmit={this.updateItemHandler}>
          <label htmlFor="name">Item Name:</label>
          <input
            type="text"
            placeholder="Enter item name"
            value={ this.state.name }
            name="name"
            onChange={this.onChangeHandler}
            ref="name"
            required
            className="Edit-Item-Input"
            id="name"
          />

          <label htmlFor="quantity">Quantity: </label>
          <input
            type="number"
            placeholder="Enter the quantity"
            value={ this.state.quantity }
            name="quantity"
            required
            onChange={this.onChangeHandler}
            ref="quantity"
            className="Edit-Item-Input"
            id="quantity"
          />
          <button type="submit" className="Edit-Item-Submit fa fa-pencil"></button>
        </form>
        <ToastContainer />
      </div>
    );
  }
}

export default withRouter(EditItem);
