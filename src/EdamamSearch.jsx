import axios from "axios";

export function EdamamSearch() {
  const handleSubmit = (event) => {
    console.log("handleSubmit");
    event.preventDefault();
    // creates params by taking info on the form (quantity, measurement and item)
    const params = new FormData(event.target);
    axios.post(`http://localhost:3000/api.json`, params).then((response) => {
      console.log(response.data);
    });
  };
  return (
    <div>
      <h1>Edamam Search</h1>
      <form onSubmit={handleSubmit}>
        <div>
          Quantity: <input name="quantity" type="number" />
        </div>
        <div>
          Measurement: <input name="measurement" type="text" />
        </div>
        <div>
          Item: <input name="item" type="text" />
        </div>
        <button className="btn btn-primary" type="submit">
          Search Foods
        </button>
      </form>
    </div>
  );
}
