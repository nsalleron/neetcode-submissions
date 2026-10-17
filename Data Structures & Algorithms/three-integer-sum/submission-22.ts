class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums: number[]): number[][] {
        let res = []
        let sortedNums = nums.sort((a,b) => a - b)

        for(let a = 0; a < sortedNums.length; a++){
           if(a > 0 && sortedNums[a] === sortedNums[a-1]){
                continue
           }

           let b = a + 1
           let c = sortedNums.length - 1
            while (b < c){
                const value = sortedNums[a] + sortedNums[b] + sortedNums[c]

                if(value === 0){
                    res.push([sortedNums[a], sortedNums[b], sortedNums[c]])
                    b++
                    while(sortedNums[b] === sortedNums[b-1]){
                        b++
                    }
                } else if(value > 0){
                    c--
                } else {
                    b++
                }
            }
        }

        return res
    }
}
