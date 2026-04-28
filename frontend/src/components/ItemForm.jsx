import { useState, useEffect } from 'react';

function ItemForm({ onSubmit, editingItem, onCancel }) {
    const [formData, setFormData] = useState({
        name: '',
        quantity: '',
        price: '',
    });

    useEffect(() => {
        if (editingItem) {
            setFormData({
                name: editingItem.name,
                quantity: editingItem.quantity,
                price: editingItem.price,
            });
        }
    }, [editingItem]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: name === 'quantity' || name === 'price' ? Number(value) : value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
        setFormData({ name: '', quantity: '', price: '' });
    };

    return (
        <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
            <input
                name="name"
                placeholder="Item name"
                value={formData.name}
                onChange={handleChange}
                required
                style={{ display: 'block', marginBottom: '8px', padding: '8px', width: '100%' }}
            />
            <input
                name="quantity"
                type="number"
                placeholder="Quantity"
                value={formData.quantity}
                onChange={handleChange}
                required
                style={{ display: 'block', marginBottom: '8px', padding: '8px', width: '100%' }}
            />
            <input
                name="price"
                type="number"
                step="0.01"
                placeholder="Price"
                value={formData.price}
                onChange={handleChange}
                required
                style={{ display: 'block', marginBottom: '8px', padding: '8px', width: '100%' }}
            />
            <button type="submit" style={{ marginRight: '8px', padding: '8px 16px' }}>
                {editingItem ? 'Update Item' : 'Add Item'}
            </button>
            {editingItem && (
                <button type="button" onClick={onCancel} style={{ padding: '8px 16px' }}>
                    Cancel
                </button>
            )}
        </form>
    );
}

export default ItemForm;