describe("Different kinds of tests", () => {
    test("equality matchers", () => {
        expect(2 * 2).toBe(4);
        expect(4 - 2).not.toBe(1);
    })

    test("truthy operators", () => {
        var name = "Software testing help";
        var n = null;
        expect(n).toBeNull();
        expect(name).not.toBeNull;

        // name has a valid value
        expect(name).toBeTruthy();

        //fail - as null is non success
        expect(n).toBeTruthy();

        // pass - null treated as false or negative
        expect(n).toBeFalsy();

        // 0 - treated as false
        expect(0).toBeFalsy();
    });

    test("numeric operators", () => {

        var num1 = 100;
        var num2 = -20;
        var num3 = 0;

        // greater than
        expect(num1).toBeGreaterThan(10);

        // less than or equal
        expect(num2).toBeLessThanOrEqual(0);

        // greater than or equal
        expect(num3).toBeGreaterThanOrEqual(0);
    });

    test("string matchers", () => {
        var string1 = "software testing help - a great resource for testers"

        // test for success match
        expect(string1).toMatch(/test/);

        // test for failure match
        expect(string1).not.toMatch(/abc/)
    });
});