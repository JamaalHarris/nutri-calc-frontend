export function EdamamResults(props) {
  return (
    <div className="card">
      <h3>Nutritional Info</h3>
      <p>grams and daily percentage</p>
      <div className="card-detail">
        <p>Calories: {props.nutritionalInfo.calories}</p>
        {/* the question marks force the program to check to see if what comes next exists. its called the optional chaining operator */}
        <p>
          Total Daily Fat: {Math.round(props.nutritionalInfo?.totalNutrients?.FAT?.quantity)} grams,{" "}
          {Math.round(props.nutritionalInfo?.totalDaily?.FAT?.quantity)}%
        </p>

        <p>
          Cholesterol: {Math.round(props.nutritionalInfo?.totalNutrients?.CHOLE?.quantity)} grams,{" "}
          {Math.round(props.nutritionalInfo?.totalDaily?.CHOLE?.quantity)}%
        </p>

        <p>
          Sodium: {Math.round(props.nutritionalInfo?.totalNutrients?.NA?.quantity)} grams,{" "}
          {Math.round(props.nutritionalInfo?.totalDaily?.NA?.quantity)}%
        </p>

        <p>
          Carbohydrates: {Math.round(props.nutritionalInfo?.totalNutrients?.CHOCDF?.quantity)} grams,{" "}
          {Math.round(props.nutritionalInfo?.totalDaily?.CHOCDF?.quantity)}%{" "}
        </p>
        <p>Total Sugar: {Math.round(props.nutritionalInfo?.totalNutrients?.SUGAR?.quantity)} grams</p>

        <p>
          Protein: {Math.round(props.nutritionalInfo?.totalNutrients?.PROCNT?.quantity)} grams,{" "}
          {Math.round(props.nutritionalInfo?.totalDaily?.PROCNT?.quantity)}%
        </p>
      </div>
    </div>
  );
}
