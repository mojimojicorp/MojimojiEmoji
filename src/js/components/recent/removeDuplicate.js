export default function removeDuplicate(array) {
  return array.reduce((acc, current) => {
    const isDuplicated = acc.find((item) => item.name === current.name);
    if (!isDuplicated) {
      return acc.concat([current]);
    }
    return acc;
  }, []);
}
