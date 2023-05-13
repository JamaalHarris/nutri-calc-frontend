export function FavoritesShow(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onUpdateFavorite(props.favorite.id, params, () => event.target.reset());
  };
  const handleClick = () => {
    props.onDestroyFavorite(props.favorite);
  };

  return (
    <div>
      <h1>Favorites Info</h1>
      <p>Name: {props.favorite.favorited_item}</p>
      <p>Quantity: {props.favorite.quantity}</p>
      <form onSubmit={handleSubmit}>
        <div>
          Name: <input defaultValue={props.favorite.favorited_item} name="name" type="text" />
        </div>
        <div>
          Quantity: <input defaultValue={props.favorite.quantity} name="quantity" type="text" />
        </div>
        <button type="submit">Update Favorite</button>
      </form>
      <button onClick={handleClick}>Destroy Favorite</button>
    </div>
  );
}
