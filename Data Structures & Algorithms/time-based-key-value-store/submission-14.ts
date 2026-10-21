class TimeMap {
    keyStore: Map<string, [string, number][]>;

    constructor() {
        this.keyStore = new Map();
    }

    /**
     * @param {string} key
     * @param {string} value
     * @param {number} timestamp
     * @return {void}
     */
    set(key: string, value: string, timestamp: number): void {
        const existingEntries = this.keyStore.get(key) ?? []
        existingEntries.push([value, timestamp])
        this.keyStore.set(key, existingEntries)
    }

    /**
     * @param {string} key
     * @param {number} timestamp
     * @return {string}
     */
    get(key: string, timestamp: number): string {
        const existingEntries = this.keyStore.get(key) ?? []

        let l = 0
        let r = existingEntries.length - 1

        let res = ""

        while(l <= r){
            const mid = Math.floor((l + r ) / 2)
            const midValue = existingEntries[mid]

            if(midValue[1] <= timestamp){
                l = mid + 1
                res = midValue[0]
            } else {
                r = mid - 1
            }
            
        }

        return res

    }
}
