//const { MaxPriorityQueue } = require('@datastructures-js/priority-queue');

class Solution {
    /**
     * @param {number[]} stones
     * @return {number}
     */
    lastStoneWeight(stones: number[]): number {
        while(stones.length > 1){
            stones.sort((a, b) => b - a);
            const x = stones.shift();
            const y = stones.shift();
            if(x !== y) stones.push(x - y);
        }
        return stones.length ? stones[0] : 0;
    }
}
