import chai from "chai";
import { expect } from "chai";
import eq from "../src/eq.js"

describe("EQ", () => {
    it("test equal values", () =>{
        expect(eq('a','a')).to.equal(true)
        expect(eq(1,1)).to.equal(true)
        expect(eq(true,true)).to.equal(true)
        expect(eq(1.0,1.0)).to.equal(true)
    });

    it("test unequal values", () =>{
        expect(eq(1,2)).to.equal(false)
        expect(eq("a","f")).to.equal(false)
        expect(eq(true,false)).to.equal(false)
        expect(eq(4.2,7.2)).to.equal(false)
    });

    it("test different types", () =>{
        expect(eq(1,"g")).to.equal(false)
        expect(eq("a",6.2)).to.equal(false)
        expect(eq(true,5)).to.equal(false)
        expect(eq(4.2,'asd')).to.equal(false)
    });
})