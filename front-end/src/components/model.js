import React from "react";
import axios from "axios";

const Model = (props) => {

    const handleSubmit = async(e) => {
        // e.preventDefault()
        axios.delete('http://localhost:5000/api/todolist/'+props.id, {
        })
        .catch(err => {
            console.log(err)
        })
        window.location.reload(false);
      }
    
    return (
        <div class="div1">
            <p>Concerné : {props.user}</p>
            <p>Nom de la tache : {props.task}</p>
            <p>Ajouté le : {props.time}</p>
            <button type="submit" onClick={handleSubmit}>
        Supprimer
      </button>
        </div>
    )
};

export default Model