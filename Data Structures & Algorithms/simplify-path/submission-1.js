class Solution {
    /**
     * @param {string} path
     * @return {string}
     */
    simplifyPath(path) {
        const stack = []
        const paths = path.split('/')

        for(const cur of paths){
            if(cur === '..'){
                stack.pop()
            } else if (cur !== '' && cur !== '.'){
                stack.push(cur)
            }
        }

        return '/' + stack.join('/')
    }
}
