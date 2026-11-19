class Solution {
    /**
     * @param {string} beginWord
     * @param {string} endWord
     * @param {string[]} wordList
     * @return {number}
     */
    ladderLength(beginWord: string, endWord: string, wordList: string[]): number {
        if (!wordList.includes(endWord) || beginWord === endWord) {
            return 0;
        }

        const nei = {};
        wordList.push(beginWord);

        for (let word of wordList) {
            for (let j = 0; j < word.length; j++) {
                const pattern = word.substring(0, j) + "*" + word.substring(j + 1);
                if (!nei[pattern]) {
                    nei[pattern] = [];
                }
                nei[pattern].push(word);
            }
        }

        const visit = new Set([beginWord]);
        const q = [beginWord];
        let res = 1;
        let front = 0;

        while (q.length > front) {
            const qLen = q.length - front;
            for (let i = 0; i < qLen; i++) {
                const word = q[front++];
                if (word === endWord) {
                    return res;
                }

                for (let j = 0; j < word.length; j++) {
                    const pattern = word.substring(0, j) + "*" + word.substring(j + 1);

                    for(let neiWord of nei[pattern]){
                        if(!visit.has(neiWord)){
                            visit.add(neiWord)
                            q.push(neiWord)
                        }
                    }
                }
            }

            res += 1;
        }

        return 0
    }
}
