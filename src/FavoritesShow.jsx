import { useState, useEffect } from "react";
import axios from "axios";
import { EdamamResults } from "./EdamamResults";
export function FavoritesShow(props) {
  const [nutritionalInfo, setNutritionalInfo] = useState({});
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onUpdateFavorite(props.favorite.id, params, () => event.target.reset());
  };
  const handleClick = () => {
    props.onDestroyFavorite(props.favorite);
  };
  const handleShowApi = () => {
    const params = {
      item: props.favorite.favorited_item,
      quantity: props.favorite.quantity,
      measurement: props.favorite.measurement,
    };
    axios.post(`http://localhost:3000/api.json`, params).then((response) => {
      console.log(response.data);
      setNutritionalInfo(response.data);
    });
  };
  useEffect(handleShowApi, []);

  return (
    <div>
      <EdamamResults nutritionalInfo={nutritionalInfo}></EdamamResults>
      <h1>Favorites Info</h1>
      <p>Name: {props.favorite.favorited_item}</p>
      <p>Quantity: {props.favorite.quantity}</p>
      <form onSubmit={handleSubmit}>
        <div>
          Quantity: <input defaultValue={props.favorite.quantity} name="quantity" type="text" />
        </div>
        <div>
          Measurement: <input defaultValue={props.favorite.measurement} name="measurement" type="text" />
        </div>
        <div>
          Name: <input defaultValue={props.favorite.favorited_item} name="name" type="text" />
        </div>
        <button className="text-center m-auto" type="submit">
          Update Favorite
        </button>
      </form>
      <button className="text-center m-auto" onClick={handleClick}>
        Destroy Favorite
      </button>
    </div>
  );
}
