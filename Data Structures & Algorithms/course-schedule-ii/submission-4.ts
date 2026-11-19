class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {number[]}
     */
    findOrder(numCourses: number, prerequisites: number[][]): number[] {
        const preMap = new Map<number, number[]>()

        for(let [crs, pre] of prerequisites){
            const array = preMap.get(crs) ?? [] 
            array.push(pre)
            preMap.set(crs, array)
        }

        const output = []
        const visited = new Set()
        const cycle = new Set()

        const dfs = (crs) => {
            if(cycle.has(crs)){
                return false
            }

            if(visited.has(crs)){
                return true 
            }

            cycle.add(crs)
            for(let pre of preMap.get(crs) || []){
                if(!dfs(pre)){
                    return false
                }
            }

            cycle.delete(crs)
            visited.add(crs)
            output.push(crs)
            return true
        }

        for(let n = 0; n < numCourses; n++){
            if(!dfs(n)){
                return []
            }
        }

        return output
    }
}
