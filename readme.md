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

# Week-6

## React Hooks

## Key

- A `unique key` should always be there for components.
- It optimizes the rerendering.
- Do not provide index from a loop to the key else that will not tell the the true key related specifically to that entry and re rendering will still be in-optimal.

## Wrapper

- A value of `children` will be passed as prop to children component.

```tsx
const CardWrapper = ({children}) => <div>{children}</div>
<CardWrapper>Hello world</CardWrapper>
```

## useEffect

- Life cycle component.
- Async function are not allowed.
- `useAsyncEffect` can module can be used to use async function.

## Other

- Tick "Highlight component when re-render" in dev tools >> components >> settings >> Highlight component when re-render. When the re-renders happen a visual highlight will occur on things where our components has been re rendered.

- Use the state in the lowest ancestor since the state change will rerender the whole thing along with the components which may or maynot use the state.

- **React.memo** : To skip re rendering if the parent is change but the child does not then use `React.memo()`.

- `StrictMode` for development.

- If we are passing a dependency like todo id to component `TodoFromId` and we are using key={todoId} to re render the component then it will re run 2 times.

## useMemo [see code](./week-6/todo-app/src/components/MemoApp.tsx)

- Creates a variable which is not a state variable.
- Saves earlier computed values.
- If a state variable is changed and it causes a useeffect to happen and we also change another state in useeffect then it can lead to 2 renders.
- It will only recompute if the dependency changes.
- Note That it will not save the output but only change the value if dependency changes even if other state variable changes and re render the component but still the usememo variable will be unchanged (usememo will not call the fun) and maintain its prv value across re renders.
- Use this when something sync is dependent on some other sync.

## useCallback

- This is when a function input changes.
- It is used to memoize function, which can help in optimizing the performance of your application, especially in cases involving child components that rely on reference equality to prevent unnecessary renders.
- If a simple non state var like datatype as string or int is changing in the parent then passing it to the child will not cause re render since the value is not being changed. But if the value if complex like obj or function then the re render on parent will also cause the re render of child even after using memo since the re render of parent will change the address of obj and func's.

## Side effects

- setTimeout, setInterval, fetch
- Generally side-effects occur inside useEffect hook.


## Re conciliation

- re rendering and computing all the logic provided by developer to react.

## useRef

- Referencing a dom element.
- Sort of like assigning an Id to a component in the react way.


# Week-7

## Prop drilling

- When we pass props down from parent to deep child component. Also true: Passing props is a great way to explicitly pipe data through your UI tree to the components that use it.
- Prop drilling is not a bad practice but it is not visually appealing. 
- Using `Context API` will push your state management outside the core react components. 