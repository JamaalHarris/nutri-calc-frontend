import axios from "axios";
import { useState } from "react";

export function EdamamSearch() {
  const [nutritionalInfo, setNutritionalInfo] = useState({});
  const handleSubmit = (event) => {
    console.log("handleSubmit");
    event.preventDefault();
    // creates params by taking info on the form (quantity, measurement and item)
    const params = new FormData(event.target);
    axios.post(`http://localhost:3000/api.json`, params).then((response) => {
      console.log(response.data);
      setNutritionalInfo(response.data);
    });
  };
  return (
    <div className="container text-center">
      <h1>Search</h1>
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

        <button className="btn btn-outline-secondary btn-lg" type="submit">
          Search Foods
        </button>
      </form>
      <div className="card">
        <h3>Nutritional Info (percentage of daily value)</h3>
        <div>
          <p>Calories: {nutritionalInfo.calories}</p>
          {/* the question marks force the program to check to see if what comes next exists. its called the optional chaining operator */}
          <p>Total Daily Fat: {nutritionalInfo?.totalDaily?.FAT?.quantity}</p>
          <p>Cholesterol: {nutritionalInfo?.totalDaily?.CHOLE?.quantity}</p>
          <p>Sodium: {nutritionalInfo?.totalDaily?.NA?.quantity}</p>
          <p>Carbohydrates: {nutritionalInfo?.totalDaily?.CHOCDF?.quantity}</p>
          <p>Fiber: {nutritionalInfo?.totaltotalDaily?.FIBTG?.quantity}</p>
          <p>
            Protein: {Math.round(nutritionalInfo?.totalNutrients?.PROCNT?.quantity)}grams,
            {nutritionalInfo?.totalDaily?.PROCNT?.quantity}
          </p>
        </div>
      </div>
    </div>
  );
}
