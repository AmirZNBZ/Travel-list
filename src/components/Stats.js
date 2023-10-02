export default function Stats({ items }) {
  if (!items.length)
    return (
      <footer className="stats">
        <em>Start Adding Some Item !</em>
      </footer>
    );

  const numPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((numPacked / items.length) * 100);

  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "You got everything! Lets Go!"
          : `You Have ${items.length} item on your list, and you already Packed
          ${numPacked} (${numPacked ? percentage : 0}%)`}
      </em>
    </footer>
  );
}
