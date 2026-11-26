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
        if (intervals.length === 0) return 0;

        intervals = intervals.sort((a, b) => a.start - b.start);
        let front = 1;
        const minHeap = new MinPriorityQueue();
        minHeap.enqueue(intervals[0].end);

        while (intervals.length > front) {
            const meeting = intervals[front++];
            const freeRoom = minHeap.dequeue();

            let isPushed = false;
            if (freeRoom <= meeting.start) {
                minHeap.enqueue(meeting.end);
                isPushed = true;
            } else {
                minHeap.enqueue(freeRoom)
            }

            if (!isPushed) {
                minHeap.enqueue(meeting.end);
            }
        }

        return minHeap.size();
    }
}
