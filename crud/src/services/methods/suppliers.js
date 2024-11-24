import api from "../api";

export const getSuppliers = async()=>{
    try {
        const response = await api.get('get/suppliers');
        return response.data
    } catch (error) {
        console.error('Error fetching suppliers: ', error);
    }
}

export const addSupplier = async(data)=>{
    try {
        const response = await api.post('/add/supplier', data);
        return response.data
    } catch (error) {
        console.error('Error adding supplier: ', error);        
    }
}

export const updateSupplier= async(id, data)=>{
    try {
        const response = await api.put(`/update/supplier/${id}`, data);
        return response.data
    } catch (error) {
        console.error('Error updating supplier: ', error);
    }
}
export const deleteSupplier = async(id)=>{
    try {
        const response = await api.delete(`/delete/supplier/${id}`);
        return response.data
    } catch (error) {
        console.error('Error deleting supplier');        
    }
}