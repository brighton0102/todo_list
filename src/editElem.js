export default function editElem(items, index, newValue) {
  if (index >= 0 && index < items.length) {
    items[index].description = newValue;
  }
  return items;
}
