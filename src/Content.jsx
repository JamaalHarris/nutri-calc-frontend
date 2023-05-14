import { Signup } from "./Signup";
import { Login } from "./Login";
import { FavoritesIndex } from "./FavoritesIndex";
import { FavoritesNew } from "./FavoritesNew";
import { FavoritesShow } from "./FavoritesShow";
import { EdamamSearch } from "./EdamamSearch";
import axios from "axios";
import { useState, useEffect } from "react";
import { Modal } from "./Modal";
import "./index.css";

export function Content() {
  const [favorites, setFavorites] = useState([]);
  const [isFavoritesShowVisible, setIsFavoritesShowVisible] = useState(false);
  const [currentFavorite, setCurrentFavorite] = useState({});

  const handleIndexFavorites = () => {
    console.log("handleIndexFavorites");
    axios.get("http://localhost:3000/favorites.json").then((response) => {
      console.log(response.data);
      setFavorites(response.data);
    });
  };

  const handleCreateFavorite = (params) => {
    console.log("handleCreateFavorite", params);
    axios.post("http://localhost:3000/favorites.json ", params).then((response) => {
      console.log(response);
      setFavorites([...favorites, response.data]);
    });
  };

  const handleShowFavorite = (favorite) => {
    console.log("handleShowFavorite", favorite);
    setIsFavoritesShowVisible(true);
    setCurrentFavorite(favorite);
  };

  const handleClose = () => {
    console.log("handleClose");
    setIsFavoritesShowVisible(false);
  };

  const handleUpdateFavorite = (id, params, successCallback) => {
    console.log("handleUpdateFavorite", params);
    axios.patch(`http://localhost:3000/favorites/${id}.json`, params).then((response) => {
      setFavorites(
        favorites.map((favorite) => {
          if (favorite.id === response.data.id) {
            return response.data;
          } else {
            return favorite;
          }
        })
      );
      successCallback();
      handleClose();
    });
  };

  const handleDestroyFavorite = (favorite) => {
    console.log("handleDestroyFavorite", favorite);
    axios.delete(`http://localhost:3000/favorites/${favorite.id}.json`).then((response) => {
      setFavorites(favorites.filter((f) => f.id !== favorite.id));
      handleClose();
    });
  };

  useEffect(handleIndexFavorites, []);
  return (
    <div className="content-body">
      <h1 className="container text-center">Nutri-Calc: The Nutritional Calculator</h1>
      <Signup />
      <Login />
      <EdamamSearch />
      <FavoritesIndex favorites={favorites} onShowFavorite={handleShowFavorite} />
      <FavoritesNew onCreateFavorite={handleCreateFavorite} />
      <Modal show={isFavoritesShowVisible} onClose={handleClose}>
        <FavoritesShow
          favorite={currentFavorite}
          onUpdateFavorite={handleUpdateFavorite}
          onDestroyFavorite={handleDestroyFavorite}
        />
      </Modal>
    </div>
  );
}
