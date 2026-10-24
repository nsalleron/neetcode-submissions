class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number}
     */
    findMedianSortedArrays(nums1: number[], nums2: number[]): number {
        let numsA = nums1
        let numsB = nums2

        if(numsB.length < numsA.length ){
            const temp = numsA
            numsA = numsB
            numsB = temp
        }
        const total = numsA.length + numsB.length
        const half = Math.floor(total / 2)

        let l = 0
        let r = numsA.length
        while(l <= r){
            const m = Math.floor((l+r)/2)
            const j = half - m

            let aLeft = m > 0 ? numsA[m-1] : Number.NEGATIVE_INFINITY
            let aRight = m < numsA.length ? numsA[m] : Number.POSITIVE_INFINITY
            let bLeft = j > 0 ? numsB[j-1]: Number.NEGATIVE_INFINITY
            let bRight = j < numsB.length ? numsB[j] : Number.POSITIVE_INFINITY

            console.log({aLeft, ["m-1"]:m-1, bRight, aRight, bLeft})
            if(aLeft <= bRight && aRight >= bLeft){
                if(total % 2 !== 0 ){
                    return Math.min(aRight, bRight)
                }

                return (Math.max(aLeft,bLeft) + Math.min(aRight, bRight))/2
            } else {
                if(aRight < bLeft){
                    l = m + 1
                } else {
                    r = m - 1

                }
            }
        }


        throw new Error("You can't see me mate")
    }
}
