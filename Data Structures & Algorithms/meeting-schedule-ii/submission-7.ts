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
        const rooms = [intervals[0].end];
        let front = 1;

        

        while (intervals.length > front) {
            const meeting = intervals[front++];
            let isPushed = false;
            for (let i = 0; i < rooms.length; i++) {
                const last = rooms[i];

                if (last <= meeting.start) {
                    rooms[i] = meeting.end
                    isPushed = true;
                    break;
                }
            }

            if (!isPushed) {
                rooms.push(meeting.end);
            }
        }

        return rooms.length;
    }
}
