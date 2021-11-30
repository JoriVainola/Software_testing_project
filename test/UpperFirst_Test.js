import chai from "chai";
import { expect } from "chai";
import upperFirst from "../src/upperFirst.js"

describe("upperFirst", () => {
    it("Testing with upcapped string", () =>{
        expect(upperFirst("asd")).to.equal("Asd")
        expect(upperFirst("bwr")).to.equal("Bwr")
        expect(upperFirst("hello worl")).to.equal("Hello worl")
    });

    it("testing already capped string", () =>{
        expect(upperFirst("QWE RTY")).to.equal("QWE RTY")
        expect(upperFirst("It is rainign today")).to.equal("It is rainign today")
    });

    it("testing special chars", () =>{
        expect(upperFirst("#%(")).to.equal("#%(")
        expect(upperFirst("=¤¤")).to.equal("=¤¤")
        expect(upperFirst("*^()")).to.equal("*^()")
    });

    it("testing numbers", () =>{
        expect(upperFirst("247")).to.equal("247")
        expect(upperFirst("584.2")).to.equal("584.2")
    });
})