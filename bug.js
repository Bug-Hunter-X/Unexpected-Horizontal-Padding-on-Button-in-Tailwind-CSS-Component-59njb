```javascript
// my-component.js
function MyComponent() {
  return (
    <div className="bg-gray-100 p-4">
      <h1 className="text-3xl font-bold">My Component</h1>
      <p className="mt-2">This is a simple component.</p>
      <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Click Me</button>
    </div>
  );
}

export default MyComponent;
```

This code produces an unexpected visual output where the button has significant horizontal padding. The hover effect works correctly, but the initial padding is more than expected. This issue occurs even with no custom CSS overriding Tailwind's default styles.