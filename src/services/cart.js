import apiFetch from "./apiFetch";

export const addToCart = ({plantId, quantity, potColor}) =>
    apiFetch("POST", `/cart/plants/${plantId}`, {
        quantity: quantity,
        pot_color: potColor
    })

export const getCart = () =>
    apiFetch("GET", "/cart")

export const removeItemFromCart = (id) =>
    apiFetch("DELETE", `/cart/${id}`)
