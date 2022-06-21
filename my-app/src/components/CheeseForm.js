import React, {useState} from "react";


function CheeseForm({ cheeses }) {

    const initialValues = {
        id: "",
        name: "",
        firmness: "",
        image: "",
        description: ""
      }
    const [formData, setFormData] = useState(initialValues)

    function handleChange (e) {
        const {name, value} = e.target;
        setFormData({...formData, [name]: value})
      }
   
    function submitForm() {
        fetch("http://localhost:3000/cheeses", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify([...cheeses, formData])
        })
        .then(response => response.json())
        .then(data => console.log(data))
        
        setFormData(formData)
      }

    return (<form onSubmit={(e) => {
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