class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[][]}
     */
    fourSum(nums, target) {
        const sorted = nums.sort((a, b) => a - b)
        const res = []

        for(let a = 0; a < sorted.length - 3 ; a++){
            if(sorted[a] === sorted[a - 1]) continue
            for(let b = a + 1; b < sorted.length - 2; b++) {
                if(b > a + 1 && sorted[b] === sorted[b - 1]) continue
                let c = b + 1
                let d = sorted.length - 1
                while(c < d){
                    const sum = sorted[a] + sorted[b] + sorted[c] + sorted[d]
                    if(sum === target){
                        res.push([sorted[a], sorted[b], sorted[c], sorted[d]])
                        while(c < d && sorted[c] === sorted[c+1]) c++
                        while(c < d && sorted[d] === sorted[d-1]) d--
                        c++
                        d--
                    } else if (sum < target) {
                        c++
                    } else {
                        d--
                    }
                }
            }
        }

        return res
    }
}