import React from "react";


function CheeseForm({ submitForm, formData, setFormData }) {
   
      function handleChange (e) {
        const {name, value} = e.target;
        setFormData({...formData, [name]: value})
      }

    return (
    <form onSubmit={(e) => {
        e.preventDefault()
        submitForm()}}>
        Not Cheesy Enough? Add Your Own!
        <input className="name" placeholder="Name" type="text" name="name" value={formData.name} onChange={handleChange}></input>
        <input className="firmness" placeholder="Firmness" type="text" name="firmness" value={formData.firmness} onChange={handleChange}></input>
        <input className="image" placeholder="Image URL" type="text" name="image" value={formData.image} onChange={handleChange}></input>
        <input className="description" placeholder="Description" type="text" name="description" value={formData.description} onChange={handleChange}></input>
        <button className="submit-button">Cut The Cheese!</button>
    </form>
    )
}

export default CheeseForm