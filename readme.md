# Topics

## 6 June 24

-   Started my journey.

-   Replit: Online IDE, https://replit.com/@akshatsingh1718

-   Loupe JS: Website for visual inspection of js call stack.
    http://latentflip.com

-   Api's like `setTimeout` are considered web apis since they are not in ECMAScript but the browser js/nodejs provides it since it is a very common use case.

## 7 June 24

-   See Week 2 async await questions:

    -   When a function return `reps.then()` it will return a promise.
    -   When an async function return anything it will be wrapped inside a promise.

-   Common js Browser engines.

    -   Google V8 (somewhat open-sources)
    -   Firefox SpiderMonkey

-   Javascript run-times: `NodeJs` and `Bun` (significantly faster than nodejs)

-   Query Parameter: https://localhost:9000/?`n=1000`

## 8 June 24

-   Middleware in express: [see](./class-2/middlewares/index-middleware.js).
-   In express app.use(< middleware >). Ex. express.json() is an middleware. Also we can also use our defined middlewares.

# Week 3

## 10 June 24

## Hashing, Encryption

### JSON Web Tokens

-   Website: https://datatracker.ietf.org/doc/html/rfc7519. ietf is the organization which created ecma script.
-   jwt.io: see json web tokens encoding and decoding.
-   Anyone who has jwt can see the original json object. It is like json object converted to some long string which looks like encrypted but is not encrypted.
-   Like in any website sending a post request to a server like openai.chatgpt.com sends post request it has a jwt for authorization (Bearer < long text >). The server get the jwt and it has already a password for the jwt which passes through `jwt.verify(JWT, password)` and this will return the json if the jwt is verified.
-   JWT can be converted back to json by anyone but cannot be verified by anyone.
-   [See how jwt works](./week-3/jwt-auth.js)

## Local storage

-   Store the data locally to your browser.

## Dom manipulation, Ids, Classes in HTML Page

## Mongo DB

# Week-4 (12-june-24)

## Debouncing

-   technique to help prevent time consuming tasks from being triggered so frequently.

## Throttling

-   Limits the frequency of a particular function within a specified time frame.

## Rate Limiting

-   Controls the number of requests a client can make within a specific time period to protect server resources and enforces fairness.

# Week-5

## Started TODO APP

## Other

-   In dev dependencies, we have things which needs to be present while in development environment. Eg.- like vite, we only need vite while development and not on production.

# Week-6

## React Hooks

## Key

-   A `unique key` should always be there for components.
-   It optimizes the rerendering.
-   Do not provide index from a loop to the key else that will not tell the the true key related specifically to that entry and re rendering will still be in-optimal.

## Wrapper

-   A value of `children` will be passed as prop to children component.

```tsx
const CardWrapper = ({children}) => <div>{children}</div>
<CardWrapper>Hello world</CardWrapper>
```

## useEffect

-   Life cycle component.
-   Async function are not allowed.
-   `useAsyncEffect` can module can be used to use async function.

## Other

-   Tick "Highlight component when re-render" in dev tools >> components >> settings >> Highlight component when re-render. When the re-renders happen a visual highlight will occur on things where our components has been re rendered.

-   Use the state in the lowest ancestor since the state change will rerender the whole thing along with the components which may or maynot use the state.

-   **React.memo** : To skip re rendering if the parent is change but the child does not then use `React.memo()`.

-   `StrictMode` for development.

-   If we are passing a dependency like todo id to component `TodoFromId` and we are using key={todoId} to re render the component then it will re run 2 times.

## useMemo [see code](./week-6/todo-app/src/components/MemoApp.tsx)

-   Creates a variable which is not a state variable.
-   Saves earlier computed values.
-   If a state variable is changed and it causes a useeffect to happen and we also change another state in useeffect then it can lead to 2 renders.
-   It will only recompute if the dependency changes.
-   Note That it will not save the output but only change the value if dependency changes even if other state variable changes and re render the component but still the usememo variable will be unchanged (usememo will not call the fun) and maintain its prv value across re renders.
-   Use this when something sync is dependent on some other sync.

## useCallback

-   This is when a function input changes.
-   It is used to memoize function, which can help in optimizing the performance of your application, especially in cases involving child components that rely on reference equality to prevent unnecessary renders.
-   If a simple non state var like datatype as string or int is changing in the parent then passing it to the child will not cause re render since the value is not being changed. But if the value if complex like obj or function then the re render on parent will also cause the re render of child even after using memo since the re render of parent will change the address of obj and func's.

## Side effects

-   setTimeout, setInterval, fetch
-   Generally side-effects occur inside useEffect hook.

## Re conciliation

-   re rendering and computing all the logic provided by developer to react.

## useRef

-   Referencing a dom element.
-   Sort of like assigning an Id to a component in the react way.

# Week-7

## useNavigate [see](./week-7/Test/src/components/NavigateExample.tsx)

-   Use to define client side routes.

## LazyLoading

-   use to load components lazy and not send all the data on the first request.

## Prop drilling

-   When we pass props down from parent to deep child component. Also true: Passing props is a great way to explicitly pipe data through your UI tree to the components that use it.
-   Prop drilling is not a bad practice but it is not visually appealing.
-   Using `Context API` will push your state management outside the core react components.

## useContext

-   to create a global state variable, like themes, user preferences.
-   Just to make syntax cleaner and not for better performance.
-   The downside is the child wrapped inside the provider will also re-render even if they are not using any context.

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
            <button onClick={() => setValue("Updated value")}>
                Update Value
            </button>
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

-   The child wrapped inside the provider will not re-render if state is updated by some other child.
-   The state logic is outside of your main component logic.

### Hooks

-   useRecoilState: get the state.
-   useRecoilValue: get the state value.
-   useSetRecoilValue: get the set state fn.

### Selectors

-   `state s1` -> `Component` -> `create other state or var from s1`.
-   A selector represents a piece of derived state. You can think of derived state as the output of passing state to a pure function that derives a new value from the said state.
-   When a thing is being derived directly from a bunch of states then use selectors.
-   Selector can be dependent on other selectors as well.
-   Example: When working with Todos application there are 2 states: todos and filter and their filtered-todos is a new value derived from the 2 states which can be used as a selector.

### Async data queries [see](./week-7/recoilStateManagement/src/components/AsyncQueriesExample.tsx)

-   When atom needs to set with a default value using an async call (db call, web call).

### Todo Family

-   when you want to have separate atoms for each content like a single todo.

### useRecoilStateLoadable, useRecoilValueLoadable [see](./week-7/recoilStateManagement//src/components/AtomFamLoadableExample.tsx)

-   This will return an object with state which tells us that if the fetching of records is loading, hasValue or hasError.
-   This will also prevent it from crashing when using async fun in atom and api crashes then axios raises the error which this hook will catch and make the state== "hasError"

### Context and Re-rendering

-   The following image shows how clicking on the increase or decrease button will not re-render all the components but only the updating state component which is showing the counter value.
    ![alt text](assets/image-2.png)

# Week-8

## Tailwind css

-   Mobile first.
-   If using a breakpoint such as md, sm or xl then effects will turn on for gt breakpoint and not less than breakpoint value.

## Axios and Fetch

### Axios

-   external library.
-   https://httpdump.app: http dump is a website which lets us dump http request.

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

-   Instead of fetching data directly from a component create a custom hook to fetch data.
-   `swr` is a library to do the same for auto refreshing, is loading and other functionalities.

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

## TS Config (tsconfig.json)

-   `target` : **es5** is a lower version than **es202**. It is used form converting ts code to js code. Like **es5** dosent know arrow function so its js conversion from ts will not have an arrow function.

-   `srcDir` & `outDir`: This is to specify the ts files in srcDir and converted js files should have in outDir.

-   `noImplicitAny`: If true will raise error for any fields.

-   `removeComments`: True will remove the comments from the js files.

-   You should always add the `outDir` dir in the gitignore file as it can be created on the fly.

## Types and interfaces

-   Both are used to infer the types of a dtype.
-   The major difference:
    -   interfaces can be inherited to a class but not type.
    -   type can have a union ( | ) and intersection ( & ) operator for adding properties to a single type.
    -   Array can be only used with types.

# Week-10

## SQL Queries, Joins and references

Q. Why cant do we do 2 separate queries instead of 1 when fetching data from 2 different tables ?

-   reduce latency.
-   lesser db calls.

Q. Are joins expensive ?
A. Joins can become expensive very easily. Take an example of two table A (1000 Rows) and table B (1000) rows so joining them will create 1000 x 1000 operations because sql needs to check row[0] of table A with all the 1000 rows of table B.

## Prisma ORM

-   Automated migrations
-   What is \_prisma_migrations ? [See](https://github.com/prisma/prisma/discussions/18434)
-   **Autogenerated clients**: Which is to create automatically generated software components or code to interact with an API or service. Like prisma create code for our models eg. UserModel and can produce type hinting and create code part specifically designed to talk to UserModel.
-   @id field: This will keeps on increasing even if the transaction got failed.

## Postgres

**CMD:**

-   Login: sudo -i -u postgres
-   quit: \q
-   postgres shell: psql
-   change password: \password user-name

## Databases

-   Postgres.
-   MySQL.
-   Sqlite
-   Mongodb: free schema db.
-   Neo4J: graph based db
-   vector db

## Others

-   Try cal.com and dub.com githubs.

# Week-11 (Serverless Fns)

How we can use per request feature for a website rather than a website is up and running for a month without any requests

## Cloud providers

-   GCP
-   AWS
-   MS Azure

## How to host a website

1. Use VM machine on any cloud provider (always listening to request and pay month fees).
2. Use serverless (per request)

## Cons of serverless

-   More expensive at scale so probably stick to VM if requests are very frequent.
-   Cold start problem: if for wa while there is no request hits the server then it will got shut down and a new request will be slow since the server will start again for the service. This problem can be cured by using a warm pool to keep a single server running or pinging the server every 1-2 secs to keep it warm.

## Cloudflare

### Cloudflare workers

-   A service which has been run by cloudflare for running the javascript for hosting serverless fns.
-   Cloudflare workers DONT use the Node.js runtime. They have created their own runtime. There are a lot of things that Node.js has
-   **Cloudfare**: Most people go to cloudfare for the prevention of DDOS on the website.
-   **Wrangler** (devDependency): CLI of cloudflare.
-   **Hono**: sort of routing engine similar to express.

### host website/ deploy

-   run cmd: npx wrangler login
-   npx wrangler whoami
-   npm run deploy

## EC2 (amazon)

-   On demand resizable computing capacity in the Amazon Web Services (AWS) Cloud.
-   When we start an instance we should tell aws or the provider that i want world to access my data over 3000 port like we do in localhost:3000 to host the website locally.
-   There are only limited public IP's thats why we dont directly host from our machine by default.
-   The http port is 80 and https port is 443. By default these ports will be used to access a server.

### Connect to EC2

-   Get the .pem file from EC2.
-   SSH (Secure shell) into the server.
-   Chmod 700 yourpemfile.pem
-   run command `ssh -i yourpemfile.pem ubuntu@ipv4`
-   Read about why chomd 700 is rwx------@ and 7 = 111 (in binary)
-   Install node.js using **nvm** (node version manager).
-   start the node server.
-   Go to website = `https://ip-address:8080/`
-   NOTE: You cannot or should not run process on port 80 (http) and 443 (https). What if at the same server you have hosted 2 websites ? then who will access the port for http ?

#### How to keep running nodejs application even after exit ?

-   Download pm2 command `npm i -g pm2`
-   run `pm2 start index.js`

## NginX Reverse proxy (using NginX)

-   What is a proxy (client -> server) ? Suppose your browser denies a specific badwebsite.com then you can add a proxy which will access or proxied thought another server (VPN) and allowing you to access the badwebsite.com
-   What is reverse proxy (client -> many servers)? Routes a request to many different servers.

## Miscellaneous

-   Worker term is cloudflare specific, lambda is AWS, cloud fns is GCP (google) specific.
-   Check https://judge0.com/

## certbot

-   Get free cert for free for HTTPS

# Week-12

## Build vite project

-   run `npm run build`
-   The dist dir will have all the end code for distribution.
-   install server using `npm install -g serve` to see the dist output since running index.html will not work to see the webpage.

## NPM Serve

-   It will server all the static files and exposes those to the port.
-   If you run server cmd to any directory (other than dist) it will serve all the files to the port.
-   If the root dir is having index.html then the browser will know that the root dir is having a webpage data to serve.

## Deploying frontend to AWs

-   [Dailycode link](https://projects.100xdevs.com/tracks/w5E6PT2t0IyOFM3bZxcM/aws-fe-1)
-   How s3 works.
-   S3 bucket is just a way of storing things in different projects like structure. Eg.- youtube clone will have its own bucket and same for spotify.
-   If uploaded a file do not share the file/object directly from the object url present in the s3 console use CDN (AWS cloudfront)
-   These objects/images are stored in a storage rather than in SQL database because we only saved those data upon which we want to search like meta data of a video (but not a video), name, address.

## CDN (AWS Cloudfront)

-   Creates a cdn link for faster access.
-   If we have hosted a photo.jpg file on a north america server (**source of truth**) and most of the people are requesting it from indian then it will first send the file to the india server and will be cached (for maybe 2-3 hours of not requesting) for the indian users.
-   POP's (Point of presence): These are the servers which cache the objects/files. The servers are called pop in technical terms.
-   CDN's have multiple pop's all around the world.
-   CDN have a distribution cost as if a cricket game is streamed to a storage and its sending data to 100's of POP's the distribution cost is much more higher than storage data.
-   There are a lot of others CDN other than cloudfront, you can save data to s3 and use a different cloudfront.
-   Besides caching objects/files we can also cache html, js and css files as well.
-   NOTE: Libraries such as Next.js will not work as they do not provide static files for HTML, CSS, JS.

## Advance typescript

### Record

-   ts specific
-   To create an object for string as key and number as value
    `Record<string, number>`
-   To create a complex value object
    `Record<string, {age: number, name: string}>`
    Example

    ```ts
    type User = {
    name: string;
    age: number;
    email: string;
    };

    type Users = new Record<string, User>();

    const users : Users = {
        "akshat": { name: "Akshat Singh", age: 30, email: "a@gmail.com" },
        "aryan": { name: "aryan Singh", age: 20, email: "ar@gmail.com" },
    }

    const user = users["akshat"];
    console.log(user);
    ```

### Map

-   js specific also
-   It creates an object of key value pair
-   Gets nice and clean `obj.get()` method
-   **It makes more sense to use map rather than Record**.

```js
const users = new Map();
users.set("akshat", { name: "Akshat Singh", age: 30, email: "a@gmail.com" });

const user = users.get("akshat");
console.log(user);
```

Enforce schema

```ts
type User = {
    name: string;
    age: number;
    email: string;
};

const users = new Map<string, User>();
users.set("akshat", { name: "Akshat Singh", age: 30, email: "a@gmail.com" });

const user = users.get("akshat");
console.log(user);
```

### Pick

-   lets you pick types from another existing type.
-   Example

```ts
interface User {
    id: number;
    name: string;
    email: string;
}

type UserProfile = Pick<User, "name">;
type UserProfile2 = Pick<User, "name" | "email">;
```

### Exclude

-   Lets you exclude type from existing types
-   Example

```ts
type EventType = "click" | "scroll" | "mousemove";
type ExcludeEvent = Exclude<EventType, "scroll">; // 'click' | 'scroll'
const handleEvent = (event: ExcludeEvent) => {
    console.log(`handling event ${event}`);
};
handleEvent("click"); // ok
```

## Monorepos [see](./week-12/week-8-repo)

```
|--> frontend
|--> backend
|--> common

```

-   Single repo for backend and frontend.
-   Theres debate happened about whether to share single folder for backend and frontend or not.
-   A monorepo is a code management approach where all code for multiple projects, including components, libraries, and internal dependencies, is stored in a single centralized repository, often involving multiple programming languages and application types.

### Why no just import directly from common dir

-   The question is why cant we use the commons from the dir instead of uploading it to the npmjs ?
-   The first reason is typescript will throw error as it is out of its root dir.
-   Relative path is not recommended
    `import {X} from "../../common/src/index.js"`

### How to create or work with monorepos

-   Add all the common data in common folder. People also use package folder name.
-   npmjs.com is used to host this module as well.

### What is `d.ts` files ?

-   When converting .ts files to .js files using `tsc -b` command we often need type hinting for using published files as well. These type hinting will be present in the d.ts files after to javascript conversion.

## How to upload data to npmjs ?

1. Start uploading common folder to npmjs.
2. Login to npmjs `npm login`
3. Change the name and version in the package.json file.
4. Add `.npmignore` file and add src in the file to ignore src. We dont want to publish the ts files.
5. Run cmd `npm publish --access=public` to publish to the npmjs.
6. (optional) Run `npm pack` to see the packed files send to npmjs.

## Turbo repos

-   Website: turbo.build
-   Turbo is an incremental bundler and build system optimized for JavaScript and TypeScript, written in Rust.
-   command: `npx create-turbo@latest`
