import apiFetch from "./apiFetch";

export const addToCart = (quantity, pot_color, plantId) =>
    apiFetch("POST", `cart/plants/${plantId}`, {
        quantity: quantity,
        pot_color: pot_color
    })