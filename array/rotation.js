//Write a function rotate(ar[], d, n) that rotates arr[] of size n by d elements

let setOfData = [1, 2, 3, 4, 5, 6, 7,8,9];
let n = setOfData.length;
let d = 6;


// simple method
//console.log("setOfData = ",setOfData);
//console.log("n = ",n);
//console.log("d = ",d);
//for(let i=0; i<d; i++){
//	let tempVal = setOfData[0];
//	for(let j=0;j<n-1;j++){
//		setOfData[j] = setOfData[j+1];
//	}
//	setOfData[n-1] = tempVal;
//}

//console.log("Result = ",setOfData);

//-------------------------------------------

// without using extra loop

console.log("setOfData = ",setOfData);
console.log("n = ",n);
console.log("d = ",d);
for(let i=0; i<d; i++){
	let tempVal = setOfData[i];
	setOfData[i] = setOfData[n-d+i];
	setOfData[n-d+i] = tempVal;
}

console.log("Result = ",setOfData);