/**
 * Definition of Interval:
 * class Interval  {
 *   constructor(start, end) {
 *     this.start = start;
 *     this.end = end;
 *   }
 * }
 */

class Solution {
    /**
     * @param {Interval[]} intervals
     * @returns {number}
     */
    minMeetingRooms(intervals: Interval[]): number {
        if(intervals.length === 0) return 0
        intervals = intervals.sort((a, b) => a.start - b.start)
        const minHeap = new MinPriorityQueue()

        minHeap.enqueue(intervals[0].end)

        for(let i = 1; i < intervals.length; i++){
            const previousEnd = minHeap.front()
            if(previousEnd > intervals[i].start){
                minHeap.enqueue(intervals[i].end)
            } else {
                minHeap.dequeue()
                minHeap.enqueue(intervals[i].end)
            }
        }
        return minHeap.size()
    }
}
