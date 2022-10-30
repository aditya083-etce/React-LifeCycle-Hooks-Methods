# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).


## React Component LifeCycle (using Class based Component)

Diagram: [react-lifecycle-methods-diagram/](https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/)

Documentation: [react-lifecycle-class-methods/](https://reactjs.org/docs/react-component.html#componentdidmount)

*following methods are used:*

### componentDidMount() 
Used to render component for the **first time.**\
**This is only called when the component is added to the DOM.**

This method is a good place to set up any subscriptions. If you do that, don’t forget to unsubscribe in componentWillUnmount().

You should not call setState() immediately in componentDidMount(). It will trigger an extra rendering, but it will happen before the browser updates the screen. This guarantees that even though the render() will be called twice in this case, the user won’t see the intermediate state.

If you want to call setState() then use condition or setTimeout().

### constructor() 
*If you don’t initialize state and you don’t bind methods, you don’t need to implement a constructor for your React component.*

It is called **before mouting** (before componentDidMount()).\
React constructors are only used for two purposes -- 
- Initializing local state by assigning an object to this.state.
- Binding event handler methods to an instance.

### render() 
The render() function should be **pure**, meaning that it **does not modify component state**, it returns the same result each time it’s invoked, and it does not directly interact with the browser.

If you need to interact with the browser, perform your work in componentDidMount() or the other lifecycle methods instead. Keeping render() pure makes components easier to think about.

### componentWillUnmount() 
componentWillUnmount() is invoked immediately before a component is unmounted and destroyed.\ Perform any necessary cleanup in this method, such as invalidating timers, canceling network requests, or cleaning up any subscriptions that were created in componentDidMount().

*You should not call setState() in componentWillUnmount() because the component will never be re-rendered. Once a component instance is unmounted, it will never be mounted again.*

### componentDidUpdate() 
*componentDidUpdate() is invoked immediately after updating occurs. This method is not called for the initial render.*

Use this as an opportunity to operate on the DOM when the component has been updated. This is also a good place to do network requests as long as you compare the current props to previous props (e.g. a network request may not be necessary if the props have not changed).

**To use this there should be a child parent relationship between classes i.e. the prop which is passed from Parent class to the Child class. If it matches the Child component should not render as there is no update but if it doesn't match then the component should render**.\
this is done by using **prevProps.number !== this.props.number** -- number is the prop passed to the child and the component should render.

*rarely used--*

### shouldComponentUpdate()
*Here also child parent relationship between classes should be maintained.*

Use shouldComponentUpdate() to let React know if a **component’s output is not affected by the current change in state or props**. The default behavior is to re-render on every state change, and in the vast majority of cases you should rely on the default behavior.

shouldComponentUpdate() is invoked before rendering when new props or state are being received. **Defaults to true.** This method is not called for the initial render or when forceUpdate() is used.

*componentDidUpdate() and render() will not be invoked if shouldComponentUpdate() returns false*.

### getSnapshotBeforeUpdate()
*Here also child parent relationship between classes should be maintained.*

getSnapshotBeforeUpdate() is invoked right before the most recently rendered output is committed to e.g. the DOM. It **enables your component to capture some information from the DOM (e.g. scroll position) before it is potentially changed.** Any value returned by this lifecycle method will be passed as a parameter to componentDidUpdate() as **snapshot**.\
It is uncommon to use but can be used for UI.\
A snapshot value **(or null)** should be returned.

### static getDerivedStateFromProps()
getDerivedStateFromProps is invoked right before calling the render method, both on the initial mount and on subsequent updates. **It should return an object to update the state, or null to update nothing.**

*This method exists where the state depends on changes in props over time,**it allows us to copy data from props to the state***.

use cases -- 
- **re-compute some data only when a prop changes**
- **reset some state when a prop changes**

### componentDidCatch() 
This lifecycle is invoked **after an error has been thrown by a descendant component**. It receives two parameters:
- **error** - The error that was thrown.
- **info** - An object with a componentStack key containing information about which component threw the error.

componentDidCatch() is called during the “commit” phase, so side-effects are permitted. It should be used for things like *logging errors*.

*here Error Component insertd in DOM if showErrorComponent is true. This gets detected by this lifecycle method and an error is thrown into the state*.

## React Component LifeCycle (using Functional based Hooks)

Documentation: [react-lifecycle--using-hooks/](https://reactjs.org/docs/hooks-effect.html#tip-optimizing-performance-by-skipping-effects)

*following hooks are used:*

### useState
**useState is a Hook that lets you add React state to function components.**

It returns a pair of values: the current state and a function that updates it. This is why we write /
**const [count, setCount] = useState()**

### useEffect
*The Hook lets you perform side effects in function components. Data fetching, setting up a subscription, and manually changing the DOM in React components are all examples of side effects.*

**useEffect Hook as componentDidMount, componentDidUpdate, and componentWillUnmount combined.**

useEffect do run after every render. By default, it runs both after the first render and after every update. But it can be modified to achive mounting, updating and unmounting.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).


### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)