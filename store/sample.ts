import { defineStore } from "pinia"

interface State {
    data: string,
    count: number
}
export const useSampleStore = defineStore("sampleStore", {
    // state
    state: (): State => {
        return {
            data: "這個是Pinia管理的資料",
            count: 0
        }
    }
    //action

    //getters
})