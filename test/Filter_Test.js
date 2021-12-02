import chai from "chai";
import { expect } from "chai";
import filter from "../src/filter.js"

describe("Filter", () => {
    it("should return filtered array of objects of the given list with the given filter option", () =>{
        const users = [
            { 'user': 'barney', 'active': true },
            { 'user': 'george', 'active': true },
            { 'user': 'fred',   'active': false }
            ];
        const filtered = filter(users, ({ active }) => active);
        expect(filtered).to.have.all.deep.members([{ 'user': 'barney', 'active': true }, { 'user': 'george', 'active': true }]);
    });

    it("should return a list containing an empty list when given an empty list", () =>{
        const users = [];
        const filtered = filter(users, ({ active }) => active);
        expect(filtered).to.deep.equal([[]]);
    });
});