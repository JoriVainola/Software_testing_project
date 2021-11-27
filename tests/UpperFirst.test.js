import chai from "chai";
import { expect } from "chai";
import UpperFirst from "../src/UpperFirst.js"

describe("Upperfirst", () => {
 it("Make first letter upper", () =>{
    expect(UpperFirst("asd")).to.equal("Asd")
});
it("Make first letter upper", () =>{
    expect(UpperFirst("QWE RTY")).to.equal("QWE RTY")
});
})