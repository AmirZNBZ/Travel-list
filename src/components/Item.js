export default function Item({ item, onDeleteItem, handleToggleItem }) {
    return (
      <li>
        <input
          type="checkbox"
          value={item.packed}
          onChange={() => handleToggleItem(item.id)}
        />
        <span style={item.packed ? { textDecoration: "line-through" } : {}}>
          {item.description} {item.quantity}
        </span>
        <button style={{ color: "red" }} onClick={() => onDeleteItem(item.id)}>
          &times;
        </button>
      </li>
    );
  }