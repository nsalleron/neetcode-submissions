class Solution {
    /**
     * @param {string[]} operations
     * @return {number}
     */
    calPoints(operations) {
        const record = []
        for(let i = 0; i < operations.length ; i++){
            let op = operations[i]

            switch(op){
                case "+":
                    record.push(record[record.length - 1] + record[record.length - 2]);
                    
                    break;
                case "C":
                    record.pop()
                    break;
                case "D":
                      record.push(record[record.length - 1] * 2);
                    break;
                default: 
                    record.push(parseInt(op))
            }
        }

        return record.reduce((a, b) => a + b, 0);
    }
}
