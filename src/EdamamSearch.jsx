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
          <input placeholder="Quantity" name="quantity" type="number" />
        </div>
        <div>
          <input placeholder="Measurement" name="measurement" type="text" />
        </div>
        <div>
          <input placeholder="Item" name="item" type="text" />
        </div>

        <button className="btn btn-outline-secondary btn-lg" type="submit">
          Search Foods
        </button>
      </form>
      <div className="card">
        <h3>Nutritional Info (grams and daily percentage)</h3>
        <div className="card-detail">
          <p>Calories: {nutritionalInfo.calories}</p>
          {/* the question marks force the program to check to see if what comes next exists. its called the optional chaining operator */}
          <p>
            Total Daily Fat: {Math.round(nutritionalInfo?.totalNutrients?.FAT?.quantity)} grams,{" "}
            {Math.round(nutritionalInfo?.totalDaily?.FAT?.quantity)}%
          </p>

          <p>
            Cholesterol: {Math.round(nutritionalInfo?.totalNutrients?.CHOLE?.quantity)} grams,{" "}
            {Math.round(nutritionalInfo?.totalDaily?.CHOLE?.quantity)}%
          </p>

          <p>
            Sodium: {Math.round(nutritionalInfo?.totalNutrients?.NA?.quantity)} grams,{" "}
            {Math.round(nutritionalInfo?.totalDaily?.NA?.quantity)}%
          </p>

          <p>
            Carbohydrates: {Math.round(nutritionalInfo?.totalNutrients?.CHOCDF?.quantity)} grams,{" "}
            {Math.round(nutritionalInfo?.totalDaily?.CHOCDF?.quantity)}%
          </p>

          <p>
            Protein: {Math.round(nutritionalInfo?.totalNutrients?.PROCNT?.quantity)} grams,{" "}
            {Math.round(nutritionalInfo?.totalDaily?.PROCNT?.quantity)}%
          </p>
        </div>
      </div>
    </div>
  );
}
