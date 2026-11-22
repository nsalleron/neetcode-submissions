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

        const visited = new Set()
        const cycle = new Set()
        const output = []

        const dfs = (crs: number) => {
            if(cycle.has(crs)){
                return false
            }

            if(visited.has(crs)){
                return true
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


        for(let i = 0; i < numCourses; i++){
            if(!dfs(i)){
                return []
            }
        }
        return output

    }
}
