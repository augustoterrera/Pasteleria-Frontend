import api from "../api";

export const getMothlySales = async()=>{
    try {
        const response = await api.get('/dashboard/monthlysales')
        return response.data
    } catch (error) {
        console.log('Error: ' + error);
    }
}

export const getWeeklySales = async()=>{
    try {
        const response = await api.get('/dashboard/weeklysales');
        return response.data;
    } catch (error) {
        console.log('Error: '+ error);
    }
}
export const getTopProducts = async()=>{
    try {
        const response = await api.get('/dashboard/toproducts');
        return response.data;
    } catch (error) {
        console.log('Error: ' + error);
    }
}
export const getSalesTrends = async()=>{
    try {
        const response = await api.get('/dashboard/salestrends');
        return response.data;
    } catch (error) {
        console.log('Error: ' + error);
    }
}
export const getPaymentMethods = async()=>{
    try {
        const response = await api.get('/dashboard/paymentmethods')
        return response.data;
    } catch (error) {
        console.log('Error: ' + error);
    }
}
export const getavgProduct = async()=>{
    try {
        const response = await api.get('/dashboard/avgproduct')
        return response.data;
    } catch (error) {
        console.log('Error: ' + error)
    }
}
export const getMarginProduct = async()=>{
    try {
        const response = await api.get('/dashboard/avgmargin')
        return response.data;
    } catch (error) {
        console.log('Error: ' + error)
    }
}
export const getLowStock = async()=>{
    try {
        const response = await api.get('/dashboard/lowproduct');
        return response.data;
    } catch (error) {
        console.log('Error: ' + error);
    }
}
export const getCategoryDistribution = async()=>{
    try {
        const response = await api.get('/dashboard/categorydistribution');
        return response.data;
    } catch (error) {
        console.log('Error: ' + error);
    }
}
export const getTopSuppliers = async()=>{
    try {
        const response = await api.get('/dashboard/topsuppliers');
        return response.data;
    } catch (error) {
        console.log('Error: ' + error);
    }
}

