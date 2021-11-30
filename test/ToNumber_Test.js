import ToNumber from "../src/toNumber.js"
import chai from "chai";
import { expect } from "chai";

describe("ToNumber", () => {
    it("Testing with a number", () =>{
        expect(ToNumber(1)).to.equal(1);
        expect(ToNumber(1)).to.be.a('number');

        expect(ToNumber(168)).to.equal(168);
        expect(ToNumber(168)).to.be.a('number');

        expect(ToNumber(0)).to.equal(0);
        expect(ToNumber(0)).to.be.a('number');
    });

    it("Testing with a string containing just a number", () =>{
        expect(ToNumber("1")).to.equal(1);
        expect(ToNumber("1")).to.be.a('number');

        expect(ToNumber("169")).to.equal(169);
        expect(ToNumber("169")).to.be.a('number');
    });

    it("Testing with Number.MIN_VALUE and Number.MAX_VALUE", () =>{
        expect(ToNumber(Number.MIN_VALUE)).to.equal(5e-324);
        expect(ToNumber(Number.MIN_VALUE)).to.be.a('number');

        expect(ToNumber(Number.MAX_VALUE)).to.be.a('number');
    });

    it("Testing with infinity value(number and string)", () =>{
        expect(ToNumber(Infinity)).to.equal(Infinity);
        expect(ToNumber(Infinity)).to.be.a('number');

        expect(ToNumber("Infinity")).to.equal(Infinity);
        expect(ToNumber("Infinity")).to.be.a('number');
    });

    it("Testing with float value(number and string)", () =>{
        expect(ToNumber(2.333)).to.equal(2.333);
        expect(ToNumber(2.333)).to.be.a('number');

        expect(ToNumber("2.333")).to.equal(2.333);
        expect(ToNumber("2.333")).to.be.a('number');
    });

    it("Testing with a string containing characters other than numbers", () =>{

        expect(ToNumber("2OOI")).to.equal(NaN);
        expect(ToNumber("2OOI")).to.be.a('number');

    });
})