function ItemCard({ item, onEdit, onDelete }) {
    return (
        <div
            style={{
                border: '1px solid #ccc',
                padding: '12px',
                marginBottom: '10px',
                borderRadius: '6px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
            }}
        >
            <div>
                <strong>{item.name}</strong> — Qty: {item.quantity} | $
                {item.price.toFixed(2)}
            </div>
            <div>
                <button onClick={() => onEdit(item)} style={{ marginRight: '8px' }}>
                    Edit
                </button>
                <button onClick={() => onDelete(item._id)}>Delete</button>
            </div>
        </div>
    );
}

export default ItemCard;