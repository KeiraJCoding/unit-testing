const app = require("../app")

test("should return num1 + num2", () => {
    const result = app.add(2,3)

    expect(result).toBe(5);
})