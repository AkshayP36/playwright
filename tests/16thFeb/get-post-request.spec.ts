import test, { expect, request } from '@playwright/test'
test("get api testing", async ({ request }) => {

    //send the get request
    const response = await request.get("http://localhost:8080/api/users/9");

    //validate the status code
    expect(response.status()).toBe(200);

    //console.log(response);

    //convert it to json
    const jsonResponse = await response.json();

    console.log(jsonResponse.firstName);

    expect(jsonResponse.firstName).toBe("Selvan");

    //check if the last name field exist in json response
    expect(jsonResponse).toHaveProperty("lastName");

    //validate the data type of property
    expect(typeof (jsonResponse.lastName)).toBe("string");
});


test("post api testing", async ({ request }) => {

    const response = await request.post("http://localhost:8080/api/users",
        {
            data:
            {
                "email": "test@test.com",
                "firstName": "you test",
                "lastName": "tested all"
            }

        }
    );

    expect(response.status()).toBe(201);

    //validate that there is no response body/response body is empty

    const responseText = await response.text();

    expect(responseText).toBe("");



});