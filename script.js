const arr = [1, 2, 3, 4, 1, 0, 2, 2];

const divide = (arr, n) => {
  // Write your code here
		const arrList = []; 
	  let currentList = [];
	  let sum = 0;
	for (let i = 0; i < arr.length; i++) {
	    if (sum + arr[i] > n) {
	     
	      arrList.push(currentList);
	      currentList = [];
	      sum = 0; 
	    }
	    
	    currentList.push(arr[i]);
	    sum += arr[i];
  }

  if (currentList.length > 0) {
    arrList.push(currentList); // Push the last currentList if it's not empty
  }

  return arrList;



	
};

const n = parseInt(prompt("Enter n: "), 10);
alert(JSON.stringify(divide(arr, n)));
