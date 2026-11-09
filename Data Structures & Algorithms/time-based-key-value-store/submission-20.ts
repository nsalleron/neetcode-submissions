class TimeMap {
    keyStore: Map<string, [string, number][]>
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
        const arrayVTimestamp = this.keyStore.get(key) ?? []
        arrayVTimestamp.push([value, timestamp])
        this.keyStore.set(key, arrayVTimestamp)
    }

    /**
     * @param {string} key
     * @param {number} timestamp
     * @return {string}
     */
    get(key: string, timestamp: number): string {
        const vTimestamps = this.keyStore.get(key) ?? []

        let l = 0
        let r = vTimestamps.length - 1

        let res = ''
        while(l <= r){
            const m = Math.floor((l +r ) / 2)
            const [value, ts] = vTimestamps[m]
            
            if(ts <= timestamp){
                res = value
                l = m + 1
            } else {
                r = m - 1
            }
        }

        return res

    }
}
