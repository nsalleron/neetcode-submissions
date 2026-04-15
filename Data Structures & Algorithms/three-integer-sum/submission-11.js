class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        const sorted = nums.sort((a, b) => a - b)
        const res = []

        for(let i = 0; i < sorted.length - 2; i++){
            if (i > 0 && sorted[i] === sorted[i - 1]) continue; // On ne veut pas refaire une boucle si le resultat est le meme
            const num = sorted[i]
            let j = i + 1
            let k = sorted.length - 1
            
            while(j < k){
                let numJ = sorted[j]
                let numK = sorted[k]
                
                const result = num + numJ + numK
                if(result === 0){
                    res.push([num, numJ, numK])
                    while (j < k && sorted[j] === sorted[j + 1]) j++; // On ne veut pas refaire une boucle si le resultat est le meme
                    while (j < k && sorted[k] === sorted[k - 1]) k--; // On ne veut pas refaire une boucle si le resultat est le meme
                    j++;
                    k--;
                } else if (result < 0) {
                    j++
                } else {
                    k--
                }
            }

        }
        
        return res
    }
}