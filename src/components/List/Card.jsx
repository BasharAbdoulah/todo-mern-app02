import React from "react";
import { FaTrash } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";


export default class Card extends React.Component {
    state = {
        editCard: this.props.editCard,
        title: this.props.title,
        description: this.props.description,
        edit: false
    }

    // Fix card
    fixidCard = () => {
        const {handleDelete, title, description, id} = this.props
        return (
            <div className="card">
                <span className="delete-edit">
                <FaTrash className="trash" onClick={() => handleDelete(id)}/>
                <FaEdit className="edit" onClick={() => this.setState({edit: true})}/>
                </span>
                <h3> { title } </h3>
                <p> { description } </p>
            </div>
            )
    }


    editableCard = () => {
        return (
            <div className="card">
                <input type="text" name="title" value={this.state.title} onChange={this.handleInput} placeholder="title"/>
                <textarea type="text" name="description" value={this.state.description} onChange={this.handleInput} placeholder="description"/>

            <div className="btns-c">
                <button onClick={() => 
                {
                    this.state.editCard({
                        _id: this.props.id,
                        title: this.state.title,
                        description: this.state.description,
                    })
                    this.setState({edit: false})
                }
            }
                >Save</button>
                <button onClick={ () => this.setState({
                    edit: false,
                    title: this.state.title,
                    description: this.state.description})}>Cansel</button>
            </div>
            </div>
        )
    }

    handleInput = e => this.setState({
        [e.target.name]: e.target.value
    })

    render() {
        return !this.state.edit ? this.fixidCard() : this.editableCard()
    }
}
