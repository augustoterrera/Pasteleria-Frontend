import { useState, useEffect } from 'react';
import { getInventory, updateInventory, addInventory, deleteInventory } from '../services/methods/inventory.js';
import { getSuppliers } from '../services/methods/suppliers.js';
import InventoryList from '../components/InventoryList.jsx';

const Inventory = () => {
    const [data, setData] = useState([]);
    const [isFormOpen, setIsFormOpen] = useState(false); 
    const [currentItem, setCurrentItem] = useState(null); 
    const [formPosition, setFormPosition] = useState(null); 
    const [dataSuppliers, setDataSuppliers] = useState(null);

    const fetchingInventory = async () => {
        const inventory = await getInventory();
        console.log(inventory)
        setData(inventory);
    };
    const fetchSuppliers = async ()=>{
        const suppliers = await getSuppliers();
        setDataSuppliers(suppliers)
    }

    useEffect(() => {
        fetchingInventory();
        fetchSuppliers();
    }, []);

    const handleEdit = (item, index) => {
        setCurrentItem(item);
        setIsFormOpen(true);
        setFormPosition(index + 1); 
    };

    const handleAdd = () => {
        setCurrentItem(null);
        setIsFormOpen(true);
        setFormPosition(0); 
    };

    const handleSave = async (item) => {
        console.log("Mando al backend:", item);

        if (item._id) {
            await updateInventory(item._id, item);
        } else {
            await addInventory(item);
        }
        setIsFormOpen(false);
        fetchingInventory();
    };
    const handleDelete=async(id)=>{
        await deleteInventory(id);
        fetchingInventory();
    }

    return (
        <>
            <InventoryList
                data={data}
                onEdit={handleEdit}
                onAdd={handleAdd}
                isFormOpen={isFormOpen}
                formPosition={formPosition}
                currentItem={currentItem}
                onSave={handleSave}
                onCancel={() => setIsFormOpen(false)}
                onDelete={handleDelete}
                suppliers={dataSuppliers}
            />
        </>
    );
};

export default Inventory;
