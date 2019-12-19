export function arrayMove(originalArray, fromIndex, toIndex) {
  const arr = originalArray.slice(0);
  const value = arr[fromIndex];
  arr.splice(fromIndex, 1);
  arr.splice(toIndex, 0, value);
  return arr;
}

export function getRoundRobinIndex(index: number, total: number): number {
  return (index + total) % total;
}
