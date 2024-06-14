# Topics

## 6 June 24

- Started my journey.

- Replit: Online IDE, https://replit.com/@akshatsingh1718

- Loupe JS: Website for visual inspection of js call stack.
  http://latentflip.com

- Api's like `setTimeout` are considered web apis since they are not in ECMAScript but the browser js/nodejs provides it since it is a very common use case.

## 7 June 24

- See Week 2 async await questions:

  - When a function return `reps.then()` it will return a promise.
  - When an async function return anything it will be wrapped inside a promise.

- Common js Browser engines.

  - Google V8 (somewhat open-sources)
  - Firefox SpiderMonkey

- Javascript run-times: `NodeJs` and `Bun` (significantly faster than nodejs)

- Query Parameter: https://localhost:9000/?`n=1000`

## 8 June 24

- Middleware in express: [see](./class-2/middlewares/index-middleware.js).
- In express app.use(< middleware >). Ex. express.json() is an middleware. Also we can also use our defined middlewares.

# Week 3

## 10 June 24

## Hashing, Encryption

### JSON Web Tokens

- Website: https://datatracker.ietf.org/doc/html/rfc7519. ietf is the organization which created ecma script.
- jwt.io: see json web tokens encoding and decoding.
- Anyone who has jwt can see the original json object. It is like json object converted to some long string which looks like encrypted but is not encrypted.
- Like in any website sending a post request to a server like openai.chatgpt.com sends post request it has a jwt for authorization (Bearer < long text >). The server get the jwt and it has already a password for the jwt which passes through `jwt.verify(JWT, password)` and this will return the json if the jwt is verified.
- JWT can be converted back to json by anyone but cannot be verified by anyone.
- [See how jwt works](./week-3/jwt-auth.js)

## Local storage

- Store the data locally to your browser.

## Dom manipulation, Ids, Classes in HTML Page

## Mongo DB

# Week-4 (12-june-24)

## Debouncing

- technique to help prevent time consuming tasks from being triggered so frequently.

## Throttling

- Limits the frequency of a particular function within a specified time frame.

## Rate Limiting

- Controls the number of requests a client can make within a specific time period to protect server resources and enforces fairness.

# Week-5

## Started TODO APP

## Other

- In dev dependencies, we have things which needs to be present while in development environment. Eg.- like vite, we only need vite while development and not on production.
