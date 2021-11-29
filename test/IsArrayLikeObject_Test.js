import chai from "chai";
import { expect } from "chai";
import isArrayLikeObject from "../src/isArrayLikeObject.js"

function testfunction1(){
    return;
}

function testfunction2(){
    return;
}

// OBSERVATIONS
// nulls inside array count as objects
// string is not considered an array

describe("IsArrayLikeObject", () => {
    it("testing with null", () =>{
        expect(isArrayLikeObject(null)).to.equal(false)
    });

    it("testing with array containing nulls", () =>{
        expect(isArrayLikeObject([null, null])).to.equal(true)
    });

    it("testing with function", () =>{
        expect(isArrayLikeObject(testfunction1)).to.equal(false)
    });

    it("testing with array of functions", () =>{
        expect(isArrayLikeObject([testfunction1, testfunction2])).to.equal(true)
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