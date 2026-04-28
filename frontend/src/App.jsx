import { useState, useEffect } from 'react';
import axios from 'axios';
import ItemForm from './components/ItemForm';
import ItemList from './components/ItemList';

const API_URL = import.meta.env.VITE_API_URL;

function App() {
  const [items, setItems] = useState([]);
  const [editingItem, setEditingItem] = useState(null);

  const fetchItems = async () => {
    try {
      const res = await axios.get(API_URL);
      setItems(res.data);
    } catch (err) {
      console.error('Error fetching items:', err);
    }
  };

  useEffect(() => {
    fetchItems();
  }, []);

  const handleAddOrUpdate = async (itemData) => {
    try {
      if (editingItem) {
        await axios.put(`${API_URL}/${editingItem._id}`, itemData);
      } else {
        await axios.post(API_URL, itemData);
      }
      setEditingItem(null);
      fetchItems();
    } catch (err) {
      console.error('Error saving item:', err);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      fetchItems();
    } catch (err) {
      console.error('Error deleting item:', err);
    }
  };

  const handleEdit = (item) => {
    setEditingItem(item);
  };

  return (
      <div style={{ maxWidth: '600px', margin: '0 auto', padding: '20px' }}>
        <h1>Item Manager</h1>
        <ItemForm
            onSubmit={handleAddOrUpdate}
            editingItem={editingItem}
            onCancel={() => setEditingItem(null)}
        />
        <ItemList
            items={items}
            onEdit={handleEdit}
            onDelete={handleDelete}
        />
      </div>
  );
}

export default App;