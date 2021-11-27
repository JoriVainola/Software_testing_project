import chai from "chai";
import { expect } from "chai";
import isArrayLikeObject from "../src/isArrayLikeObject.js"

function testfunction(){
    return;
}

// OBSERVATIONS
// nulls inside array count as objects


describe("EQ", () => {
    it("testing with null", () =>{
        expect(isArrayLikeObject(null)).to.equal(false)
    });

    it("testing with array containing nulls", () =>{
        expect(isArrayLikeObject([null, null])).to.equal(true)
    });

    it("testing with function", () =>{
        expect(isArrayLikeObject(testfunction)).to.equal(false)
    });

    it("testing with string", () =>{
        expect(isArrayLikeObject("test1")).to.equal(false)
        expect(isArrayLikeObject("long sentence")).to.equal(false)
        expect(isArrayLikeObject("a")).to.equal(false)
    });

    it("testing with array containing objects", () =>{
        expect(isArrayLikeObject([1,2,3,4])).to.equal(true)
        expect(isArrayLikeObject(["a","b","c"])).to.equal(true)
        expect(isArrayLikeObject([true,false])).to.equal(true)
    });
})