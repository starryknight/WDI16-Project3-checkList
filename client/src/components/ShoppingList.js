import React, { Component } from 'react';
import axios from 'axios'

class ShoppingList extends Component {
  state = {
    shoppingList: {},
    items: []
  }

  componentDidMount() {
    const userId = this.props.match.params.userId
    const listId = this.props.match.params.listId
   

    axios.get(`/api/users/${userId}/list/${listId}`)
      .then(res => {
        this.setState({
          shoppingList: res.data.list
        })
        console.log(res.data)
      })
      .catch((err) => {
        console.error(err)
      })
  }


  render() {
    return (
      <div>
        hello
        <h1>{this.state.shoppingList.listName}</h1>
      </div>
    );
  }
}

export default ShoppingList;