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

        wordList.push(beginWord);

        const adjList = new Map<string, string[]>();
        for (let word of wordList) {
            for (let i = 0; i < word.length; i++) {
                const newWord = word.slice(0, i) + "*" + word.slice(i + 1);
                if (!adjList.has(newWord)) {
                    adjList.set(newWord, []);
                }
                adjList.get(newWord).push(word);
            }
        }

        let visited = new Set();
        //visited.add(beginWord);
        let res = 1;
        let q = [beginWord];
        let front = 0;

        while (q.length > front) {
            const len = q.length - front;
            for (let i = 0; i < len; i++) {
                const word = q[front++];

                if (word == endWord) {
                    return res;
                }

                for (let i = 0; i < word.length; i++) {
                    const newWord = word.slice(0, i) + "*" + word.slice(i + 1);

                    for(let w of adjList.get(newWord)){
                        if(!visited.has(w)){
                            visited.add(w)
                            q.push(w)
                        }
                    }
                }
            }
            res ++;
        }

        return 0;
    }
}