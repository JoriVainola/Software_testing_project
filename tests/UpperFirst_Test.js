import chai from "chai";
import { expect } from "chai";
import UpperFirst from "../src/UpperFirst.js"

describe("Upperfirst", () => {
    it("Make first letter upper", () =>{
        expect(UpperFirst("asd")).to.equal("Asd")
        expect(UpperFirst("bwr")).to.equal("Bwr")
        expect(UpperFirst("hello worl")).to.equal("Hello worl")
    });

    it("Upper already upped string", () =>{
        expect(UpperFirst("QWE RTY")).to.equal("QWE RTY")
        expect(UpperFirst("It is rainign today")).to.equal("It is rainign today")
    });

    it("testing special chars", () =>{
        expect(UpperFirst("#%(")).to.equal("#%(")
        expect(UpperFirst("=¤¤")).to.equal("=¤¤")
        expect(UpperFirst("*^()")).to.equal("*^()")
    });
    
    it("testing numbers", () =>{
        expect(UpperFirst("247")).to.equal("247")
        expect(UpperFirst("584.2")).to.equal("584.2")
    });
})