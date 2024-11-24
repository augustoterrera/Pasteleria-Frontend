import api from "../api";

export const getInventory = async () =>{
    try {
        const response = await api.get('/get/inventory')
        return response.data
    } catch (error) {
        console.error('Error fetching inventory: ', error);        
    }
} 

export const addInventory = async(data)=>{
    try {
        const response = await api.post('/add/inventory', data)
        return response.data
    } catch (error) {
        console.error('Error posting inventory: ', error);        
    }
}

export const updateInventory= async (id,data)=>{
    try {
        const response = await api.put(`/update/inventory/${id}`, data)
        return response.data
    } catch (error) {
        console.error('Error updating inventory: ', error);
    }
}
export const deleteInventory = async(id)=>{
    try {
        const response = await api.delete(`/delete/inventory/${id}`);
        return response.data;
    } catch (error) {
        console.error('Error deleting inventory: ', error);
    }
}