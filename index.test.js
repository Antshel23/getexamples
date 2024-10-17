const request = require('supertest')
const app = require('./src/app')
const db = require('./db/connection')


describe('./restaurants endpoint', () => {
    test("Testing endpoint existence", async () => {
        // get request for endpoint validity
        const response = await request(app).get("/restaurants");
        expect(response.statusCode).toBe(200);
    })
    test("Testing that response is array", async () => {
        // get request for endpoint validity
        const response = await request(app).get("/restaurants");
        const responseData = JSON.parse(response.text)
        console.log(responseData)
        expect(Array.isArray(responseData)).toBe(true)
    })
    test("Testing that response is array", async () => {
        // get request for endpoint validity
        const response = await request(app).get("/restaurants");
        const responseData = JSON.parse(response.text)
        console.log(responseData)
        expect(Array.isArray(responseData)).toBe(true)
    })
})