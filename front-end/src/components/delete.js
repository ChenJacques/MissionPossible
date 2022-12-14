import axios from "axios";
import React from "react";

const Del = () => {

  const [formValue, setformValue] = React.useState({
    del : ''
  });

  const handleSubmit = async(e) => {
    // e.preventDefault()
    const loginFormData = new FormData();
    loginFormData.append("del", formValue.name)

    axios.delete('http://localhost:5000/api/todolist/'+formValue.del, {
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
      <form>
      <p>Supprimer</p>
      <div>
      <input
        type="text"
        name="del"
        placeholder="Task ID"
        value={formValue.del}
        onChange={handleChange}
        />
      </div>
      <button onClick={handleSubmit}>
        Supprimer
      </button>
    </form>
      )
};

export default Del