class Solution {
    /**
     * @param {string[]} operations
     * @return {number}
     */
    calPoints(operations) {
        const stack = [];
        let res = 0;
        for (const op of operations) {
            switch(op){
                case "+":
                const top = stack.pop()
                const newTop = top + stack[stack.length - 1]
                stack.push(top)
                stack.push(newTop)
                res += newTop
                    break;
                case "C":
                    res -= stack.pop()
                    break;
                case "D":
                      stack.push(2 * stack[stack.length - 1])
                      res += stack[stack.length - 1]
                    break;
                default: 
                    stack.push(parseInt(op))
                    res += stack[stack.length - 1]
            }
        }

        return res
    }
}
