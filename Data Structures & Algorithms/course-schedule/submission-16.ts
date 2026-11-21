class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {boolean}
     */
    canFinish(numCourses: number, prerequisites: number[][]): boolean {
        
        const adj = {}
        for(let [crs, pre] of prerequisites){
            if(!adj[crs]){
                adj[crs] = []
            }
            adj[crs].push(pre)
        }

        const visited = new Set()

        const dfs = (crs: number) => {
            if(visited.has(crs)){
                return false
            }
            if((adj[crs] ?? []).length === 0){
                return true
            }
            visited.add(crs)
            for(let pre of (adj[crs] ?? [])){
                if(!dfs(pre)){
                    return false
                }
            }
            visited.delete(crs)
            adj[crs] = []
            return true
        }
       
        for (let c = 0; c < numCourses; c++) {
            if (!dfs(c)) return false
        }
        return true
    }
}
