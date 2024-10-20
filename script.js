const arr = [1, 2, 3, 4, 1, 0, 2, 2];

const divide = (arr, n) => {
  // Write your code here
	if (sum + arr[i] > n) {

      arrList.push(currentList);
      currentList = [];
      sum = 0;
    }
	
    currentList.push(arr[i]);
    sum += arr[i];
  }


  if (currentList.length > 0) {
    arrList.push(currentList);
  }

  return arrList;
};

const n = prompt("Enter n: "); 
alert(JSON.stringify(divide(arr, n)));
