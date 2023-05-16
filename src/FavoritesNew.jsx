export function FavoritesNew(props) {
  const handleSubmit = (event) => {
    console.log("handleSubmit");
    event.preventDefault();
    const params = new FormData(event.target);
    props.onCreateFavorite(params);
  };
  return (
    <div className="container text-center">
      <h1> Add Favorites to save for later! </h1>
      <form onSubmit={handleSubmit}>
        <div>
          <input placeholder="Quantity" name="quantity" type="text" />
        </div>
        <div>
          <input placeholder="Measurement" name="measurement" type="text" />
        </div>
        <div>
          <input placeholder="Item" name="favorited_item" type="text" />
        </div>
        <button className="btn btn-outline-secondary btn-lg" type="submit">
          Create Favorite
        </button>
      </form>
    </div>
  );
}
