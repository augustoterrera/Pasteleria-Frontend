import api from '../api';

export const getProducts = async()=>{
    try {
        const response = await api.get('/get/products');
        return response.data;
    } catch (error) {
        console.error('Error fetching products');
    }
} 
export const addProduct = async (data)=>{
    try {
        const response = await api.post('/add/products', data);
        return response.data
    } catch (error) {
        console.error('Error adding products: ', error);        
    }
}
export const updateProduct = async(id,data)=>{
    try {
        const response = await api.put(`/update/product/${id}`, data);
        return response.data
    } catch (error) {
        console.error('Error updating products: ', error);
    }
}
export const deleteProduct = async(id)=>{
    try {
        const response = await api.delete(`/delete/product/${id}`);
        return response.data
    } catch (error) {
        console.error('Error deleting product: ', error);
    }
}