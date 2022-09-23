const app = require("../app")

test("should return 5 when given 2 and 3", () => {
    const result = app.add(2,3)

    expect(result).toBe(5);
})

// test('should contain the name demi'), () => {
//     const result = app.myArray('demi')

//     expect(result).toContain('demi');
// }

test('should have a length of 4', () => {
    const testArray = ['keira', 'demi', 'katy'];
    const result = app.addWord('keira', testArray);

    expect(result).toHaveLength(4)
})