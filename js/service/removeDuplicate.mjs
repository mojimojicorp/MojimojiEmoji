function removeDuplicate(arr) {
  var tempArr = [];

  for (var i = 0; i < arr.length; i++) {
    if (tempArr.length == 0) {
      tempArr.push(arr[i]);
    } else {
      var duplicatesFlag = true;
      for (var j = 0; j < tempArr.length; j++) {
        if (arr[i].char == null) {
          if (tempArr[j] == arr[i]) {
            duplicatesFlag = false;
            break;
          }
        } else {
          if (tempArr[j].char == arr[i].char) {
            duplicatesFlag = false;
            break;
          }
        }
      }
      if (duplicatesFlag) {
        tempArr.push(arr[i]);
      }
    }
  }
  return tempArr;
}

export default removeDuplicate;
