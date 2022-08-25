import { getToken, setToken } from "../services/tokenService";


describe("Token Service Test", () => {
    it("setToken Test", () => {
        setToken("hello")
        const token = getToken()
        expect(token).toStrictEqual("hello")
    });

})