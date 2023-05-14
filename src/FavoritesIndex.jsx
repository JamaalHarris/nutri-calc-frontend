export function FavoritesIndex(props) {
  return (
    <div className="container text-center">
      <h1>Favorites</h1>
      {props.favorites.map((favorite) => (
        <div key={favorite.id}>
          <h2>{favorite.favorited_item}</h2>
          <p>quantity: {favorite.quantity}</p>
          <button onClick={() => props.onShowFavorite(favorite)}>More info</button>
        </div>
      ))}
    </div>
  );
}
