import React, {Component} from "react";
import "./style.css"

export default class Form extends Component {
    state = {
        title: "",
        description: ""
    }
    handleInput = e => this.setState({[e.target.name] :e.target.value})
    handleAddClick = () => {
        this.props.handleAdd({
            title: this.state.title,
            description: this.state.description
        })
        //empty the inputs
        this.setState( { title: "", description: "" } )
    }
    render() {
        return ( 
        <>
        <div className="form-container">
            <h2>Todo App</h2>
            <div className="box">
            <label htmlFor="title">Title</label>
            <input id="title" type="text" name="title" value={this.state.title} onChange={this.handleInput}/>
            </div>

            <div className="box">
            <label htmlFor="description">Description</label>
            <input type="text" name="description" value={this.state.description} onChange={this.handleInput}/>
            </div>

            <button onClick={this.handleAddClick}>Add</button>
        </div>
        </>
        )
    }
} 