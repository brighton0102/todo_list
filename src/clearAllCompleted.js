export default function clearAllCompleted(items) {
  const remainingItems = items.filter((item) => !item.completed);
  return remainingItems;
}
