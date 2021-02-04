import React, { useState, useEffect } from 'react';
import { ReactComponent as Star } from './../../assets/Star.svg';

export const FavoriteBtn = ({ project }) => {
  const [favorites, setFavorites] = useState([]);

  const getDataFromStorage = () =>
    localStorage.getItem('favorites')
      ? JSON.parse(localStorage.getItem('favorites'))
      : [];

  useEffect(() => {
    const data = localStorage.getItem('favorites')
      ? JSON.parse(localStorage.getItem('favorites'))
      : [];
    setFavorites(data);
  }, []);

  const addToFavorites = () => {
    const newFavorites = [
      ...favorites,
      {
        id: project.id,
        preview: project.preview,
        likes: project.likes,
        title: project.title,
        createdAt: project.createdAt,
      },
    ];
    localStorage.setItem('favorites', JSON.stringify(newFavorites));
    setFavorites(newFavorites);
  };

  const removeFromFavorites = (id) => {
    const newFavorites = favorites.filter((project) => project.id === id);
    localStorage.setItem('favorites', JSON.stringify(newFavorites));
    setFavorites(newFavorites);
  };

  const onClickHandler = () => {
    favorites.some((favoriteProject) => favoriteProject.id === project.id)
      ? removeFromFavorites(project.id)
      : addToFavorites();
  };
  return <Star onClick={onClickHandler} />;
};
