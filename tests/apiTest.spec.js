// @ts-check
const { test, expect, chromium } = require("@playwright/test");
test.describe("API Testing with Playwright", () => {
    const baseurl = "https://reqres.in/api";
  
    test("GET API Request with -- Valid 200 Response ", async ({ request }) => {
      const response = await request.get(`${baseurl}/users/2`);
      expect(response.status()).toBe(200);
    });
    test("POST API Request with -- Valid 201 Response ", async ({ request }) => {
      const response = await request.post(`${baseurl}/users/2`, {
        data: {
          id: 123,
        },
      });
      const responseBody = JSON.parse(await response.text());
      expect(responseBody.id).toBe(123);
      expect(response.status()).toBe(201);
    });
    test("PUT API Request with -- Valid 201 Response ", async ({ request }) => {
      const response = await request.put(`${baseurl}/users/2`, {
        data: {
          id: 245,
        },
      });
      const responseBody = JSON.parse(await response.text());
      expect(responseBody.id).toBe(245);
      expect(response.status()).toBe(200);
    });
    test("DELETE API Request with -- Valid 201 Response ", async ({
      request,
    }) => {
      const response = await request.delete(`${baseurl}/users/2`, {});
      expect(response.status()).toBe(204);
    });
    test("GET API Request with - InValid 404 Respons ", async ({
      request,
    }) => {
      const response = await request.get(`${baseurl}/usres/invalid-data`);
      expect(response.status()).toBe(404);
    });
    test("GET Request - Verify User detils  ", async ({ request }) => {
      const response = await request.get(`${baseurl}/users/2`);
      const responseBody = JSON.parse(await response.text());
      expect(response.status()).toBe(200);
      expect(responseBody.data.id).toBe(2);
      expect(responseBody.data.first_name).toBe("Janet");
      expect(responseBody.data.last_name).toBe("Weaver");
      expect(responseBody.data.email).toBeTruthy();
    });
  });