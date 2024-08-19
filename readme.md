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

## useNavigate [see](./week-7/Test/src/components/NavigateExample.tsx)

- Use to define client side routes.

## LazyLoading

- use to load components lazy and not send all the data on the first request.

## Prop drilling

- When we pass props down from parent to deep child component. Also true: Passing props is a great way to explicitly pipe data through your UI tree to the components that use it.
- Prop drilling is not a bad practice but it is not visually appealing.
- Using `Context API` will push your state management outside the core react components.

## useContext

- to create a global state variable, like themes, user preferences.
- Just to make syntax cleaner and not for better performance.
- The downside is the child wrapped inside the provider will also re-render even if they are not using any context.

In React, when using the `useContext` hook, any change to the context value will cause all components that consume this context to re-render. This includes all components that are descendants of the provider and use the context value. Here's a more detailed explanation:

### Context and Re-rendering

1. **Context Provider and Consumers**:

   - The `Context.Provider` component provides a context value to all its descendants.
   - Any component that calls `useContext(MyContext)` will subscribe to the context value provided by `MyContext.Provider`.

2. **Updating Context**:
   - When the context value changes (for instance, via a state change in the parent component that holds the context value), all components that consume this context will re-render.
   - The below image shows how all the components will re render by clicking the increase or decrease button. This will be fixed by using `recoil`.
     ![alt text](assets/image.png)

### Example

Here’s a simplified example to illustrate this:

```jsx
import React, { createContext, useState, useContext } from "react";

// Create a context
const MyContext = createContext();

const MyProvider = ({ children }) => {
  const [value, setValue] = useState("Initial value");

  return (
    <MyContext.Provider value={{ value, setValue }}>
      {children}
    </MyContext.Provider>
  );
};

const ChildComponent = () => {
  const { value, setValue } = useContext(MyContext);

  return (
    <div>
      <p>Value: {value}</p>
      <button onClick={() => setValue("Updated value")}>Update Value</button>
    </div>
  );
};

const AnotherChildComponent = () => {
  const { value } = useContext(MyContext);

  return <p>Another component with value: {value}</p>;
};

const App = () => (
  <MyProvider>
    <ChildComponent />
    <AnotherChildComponent />
  </MyProvider>
);

export default App;
```

### What Happens Here:

1. **Initial Render**:

   - `MyProvider` provides the initial context value (`'Initial value'`).
   - `ChildComponent` and `AnotherChildComponent` both consume the context value and render with `'Initial value'`.

2. **Updating the Context**:

   - When the button in `ChildComponent` is clicked, it calls `setValue('Updated value')`.
   - This updates the context value.

3. **Re-rendering**:
   - Both `ChildComponent` and `AnotherChildComponent` will re-render with the new context value (`'Updated value'`).

### Conclusion

Whenever you update a context value in React, all components that consume that context (via `useContext`) will re-render. This is because React has to ensure that the latest context value is propagated to all consumers, ensuring consistent state across your application. If you have performance concerns, you might need to consider optimizations such as memoization (`React.memo`), or context partitioning to limit the re-renders only to the components that really need to react to the context change.

## Recoil

- The child wrapped inside the provider will not re-render if state is updated by some other child.
- The state logic is outside of your main component logic.

### Hooks

- useRecoilState: get the state.
- useRecoilValue: get the state value.
- useSetRecoilValue: get the set state fn.

### Selectors

- `state s1` -> `Component` -> `create other state or var from s1`.
- A selector represents a piece of derived state. You can think of derived state as the output of passing state to a pure function that derives a new value from the said state.
- When a thing is being derived directly from a bunch of states then use selectors.
- Selector can be dependent on other selectors as well.
- Example: When working with Todos application there are 2 states: todos and filter and their filtered-todos is a new value derived from the 2 states which can be used as a selector.

### Async data queries [see](./week-7/recoilStateManagement/src/components/AsyncQueriesExample.tsx)

- When atom needs to set with a default value using an async call (db call, web call).

### Todo Family

- when you want to have separate atoms for each content like a single todo.

### useRecoilStateLoadable, useRecoilValueLoadable [see](./week-7/recoilStateManagement//src/components/AtomFamLoadableExample.tsx)

- This will return an object with state which tells us that if the fetching of records is loading, hasValue or hasError.
- This will also prevent it from crashing when using async fun in atom and api crashes then axios raises the error which this hook will catch and make the state== "hasError"

### Context and Re-rendering

- The following image shows how clicking on the increase or decrease button will not re-render all the components but only the updating state component which is showing the counter value.
  ![alt text](assets/image-2.png)

# Week-8

## Tailwind css

- Mobile first.
- If using a breakpoint such as md, sm or xl then effects will turn on for gt breakpoint and not less than breakpoint value.

## Axios and Fetch

### Axios

- external library.
- https://httpdump.app: http dump is a website which lets us dump http request.

# Week-9 - Hooks

## useEffect mount and unmount functionality

```jsx
useEffect(
  () => {
    console.log("component mounted"); // code 1

    return () => {
      console.log("component mounted"); // code 2
    };
  },
  [todos] // code 3
);
```

The above use effect will first run the `code1` on dependency changes or 1st component mount and then when its triggered 2nd time or component unmounts then first the cleanup code will run which is `code2` and then `code1` runs.

## Data fetching hooks

- Instead of fetching data directly from a component create a custom hook to fetch data.
- `swr` is a library to do the same for auto refreshing, is loading and other functionalities.

```jsx
// create a custom hook to fetch todos
const useTodos = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    axios
      .get("https://sum-server.100xdevs.com/todos")
      .then((res) => setTodos(res.data.todos));
  }, []);

  return todos;
};

// directly include useTodos in the component
const Todos = () => {
  const todos = useTodos();

  return (
    <>
      {todos.map((t) => (
        <Track todo={todo} />
      ))}
    </>
  );
};
```
