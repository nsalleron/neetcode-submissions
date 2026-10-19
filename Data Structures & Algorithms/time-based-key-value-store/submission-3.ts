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
        const existingValues = this.keyStore.get(key) ?? []
        existingValues.push([value, timestamp])
        this.keyStore.set(key, existingValues)
    }

    /**
     * @param {string} key
     * @param {number} timestamp
     * @return {string}
     */
    get(key: string, timestamp: number): string {
        const existingValues = this.keyStore.get(key) ?? []

        let l = 0
        let r = existingValues.length - 1

        let foundIndex = -1
        while(l <= r){
            const middleIndex = Math.floor((l + r) / 2)
            const middleValue = existingValues[middleIndex][1]

            if(middleValue === timestamp){
                foundIndex = middleIndex
                break
            }

            if(middleValue <= timestamp){
                foundIndex = middleIndex
                l = middleIndex + 1
            } else if( middleValue > timestamp){
                r = middleIndex - 1
            }

        }


        return foundIndex === -1 ? "" : existingValues[foundIndex][0]
    }
}