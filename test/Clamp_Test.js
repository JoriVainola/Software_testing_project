import chai from "chai";
import clamp from "../src/clamp.js"
import { expect } from "chai";

describe("Clamp", () => {
    it("The number to clamp is within the range", () =>{
        
        expect(clamp(-5, -10, 5)).to.equal(-5);
        expect(clamp(2, 1, 3)).to.equal(2);
    });

    it("The number to clamp is smaller than the lower bound", () =>{
        expect(clamp(-10, -5, 5)).to.equal(-5);
        expect(clamp(1, 2, 3)).to.equal(2);
    });

    it("The number to clamp is greater than the upper bound", () =>{
        expect(clamp(10, -5, 5)).to.equal(5);
        expect(clamp(3, 1, 2)).to.equal(2);
    });

    it("All the numbers are same", () =>{
        expect(clamp(0, 0, 0)).to.equal(0);
        expect(clamp(5, 5, 5)).to.equal(5);
    });
})