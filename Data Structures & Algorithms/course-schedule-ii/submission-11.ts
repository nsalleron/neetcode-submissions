class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {number[]}
     */
    findOrder(numCourses: number, prerequisites: number[][]): number[] {
        const preMap = {}
        for(let [crs, dest] of prerequisites){
            if(!preMap[crs]){
                preMap[crs] = []
            }
            preMap[crs].push(dest)
        }

        const visited = new Set()
        const cycle = new Set()
        const res = [];

        const dfs = (crs) => {
            if(cycle.has(crs)){
                return false
            }

            if(visited.has(crs)){
                return true
            }

            cycle.add(crs)

            for(let nei of (preMap[crs] ?? [])){
                if(!dfs(nei)){
                    return false
                }
            }
            cycle.delete(crs)
            visited.add(crs)
            res.push(crs)

            
            return true
        };

        for (let i = 0; i < numCourses; i++) {
            if (!dfs(i)) {
                return []
            }
        }

        return res;
    }
}
