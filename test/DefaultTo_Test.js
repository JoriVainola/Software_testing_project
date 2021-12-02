import chai from "chai";
import defaultTo from "../src/defaultTo.js"
import { expect } from "chai";

describe("DefaultTo", () => {

    it("should return value to check when that value is not undefined, NaN or Null", () =>{
        expect(defaultTo(1, 10)).to.equal(1);
        expect(defaultTo("1", 10)).to.equal("1");
        expect(defaultTo([1], 10)).to.deep.equal([1]);
    });
    
    it("should return the default value when the value to check is undefined, NaN or Null", () =>{
        expect(defaultTo(undefined, 10)).to.equal(10);
        expect(defaultTo(NaN, 10)).to.equal(10);
        expect(defaultTo(null, 10)).to.deep.equal(10);
    });
});