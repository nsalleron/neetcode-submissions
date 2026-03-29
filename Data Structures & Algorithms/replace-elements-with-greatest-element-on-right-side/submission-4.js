class Solution {
    /**
     * @param {number[]} arr
     * @return {number[]}
     */
    replaceElements(arr) {
        let previousMax = 0
        for(let i = arr.length ; i > 0; i--){
            if(arr[i] > previousMax){
                previousMax = arr[i]
            }
           if(arr[i  + 1 ] == undefined){
                arr[i] = -1
           } else {
            arr[i] = Math.max(arr[i + 1], previousMax)
           }
        }
        return arr.splice(1, arr.length)
    }
}
