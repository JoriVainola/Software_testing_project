import chai from "chai";
import { expect } from "chai";
import get from "../src/get.js"

const testObject1 = {
    'a': 
        [
            {'a1': {
                'a1f': 5
            }},
            {
                'a2': 'test'
            }
        ],
    'b': 'hello world'
}

describe("Get", () => {
    it("testing with correct path", () =>{
        expect(get(testObject1, 'a[0].a1.a1f')).to.equal(5)
        expect(get(testObject1, 'a[1].a2')).to.equal('test')
        expect(get(testObject1, 'b')).to.equal('hello world')
    });
    it("testing with incorrect path", () =>{
        expect(get(testObject1, 'a[5].ag.a1f')).to.equal(undefined)
        expect(get(testObject1, 'a[1].a4')).to.equal(undefined)
        expect(get(testObject1, 'c')).to.equal(undefined)
    });
    it("testing default value", () => {
        expect(get(testObject1, 'c', 4)).to.equal(4)
        expect(get(testObject1, 'a[2].undefined', 'default value')).to.equal('default value')
    })
    it("testing correct path expressed as array", () => {
        expect(get(testObject1, ['a','0','a1','a1f'])).to.equal(5)
        expect(get(testObject1, ['a','1','a2'])).to.equal('test')
        expect(get(testObject1, ['b'])).to.equal('hello world')
    })
    it("testing with incorrect path expressed as array", () =>{
        expect(get(testObject1, ['a','5','ag','a1f'])).to.equal(undefined)
        expect(get(testObject1, ['a','1','a4'])).to.equal(undefined)
        expect(get(testObject1, ['c'])).to.equal(undefined)
    });
})