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
// get the gratest common division
function getGcd(a,b){
	if(b==0)
		return a;
	else
		return getGcd(b,a%b);
}

function leftRotate(arr, d, n){
	d = d%n;
	let gcd = getGcd(d,n);
	for(let i =0; i<gcd ;i++){
		let temp = arr[i];
		let j = i;
 
        while (1) {
            let k = j + d;
            if (k >= n)
                k = k - n;
 
            if (k == i)
                break;
 
            arr[j] = arr[k];
            j = k;
        }
        arr[j] = temp;
	}
}

function printArray(arr){
    console.log(arr);
}
leftRotate(setOfData, d, n)
printArray(setOfData)