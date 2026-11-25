class Trie {
    children = new Map<string, Trie>();
    word = false;
}

class WordDictionary {
    root: Trie;
    constructor() {
        this.root = new Trie();
    }

    /**
     * @param {string} word
     * @return {void}
     */
    addWord(word: string): void {
        let current = this.root;
        for (let c of word) {
            if (!current.children.has(c)) {
                current.children.set(c, new Trie());
            }
            current = current.children.get(c);
        }
        current.word = true;
    }

    /**
     * @param {string} word
     * @return {boolean}
     */
    search(word: string): boolean {
        return this.dfs(word, 0, this.root);
    }

    dfs(word: string, index: number, current: Trie) {
        if (index === word.length) {
            return current.word;
        }

        let c = word[index];

        if (c === ".") {
            for (let e of current.children.values()) {
                const res = this.dfs(word, index + 1, e);
                if (res) {
                    return true;
                }
            }
            return false
        }
        if (!current.children.has(c)) {
            return false;
        }

        return this.dfs(word, index + 1, current.children.get(c))
    }
}
