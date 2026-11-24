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
        
        const dfs = (crs) => {
            if(visited.has(crs)){
                return false
            }

            visited.add(crs)

            for(let nei of (adj[crs] ?? [])){
                if(!dfs(nei)){
                    return false
                }
            }

            adj[crs] = []
            visited.delete(crs)

            return true
        }

        for(let i = 0; i < numCourses; i++){
            if(!dfs(i)){
                return false
            }
        }

        return true
    }
}
