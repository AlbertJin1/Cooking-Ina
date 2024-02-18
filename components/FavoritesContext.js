// FavoritesContext.js

import React, { createContext, useContext, useState } from 'react';

const FavoritesContext = createContext();

export const FavoritesProvider = ({ children }) => {
    const [pressedRecipes, setPressedRecipes] = useState([]);

    const toggleFavorite = (recipeName) => {
        setPressedRecipes((prevPressedRecipes) => {
            if (prevPressedRecipes.includes(recipeName)) {
                return prevPressedRecipes.filter((name) => name !== recipeName);
            } else {
                return [...prevPressedRecipes, recipeName];
            }
        });
    };

    return (
        <FavoritesContext.Provider value={{ pressedRecipes, toggleFavorite }}>
            {children}
        </FavoritesContext.Provider>
    );
};

export const useFavorites = () => {
    const context = useContext(FavoritesContext);
    if (!context) {
        throw new Error('useFavorites must be used within a FavoritesProvider');
    }
    return context;
};
