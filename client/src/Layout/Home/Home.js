import React, { Component } from "react";
import "./Home.css";
import axios from "axios";
import { PropagateLoader } from 'react-spinners';
// Components
import Item from "../../components/Item/Item";
import SearchItems from "../../components/SearchItem/SearchItems";

class Home extends Component {
  state = {
    data: null,
    allItems: null,
    error: ""
  };

  async componentDidMount() {
    try {
      const items = await axios("/api/items/");
      this.setState({ data: items.data });
    } catch (err) {
      this.setState({ error: err.message });
    }
  }

  removeItem = async id => {
    try {
      const itemRemoved = await axios.delete(`/api/items/${id}`);
      const items = await axios("/api/items/");
      this.setState({ data: items.data });
    } catch (err) {
      this.setState({ error: err.message });
    }
  };

  searchItems = async username => {
    let allItems = [...this.state.data.items];
    if (this.state.allItems === null) this.setState({ allItems });

    let items = this.state.data.items.filter(({ name }) =>
      name.toLowerCase().includes(username.toLowerCase())
    );
    if (items.length > 0) this.setState({ data: { items } });

    if (username.trim() === "")
      this.setState({ data: { items: this.state.allItems } });
  };

  render() {
    let items;

    if (this.state.data)
      items =
        this.state.data.items &&
        this.state.data.items.map(item => (
          <Item key={item._id} {...item} removeItem={this.removeItem} />
        ));
    else return <div className="Spinner-Wrapper"> <PropagateLoader color={'#333'} /> </div>;

    if (this.state.error) return <h1>{this.state.error}</h1>;
    if (this.state.data !== null)
      if (!this.state.data.items.length)
        return <h1 className="No-Items">No Items!</h1>;

    return (
      <div className="Table-Wrapper">
        <h1>Item List</h1>
        <SearchItems searchItems={this.searchItems} />
        <table className="Table">
          <thead>
            <tr>
              <th>Item Name</th>
              <th>Quantity</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>{items}</tbody>
        </table>
      </div>
    );
  }
}

export default Home;
