import React from "react";
import { useSelector } from "react-redux";
import { selectRestaurants } from "./restaurantsSlice";

export function Restaurant() {
    const restaurants = useSelector(selectRestaurants);
    
    return (
        <div>
        <h1>Restaurant</h1>
        </div>
    );
}
