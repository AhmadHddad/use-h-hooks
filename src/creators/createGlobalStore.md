## Creating the Global Store

The global store is created using the `createGlobalStore` function from `use-h-hooks`. The store contains two values: `count` (default value `0`) and `name` (default value `"Hello"`).

```javascript
import { createGlobalStore } from "use-h-hooks";

export const useStore = createGlobalStore({ count: 0, name: "Hello" });
```

## Components

### ComponentA

This component uses the `count` value from the global store. It displays the current count and increments it by one when the button is clicked.

```javascript
const ComponentA = () => {
  const [storeState, setStoreState] = useStore(["count"]);

  return (
    <div>
      <p>Count is {storeState.count}</p>
      <button onClick={() => setStoreState((prev) => ({ count: prev.count + 1 }))}>
        Click me
      </button>
    </div>
  );
};
```

### ComponentB

This component uses both `count` and `name` values from the global store. It displays the `name` and the `count`. When the button is clicked, it updates the `name` to `"Hello World!"`.

```javascript
const ComponentB = () => {
  const [storeState, setStoreState] = useStore(["count", "name"]);

  return (
    <div>
      <h1>{storeState.name}</h1>
      <p>Count is {storeState.count}</p>
      <button onClick={() => setStoreState({ name: "Hello World!" })}>
        Click me
      </button>
    </div>
  );
};
```

## Usage

To use the components in your application, simply import and render them:

```javascript
import ComponentA from './ComponentA';
import ComponentB from './ComponentB';

const App = () => (
  <div>
    <ComponentA />
    <ComponentB />
  </div>
);

export default App;
```

### Explanation

- `createGlobalStore`: This function creates a global store with an initial state that can be accessed and modified by multiple components.
- `useStore`: This hook provides access to the global state, allowing components to read and update the store's values.
  - The first argument to `useStore` is an array of keys specifying which parts of the global store the component needs access to.
  - `storeState`: The current state of the store, scoped to the selected keys.
  - `setStoreState`: A function to update the global state.

### Example Output

- **ComponentA**: Displays the `count` and increments it by clicking the button.
- **ComponentB**: Displays the `name` and `count`. Clicking the button changes `name` to `"Hello World!"`.
