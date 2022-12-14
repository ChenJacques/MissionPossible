import axios from "axios";
import React from "react";

const Add = () => {

  const [formValue, setformValue] = React.useState({
    user: '',
    task: ''
  });

  const handleSubmit = async(e) => {
    // e.preventDefault()
    const loginFormData = new FormData();
    loginFormData.append("name", formValue.user)
    loginFormData.append("price", formValue.task)
    // console.log(formValue.user)

    axios.post('http://localhost:5000/api/todolist', {
        user : formValue.user,
        task : formValue.task,

    })
    .catch(err => {
        console.log(err)
    })
  }

  const handleChange = (event) => {
    setformValue({
        
      ...formValue,
      [event.target.name]: event.target.value
    });
  }
    return (
      <form class="form">
      <p>Ajouter une tache</p>
      <div>
      <input
        type="text"
        name="user"
        placeholder="Qui doit la faire ?"
        value={formValue.user}
        onChange={handleChange}
        />
      </div>
      <div>
        <input
        type="text"
        name="task"
        placeholder="Nom de la tâche"
        value={formValue.task}
        onChange={handleChange}
        />
      </div>
      <button onClick={handleSubmit}
      >
        Ajouter
      </button>
    </form>
      )
};

export default Add