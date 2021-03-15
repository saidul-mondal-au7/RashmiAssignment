// Problem 1:
// Input - fw0fs0bta0
// Output - fwafstb000
// Logic - Replace 0 with the last available character in the String, until all 0s are on the right and there are no characters 
// available on the right side.

// Javascript solution

const replace0 =(str) => {
    let arr = [...str]
     for(let i = arr.length; i >= 0; i--){
          if(arr[i] === '0'){    
              arr.splice(i, 1)
              arr.push('0')
          }
      }
      return arr.join('')
  }

const string = "fw0fs0bta0"
console.log(replace0(string))