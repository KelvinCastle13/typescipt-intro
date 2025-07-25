import React from 'react';

export function BasicTypes() {
  // Explicit types (you write the type annotation)
  const message: string = "Hello, TypeScript!";
  const count: number = 42;
  const isActive: boolean = true;

  // Inferred types (TypeScript figures it out automatically)
  const inferredString = "I'm automatically a string"; // TypeScript infers: string
  const inferredNumber = 100; // TypeScript infers: number
  const inferredBoolean = false; // TypeScript infers: boolean

  // Arrays - when to be explicit vs when inference works
  const explicitNumbers: number[] = [1, 2, 3, 4, 5]; // Explicit
  const inferredFruits = ["apple", "banana", "orange"]; // Inferred as string[]

  // Empty arrays need explicit types
  const emptyItems: string[] = []; // Must be explicit - TypeScript can't guess

  // Alternative array syntax
  const colors: Array<string> = ["red", "green", "blue"];

  // Function parameters always need types, return types often inferred
  const calculateArea = (width: number, height: number) => {
    return width * height; // Return type 'number' is inferred
  };

  const area = calculateArea(10, 5); // TypeScript knows 'area' is a number

  return (
    <div style={{ padding: '20px', border: '1px solid #ccc', margin: '10px' }}>
      <h2>Basic Types & Inference Example</h2>

      <div style={{ marginBottom: '15px' }}>
        <h3>Explicit Types:</h3>
        <p><strong>Message:</strong> {message}</p>
        <p><strong>Count:</strong> {count}</p>
        <p><strong>Is Active:</strong> {isActive ? 'Yes' : 'No'}</p>
      </div>

      <div style={{ marginBottom: '15px' }}>
        <h3>Inferred Types:</h3>
        <p><strong>Inferred String:</strong> {inferredString}</p>
        <p><strong>Inferred Number:</strong> {inferredNumber}</p>
        <p><strong>Inferred Boolean:</strong> {inferredBoolean ? 'Yes' : 'No'}</p>
      </div>

      <div style={{ marginBottom: '15px' }}>
        <h3>Arrays:</h3>
        <p><strong>Explicit Numbers:</strong> [{explicitNumbers.join(', ')}]</p>
        <p><strong>Inferred Fruits:</strong> [{inferredFruits.join(', ')}]</p>
        <p><strong>Empty Items:</strong> [{emptyItems.join(', ') || 'Empty array'}]</p>
        <p><strong>Colors:</strong> [{colors.join(', ')}]</p>
      </div>

      <div>
        <h3>Function Example:</h3>
        <p><strong>Area (10 × 5):</strong> {area}</p>
      </div>
    </div>
  );
}