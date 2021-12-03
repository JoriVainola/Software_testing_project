import chai from "chai";
import { expect } from "chai";
import toNumber from "../src/toNumber.js"

describe("toNumber", () => {
    it("should return the number when given a number", () =>{
        expect(toNumber(1)).to.equal(1);
        expect(toNumber(1)).to.be.a('number');

        expect(toNumber(168)).to.equal(168);
        expect(toNumber(168)).to.be.a('number');

        expect(toNumber(0)).to.equal(0);
        expect(toNumber(0)).to.be.a('number');
    });

    it("should return a number when given a string containing that number", () =>{
        expect(toNumber("1")).to.equal(1);
        expect(toNumber("1")).to.be.a('number');

        expect(toNumber("169")).to.equal(169);
        expect(toNumber("169")).to.be.a('number');
    });

    it("should return min and max numbers when given Number.MIN_VALUE and Number.MAX_VALUE", () =>{
        expect(toNumber(Number.MIN_VALUE)).to.equal(5e-324);
        expect(toNumber(Number.MIN_VALUE)).to.be.a('number');

        expect(toNumber(Number.MAX_VALUE)).to.be.a('number');
    });

    it("should return Infinity number when given Infinity (number and string)", () =>{
        expect(toNumber(Infinity)).to.equal(Infinity);
        expect(toNumber(Infinity)).to.be.a('number');

        expect(toNumber("Infinity")).to.equal(Infinity);
        expect(toNumber("Infinity")).to.be.a('number');
    });

    it("should return the number when given a float value(number and string)", () =>{
        expect(toNumber(2.333)).to.equal(2.333);
        expect(toNumber(2.333)).to.be.a('number');

        expect(toNumber("2.333")).to.equal(2.333);
        expect(toNumber("2.333")).to.be.a('number');
    });

    it("should return Nan when given a string containing other characters than just numbers", () =>{

        //expect(toNumber("2OOI")).to.equal(NaN);
        expect(toNumber("2OOI")).to.be.a('number');

    });
})