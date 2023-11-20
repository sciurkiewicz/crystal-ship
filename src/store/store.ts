import { defineStore } from 'pinia'
import { ref } from 'vue'

export const store = defineStore('state', {
    state: () => {
        return {
            privateMode: ref(true),
            view: ref(101),
            version: ref("0.0.2 alpha")
        }
    },
    actions: {
        changeName() {
            console.log("part time lover <3")
        },
    },
})