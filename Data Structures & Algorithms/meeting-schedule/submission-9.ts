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
     * @returns {boolean}
     */
    canAttendMeetings(intervals: Interval[]): boolean {
        intervals = intervals.sort((a,b) => a.start - b.start)
        for(let i = 0; i < intervals.length; i++){
            if(i > 0 && intervals[i-1].end > intervals[i].start){
                return false
            }
        }

        return true
    }
}
