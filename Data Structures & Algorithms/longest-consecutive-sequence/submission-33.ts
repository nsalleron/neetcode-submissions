class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums: number[]): number {
        let res = 0
        const numSet = new Set(nums)

        for(let num of numSet.values()){
            const previousNumber = num - 1

            if(numSet.has(previousNumber)){
                continue
            }
            let currentRes = 1
            let nextValue = num + 1
            while(numSet.has(nextValue)){
                currentRes += 1
                nextValue += 1

                
                
            }
            if(currentRes > res){
                    res = currentRes
                }

        }

        return res

    }
}
