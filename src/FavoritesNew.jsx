export function FavoritesNew(props) {
  const handleSubmit = (event) => {
    console.log("handleSubmit");
    event.preventDefault();
    const params = new FormData(event.target);
    props.onCreateFavorite(params);
  };
  return (
    <div className="container text-center">
      <h3> Add Favorites to save for later! </h3>
      <form onSubmit={handleSubmit}>
        <div>
          <input placeholder="Favorited Item" name="favorited_item" type="text" />
        </div>
        <div>
          <input placeholder="Quantity" name="quantity" type="text" />
        </div>
        <button className="btn btn-outline-secondary btn-lg" type="submit">
          Create Favorite
        </button>
      </form>
    </div>
  );
}
