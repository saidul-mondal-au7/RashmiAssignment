// Problem 2:
// Inputs - a = [1,2,3] and k = 5
// Output - [1],[2],[3],[1,2],[2,3]
// Logic - Find all subarrays within the array whose sum is less than or equal to k

// Javascript solution

const subarrays = (arr, k) => {
	const sum = arr => arr.reduce((a,b) => a + b)
  const rs = []
  for (let i = 0; i< arr.length; i++) {
    const tmp = []
    for (let j=i; j<arr.length; j++ ) {
      tmp.push(arr[j])
      if(sum(tmp) <= k) rs.push([...tmp])
    }
  }
  return rs
}

const arr = [1,2,3];
const k = 5;

console.log(subarrays(arr, k))
