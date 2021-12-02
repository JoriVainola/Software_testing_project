import chai from "chai";
import { expect } from "chai";
import keys from "../src/keys.js";

describe("Keys", () => {
    it("should return a list of the keys of an object when given an object", () =>{
        function Foo() {
            this.a = 1;
            this.b = 2;
            };
        
        Foo.prototype.c = 3;

        const testKeys = keys(new Foo);
        expect(testKeys).to.have.all.members(['a', 'b']);
    });

    it("should return a list of number strings when given a non-object(string)", () =>{
     
        const testKeys = keys('hello');
        expect(testKeys).to.have.all.members(['0', '1', '2', '3', '4']);
    });

    it("should return a list of number strings when given a non-object(list)", () =>{
     
        const testKeys = keys(['hi', 'hello', 'world']);
        expect(testKeys).to.have.all.members(['0', '1', '2']);
    });

    it("should return an empty list when given an empty object", () =>{
        const testObject = {};
        const testKeys = keys(testObject);
        expect(testKeys).to.have.all.members([]);
    });
});