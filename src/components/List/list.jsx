import React, {Component} from "react";
import Card from "./Card"
import "./style.css"



export default class List extends Component {
    render() {

        const {list, handleDelete, editCard} = this.props

        return <div className="list-container">
            <h2>List</h2>

            <div className="list">
            {list.map(({_id, ...rest}) => (
                <Card key={_id} id={_id} {...rest} handleDelete={handleDelete} editCard={editCard}/>
            ))}

            </div>

        </div>
    }
}