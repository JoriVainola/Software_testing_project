import chai from "chai";
import { expect } from "chai";
import eq from "../src/eq.js"

describe("EQ", () => {
    it("test equal values", () =>{
        expect(eq('a','a')).to.equal(true)
    });

    it("test unequal values", () =>{
        expect(eq(1,2)).to.equal(false)
    });
})