class Solution {
    /**
     * @param {number[]} stones
     * @return {number}
     */
    lastStoneWeight(stones: number[]): number {
        const maxHeap = new MaxPriorityQueue()

        stones.forEach((e) => maxHeap.enqueue(e))

        while(maxHeap.size() > 1){
            const a = maxHeap.dequeue()
            const b = maxHeap.dequeue()

            const newStone = Math.abs(a - b)
            if(newStone !== 0){
                maxHeap.enqueue(newStone)
            }
        }

        return maxHeap.front() ?? 0
    }
}
