export default function Stats({ items }) {
  if (!items.length)
    return (
      <p className="stats">
        <em>Start adding item to your packing list! 🚀 </em>
      </p>
    );

  const numOfItems = items.length;
  const numOfPackedItems = items.filter((item) => item.packed).length;
  const percentage = Math.round((numOfPackedItems / numOfItems) * 100);
  return (
    <footer className="stats">
      <em>
        {percentage < 100
          ? ` 💼 You Have ${numOfItems} items on your list and you packed ${" "}
        ${numOfPackedItems} item (${percentage}
        %)`
          : "You Got Everything! Ready to go ✈️"}
      </em>
    </footer>
  );
}
