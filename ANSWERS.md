- [ ] Why would you use class component over function components (removing hooks from the question)?

    Class components can manage state by calling state from React.Component and able to uses lifecycle hooks, which can wait for specific events to run code.
    
- [ ] Name three lifecycle methods and their purposes.

        componentDidMount:  runs after the component has mounted, used for axios calls 
        componentDidUnmount: runs after the component has been unmounted, updating after a component is no longer mounted componentDidUpdate: runs as soon as the component has finished updating. Reacting to what the DOM is doing.

- [ ] What is the purpose of a custom hook?

        Allows you to extract the state logic into a reusable bit of code that can be consumed in components of the app. Keep code DRY.

- [ ] Why is it important to test our apps?

    Helps find bugs faster, acts as documentation and a safety net, teaches to write 'better' more testable code.