class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {number[]}
     */
    findOrder(numCourses: number, prerequisites: number[][]): number[] {
        const adj = {}
        for(let [crs, pre] of prerequisites){
            if(!adj[crs]){
                adj[crs] = []
            }
            adj[crs].push(pre)
        }

        const visited = new Set()
        const cycle = new Set()
        const output = []

        const dfs = (crs: number) => {
            if(crs === numCourses){
                output.push(crs)
                return true
            }

            if(visited.has(crs)){
                return true
            }
        
            if(cycle.has(crs)){
                return false
            }

            cycle.add(crs)

            for(let nei of (adj[crs] ?? [])){
                if(!dfs(nei)){
                    return false
                }
            }

            visited.add(crs)
            cycle.delete(crs)
            output.push(crs)

            return true
        }


        for(let i = 0; i < numCourses; i ++){
            if(!dfs(i)){
                return []
            }
        }

        return output
    }
}
