import React, { useState, useEffect } from "react";


const Pizza = props => {
  const initialState = {
    id: null,
    title: "",
    description: "",
    price: " "
  };
  const [current, setCurrent] = useState(initialTutorialState);
  const [message, setMessage] = useState("");

  const getPizza = id => {
    PizzaDataService.get(id)
      .then(response => {
        setCurrent(response.data);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  useEffect(() => {
    getPizza(props.match.params.id);
  }, [props.match.params.id]);

  const handleInputChange = event => {
    const { name, value } = event.target;
    setCurrent({ ...current, [name]: value });
  };

  const updatePublished = status => {
    var data = {
      id: current.id,
      title: current.title,
      description: current.description,
      price: current.price
    };

    PizzaDataService.update(current.id, data)
      .then(response => {
        setCurrent({ ...current, published: status });
        console.log(response.data);
        setMessage("The status was updated successfully!");
      })
      .catch(e => {
        console.log(e);
      });
  };

  const updatePizza = () => {
    PizzaDataService.update(current.id, current)
      .then(response => {
        console.log(response.data);
        setMessage("The Pizza was updated successfully!");
      })
      .catch(e => {
        console.log(e);
      });
  };

  const deletePizza = () => {
    PizzaDataService.remove(current.id)
      .then(response => {
        console.log(response.data);
        props.history.push("/tutorials");
      })
      .catch(e => {
        console.log(e);
      });
  };

  return (
    <div>
      {current ? (
        <div className="edit-form">
          <h4>Tutorial</h4>
          <form>
            <div className="form-group">
              <label htmlFor="title">Title</label>
              <input
                type="text"
                className="form-control"
                id="title"
                name="title"
                value={current.title}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="description">Description</label>
              <input
                type="text"
                className="form-control"
                id="description"
                name="description"
                value={current.description}
                onChange={handleInputChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="price">Price</label>
              <input
                type="text"
                className="form-control"
                id="price"
                name="price"
                value={current.price}
                onChange={handleInputChange}
              />
            </div>

          </form>

          

          <button className="badge badge-danger mr-2" onClick={deletePizza}>
            Delete
          </button>

          <button
            type="submit"
            className="badge badge-success"
            onClick={updatePizza}
          >
            Update
          </button>
          <p>{message}</p>
        </div>
      ) : (
        <div>
          <br />
          <p>Please click on a Pizza...</p>
        </div>
      )}
    </div>
  );
};

export default Pizza;