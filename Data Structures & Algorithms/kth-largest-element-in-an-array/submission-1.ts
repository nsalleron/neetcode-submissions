class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    findKthLargest(nums: number[], k: number): number {
        const minHeap = new MinPriorityQueue()
        for(let num of nums){
            minHeap.push(num)
            if(minHeap.size() > k){
                minHeap.pop()
            }
        }
        return minHeap.front()

    }
}
