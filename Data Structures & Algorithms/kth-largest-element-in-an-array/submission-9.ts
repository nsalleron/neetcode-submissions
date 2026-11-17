class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    findKthLargest(nums: number[], k: number): number {
        const heap = new MinPriorityQueue()

        for(let c of nums){
            heap.enqueue(c)
            if(heap.size() > k){
                heap.dequeue()
            }
        }

        // console.log(heap.toArray())

        return heap.dequeue()
    }
}
