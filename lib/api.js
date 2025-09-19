

export const fetchUsers = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    return res.json();
}


export const fetchProducts = async () => {
    const res = await fetch('https://fakestoreapi.com/products')
    return res.json();
}


export const fetchOnlineProducts = async () => {
    const res = await fetch('https://dummyjson.com/products');
    return res.json();
}