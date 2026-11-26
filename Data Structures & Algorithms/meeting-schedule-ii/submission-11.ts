class Solution {
    minMeetingRooms(intervals) {
        const events = [];
        
        // Crée des événements: start = +1, end = -1
        for (const interval of intervals) {
            events.push([interval.start, 1]);      // meeting commence
            events.push([interval.end, -1]);       // meeting finit
        }
        
        // Trie les événements
        // Important: si même timestamp, les fins (-1) avant les starts (+1)
        events.sort((a, b) => a[0] - b[0] || a[1] - b[1]);
        
        let count = 0;
        let maxRooms = 0;
        
        for (const [time, type] of events) {
            count += type;
            maxRooms = Math.max(maxRooms, count);
        }
        
        return maxRooms;
    }
}