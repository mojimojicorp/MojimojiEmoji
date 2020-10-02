export default function removeDuplicate(array) {
  return array.reduce((acc, current) => {
    const x = acc.find((item) => item.name === current.name);
    if (!x) {
      return acc.concat([current]);
    }
    return acc;
  }, []);
}
