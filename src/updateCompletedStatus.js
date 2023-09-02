export default function updateCompletedStatus(items, index, newStatus) {
  if (index >= 0 && index < items.length) {
    items[index].completed = newStatus;
  }
  return items;
}
