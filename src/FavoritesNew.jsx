export function FavoritesNew(props) {
  const handleSubmit = (event) => {
    console.log("handleSubmit");
    event.preventDefault();
    const params = new FormData(event.target);
    props.onCreateFavorite(params);
  };
  return (
    <div>
      <p>Add Favorites to save for later!</p>
      <form onSubmit={handleSubmit}>
        <div>
          Favorited Item: <input name="favorited_item" type="text" />
        </div>
        <div>
          Quantity: <input name="quantity" type="text" />
        </div>
        <button className="btn btn-primary" type="submit">
          Create Favorite
        </button>
      </form>
    </div>
  );
}
