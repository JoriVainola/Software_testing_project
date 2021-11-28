import chai from "chai";
import { expect } from "chai";
import isEmpty from "../src/isEmpty.js"

let testObject1 = {
    "value": 5
}

let testObject2 = {

}

function testfunction1(){
    return;
}

describe("IsEmpty", () => {
    it("testing with empty object", () =>{
        expect(isEmpty(testObject2)).to.equal(true)
    });
    it("testing with non empty object", () =>{
        expect(isEmpty(testObject1)).to.equal(false)
    });
    it("testing with array containing nulls", () =>{
        expect(isEmpty([null, null])).to.equal(false)
    });
    it("testing with array containing actual values", () =>{
        expect(isEmpty([1,2,3,4])).to.equal(false)
    });
    it("testing with non object", () =>{
        expect(isEmpty(testfunction1)).to.equal(true)
    });
    it("testing with non object", () =>{
        expect(isEmpty(null)).to.equal(true)
    });
})