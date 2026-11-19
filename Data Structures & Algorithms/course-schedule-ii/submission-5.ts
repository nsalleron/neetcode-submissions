class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {number[]}
     */
    findOrder(numCourses: number, prerequisites: number[][]): number[] {
        const adj = Array.from({length: numCourses}, () => [])
        for(let [crs, pre] of prerequisites){
            adj[crs].push(pre)
        }

        const output = []
        const cycle = new Set()
        const visited = new Set()

        const dfs = (crs) => {
            if(visited.has(crs)){
                return true
            }
            if(cycle.has(crs)){
                return false
            }

            cycle.add(crs)

            for(let nei of adj[crs]){
                if(!dfs(nei)){
                    return false
                }
            }

            cycle.delete(crs)
            visited.add(crs)
            output.push(crs)

            return true
        }

        for(let crs = 0; crs < numCourses; crs++){
            if(!dfs(crs)){
                return []
            }
        }

        return output

    }
}
