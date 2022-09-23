const app = require("../app")

test("should return 5 when given 2 and 3", () => {
    const result = app.add(2,3)

    expect(result).toBe(5);
})