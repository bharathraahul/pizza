import React, { useState } from "react";


const AddPizza = () => {
  const initialState = {
    id: null,
    title: "",
    description: "",
    price: " "
  };
  const [pizza, setPizza] = useState(initialState);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = event => {
    const { name, value } = event.target;
    setPizza({ ...pizza, [name]: value });
  };

  const savePizza = () => {
    var data = {
      title: pizza.title,
      description: pizza.description
    };

    PizzaDataService.create(data)
      .then(response => {
        setPizza({
          id: response.data.id,
          title: response.data.title,
          description: response.data.description,
          price: response.data.price
        });
        setSubmitted(true);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  const newPizza = () => {
    setPizza(initialState);
    setSubmitted(false);
  };

  return (
    <div className="submit-form">
      {submitted ? (
        <div>
          <h4>You submitted successfully!</h4>
          <button className="btn btn-success" onClick={newPizza}>
            Add
          </button>
        </div>
      ) : (
        <div>
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              className="form-control"
              id="title"
              required
              value={pizza.title}
              onChange={handleInputChange}
              name="title"
            />
          </div>

          <div className="form-group">
            <label htmlFor="description">Description</label>
            <input
              type="text"
              className="form-control"
              id="description"
              required
              value={pizza.description}
              onChange={handleInputChange}
              name="description"
            />
          </div>

          <button onClick={savePizza} className="btn btn-success">
            Submit
          </button>
        </div>
      )}
    </div>
  );
};

export default AddPizza;