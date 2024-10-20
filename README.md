# PhotoLabs Dashboard
This is for testing class-based react

## Setup

Install dependencies with `npm install`.

## Running Webpack Development Server

```sh
npm start
```

Summary
We have covered eight of the topics relevant to the Class-based component API.

React.Component
We inherit the behaviour from a base component class provided by React. Sometimes we would see React.Component instead, if we aren't using named imports.

render()
We must define a render method in our class. It is the only method that must exist for a component to work in React.

this.props
React attaches the props object to the component instance. We can access props using this.props.

Initial State
We can initialize the state in the constructor or using class property syntax. We have decided not to use constructors for this project.

this.state
Similar to how props are attached to the instance, the same is true for this.state. We can access the state for the instance of the component using this.state.

this.setState
To change the existing state, we need to call the setState instance method provided by React. A component will render when after we called setState.

Instance Methods
There are instance methods that we inherit from React.Component like this.setState. We also create our own to help organize our logic.

Binding Context
When we start to pass functions around, we need to be careful of maintaining the correct context.

Component Lifecycle in React
Mount Phase:
Occurs once when a component instance is created.
Key lifecycle methods: constructor, render, componentDidMount.
Update Phase:
Occurs when a mounted component is updated.
Updates can happen through props or internal state changes.
Key lifecycle methods: render, componentDidUpdate.
Unmount Phase:
Occurs once when a component is removed.
Key lifecycle method: componentWillUnmount.