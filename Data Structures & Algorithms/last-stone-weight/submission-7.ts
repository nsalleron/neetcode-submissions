class Solution {
    /**
     * @param {number[]} stones
     * @return {number}
     */
    lastStoneWeight(stones: number[]): number {
        const mapHeap = new MaxPriorityQueue()

        stones.forEach((e) => mapHeap.enqueue(e))

        while(mapHeap.size() > 1){
            const stoneA = mapHeap.dequeue()
            const stoneB = mapHeap.dequeue()

            const smash = Math.abs(stoneA - stoneB)

            if(smash != 0){
                mapHeap.enqueue(smash)
            }
        }

        return mapHeap.front() ?? 0
    }
}
