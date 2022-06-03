import React, {Component} from "react";
import List from "../components/List/list"
import Form from "../components/Form/form"
import { LIST_URL } from "../constans/url.js";



export default class Home extends Component{

    state = { //this state it's for our component and we put the data in it
      list: [],
      errMessage: "",
      showError: false
    }

componentDidMount() {
  this.fetchData()
}

fetchData() {
  fetch(LIST_URL).then(res => res.json()) // get data from this URL
  .then(res => {
    this.setState({list: res}) // put the data in the list by setState()
  })
  .catch(err => console.log(err))
}

// card delete function
handleDelete = async (id) => {

  try {
    await fetch(`${LIST_URL}/${id}`, {method: "delete",})
    this.fetchData()
    throw new Error("Sory you can't delete!")
  } catch (error) {
    console.log(error);
  }
  
}

// Add Cards
handleAdd = ({title, description}) => {
  if (title === "" && description === "") {
    return false
  } else {
    fetch(LIST_URL, {
      method: "post",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify({
        title,
        description
      })
    }).then(res => {
      if (res.status === 200) {
        return res.json()
      }
      throw new Error("can't add card!!")
    })
    .then(res => this.fetchData())
    .catch(err => console.log(err))
  
  }
}

// Edit card
editCard = ({title, description, _id}) => {
  fetch(`${LIST_URL}/${_id}`, {
    method: "put",
    headers: {
      "content-type": "application/json"
    },
    body: JSON.stringify({
      title,
      description
    })
  })
  .then(res => {
    if (res.status === 200) {
      return res.json()
    }
    throw new Error("can't add card!!")
  })
  .then(res => this.fetchData())
  .catch(err => console.log(err))
}

    render() {
      const {list} = this.state // we pull the data from this.list to new var name's list also
        return(
            <> 
            {this.state.showError && <span> { this.state.errMessage } </span>}  
                <Form handleAdd={this.handleAdd}/>
                <List list={list} handleDelete={this.handleDelete } editCard={this.editCard}/>  
            </>
        )
    }
} 