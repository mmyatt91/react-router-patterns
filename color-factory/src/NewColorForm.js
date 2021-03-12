import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./NewColorForm.css";

function NewColorForm({addColor}){
  const [form, updateForm] = useState({name:"", hex:"#ffffff"});
  const history = useHistory();

  function handleChange(e) {
    e.persist();
    updateForm(f => ({...f, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    addColor({ [form.name]: form.hex });
    history.push("/colors");
  }

  const { hex, name } = form;

  return(
    <div className="NewColor">
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Color Name:</label>
          <input
            name="name"
            id="name"
            value={name}
            placeholder="Enter Color Name"
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="hex">Color Value:</label>
          <input
            type="color"
            name="hex"
            id="hex"
            value={hex}
            onChange={handleChange}
          />
        </div>
        <input type="Submit" value="Add New Color"/>
      </form>
    </div>
  )
}

export default NewColorForm;