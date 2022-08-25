import { setLocalStorage, getLocalStorage,deleteLocalStorage } from "../services/localStorageService";

describe("localStorage service", () => {
    it("setLocalStorage and getLocalStorage test", () => {
        setLocalStorage("hello", {test:"merhaba",deneme:"deneme"})
        const get = getLocalStorage("hello")
        expect(get).toStrictEqual({test:"merhaba", deneme:"deneme"})
       
     
    });

    it("delete localStorage test", ()=>{
        deleteLocalStorage("hello");
        const get = getLocalStorage("hello")
        expect(get).toStrictEqual(null)
    })
})