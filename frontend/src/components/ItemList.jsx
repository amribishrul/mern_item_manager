import ItemCard from './ItemCard.jsx';

function ItemList({ items, onEdit, onDelete }) {
    return (
        <div>
            <h2>Items ({items.length})</h2>
            {items.length === 0 ? (
                <p>No items yet. Add one above.</p>
            ) : (
                items.map((item) => (
                    <ItemCard key={item._id} item={item} onEdit={onEdit} onDelete={onDelete} />
                ))
            )}
        </div>
    );
}

export default ItemList;