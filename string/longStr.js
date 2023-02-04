/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let arrOfStr = s.split("");
    let countofStr = 0;
    for(let i=0;i < arrOfStr.length; i++){
        let subArr = [];
        for(let j=i+1;j < arrOfStr.length; j++){
            if(subArr.indexOf(arrOfStr[j])!==-1){
                if(countofStr < subArr.length){
                    countofStr = subArr.length;
                }
                break;
            }
            subArr.push(arrOfStr[j]);
        }
    }
    return countofStr;
};

console.log(lengthOfLongestSubstring(" "))