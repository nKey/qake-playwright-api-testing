import { test, expect } from "@playwright/test";

test.use({
  baseURL: "https://jsonplaceholder.typicode.com/",
});

test("GET COMMENT BY NAME", async ({ request }) => {
  const response = await request.get(
    "comments?name=vero eaque aliquid doloribus et culpa"
  );
  expect(response.ok()).toBeTruthy();
  expect(await response.json()).toContainEqual({
    postId: 1,
    id: 5,
    name: "vero eaque aliquid doloribus et culpa",
    email: "Hayden@althea.biz",
    body: "harum non quasi et ratione\ntempore iure ex voluptates in ratione\nharum architecto fugit inventore cupiditate\nvoluptates magni quo et",
  });
});

test("POST COMMENT", async ({ request }) => {
  const response = await request.post("users", {
    data: {
      name: "TestAPI",
      username: "lolp",
      email: "testapi@mail.com",
      address: {
        street: "Kattie Turnpike",
        suite: "Suite 198",
        city: "Lebsackbury",
        zipcode: "31428-2261",
        geo: {
          lat: "-38.2386",
          lng: "57.2232",
        },
      },
      phone: "88047-560",
      website: "qatime.com",
      company: {
        name: "Hoeger LLC",
        catchPhrase: "Centralized empowering task-force",
        bs: "target end-to-end models",
      },
    },
  });
  expect(response.status()).toEqual(201);
  const responseJson = await response.json();
  delete responseJson.id;
  expect(responseJson).toMatchObject({
    name: "TestAPI",
    username: "lolp",
    email: "testapi@mail.com",
    address: {
      street: "Kattie Turnpike",
      suite: "Suite 198",
      city: "Lebsackbury",
      zipcode: "31428-2261",
      geo: {
        lat: "-38.2386",
        lng: "57.2232",
      },
    },
    phone: "88047-560",
    website: "qatime.com",
    company: {
      name: "Hoeger LLC",
      catchPhrase: "Centralized empowering task-force",
      bs: "target end-to-end models",
    },
  });
});

test("PUT COMMENT", async ({ request }) => {
  const response = await request.put("users/5", {
    data: {
      name: "TestAPI",
      username: "lolp",
      email: "testapi@mail.com",
      address: {
        street: "Kattie Turnpike",
        suite: "Suite 198",
        city: "Lebsackbury",
        zipcode: "31428-2261",
        geo: {
          lat: "-38.2386",
          lng: "57.2232",
        },
      },
      phone: "88047-560",
      website: "qatime.com",
      company: {
        name: "Hoeger LLC",
        catchPhrase: "Centralized empowering task-force",
        bs: "target end-to-end models",
      },
    },
  });
  expect(response.status()).toEqual(200);
  const responseJson = await response.json();
  delete responseJson.id;
  expect(responseJson).toMatchObject({
    name: "TestAPI",
    username: "lolp",
    email: "testapi@mail.com",
    address: {
      street: "Kattie Turnpike",
      suite: "Suite 198",
      city: "Lebsackbury",
      zipcode: "31428-2261",
      geo: {
        lat: "-38.2386",
        lng: "57.2232",
      },
    },
    phone: "88047-560",
    website: "qatime.com",
    company: {
      name: "Hoeger LLC",
      catchPhrase: "Centralized empowering task-force",
      bs: "target end-to-end models",
    },
  });
});
