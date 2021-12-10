function merge(A, leftIndex, midIndex, rightIndex) {
	let temp = [];
	let i = leftIndex, j = midIndex + 1, k = 0;
 
	while(i <= midIndex && j <= rightIndex) {
		if(A[i] <= A[j]) {
			temp[k++] = A[i++];
		}
		else {
			temp[k++] = A[j++];
		}
	}
 
	while(i <= midIndex) {
		temp[k++] = A[i++];
	}
 
	while(j <= rightIndex) {
		temp[k++] = A[j++];
	}
 
	for(i = leftIndex; i <= rightIndex; i++) {
		A[i] = temp[i - leftIndex];
	}
}
 
function mergeSort(A, leftIndex, rightIndex) {
	if(leftIndex < rightIndex) {
		let midIndex = Math.floor((leftIndex + rightIndex) / 2);
		mergeSort(A, leftIndex, midIndex);
		mergeSort(A, midIndex + 1, rightIndex);
		merge(A, leftIndex, midIndex, rightIndex);
	}
}
 
A = [38, 27, 43, 3, 9, 82, 10];
mergeSort(A, 0, A.length - 1);
console.log(A);