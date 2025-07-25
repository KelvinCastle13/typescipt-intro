import React from 'react';

// Step 1: Start with a simple interface (our "blueprint")
interface Person {
  name: string;
  age: number;
}

// Step 2: A more complex interface with different data types
interface User {
  id: number;
  name: string;
  email: string;
  isAdmin: boolean;
}

// Step 3: An interface with arrays and more properties
interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  inStock: boolean;
  tags: string[]; // Array of strings
}

export function ObjectTypes() {
  // Using our simple Person interface
  const person: Person = {
    name: "John Doe",
    age: 28
  }; // ✅ Must have exactly these properties!

  // Using the User interface - TypeScript ensures we have all required properties
  const user: User = {
    id: 1,
    name: "Alice Johnson",
    email: "alice@example.com",
    isAdmin: true
  }; // ✅ All User properties present!

  // Using the Product interface with array data
  const product: Product = {
    id: 101,
    name: "Wireless Headphones",
    price: 99.99,
    category: "Electronics",
    inStock: true,
    tags: ["wireless", "bluetooth", "audio"] // String array as defined in interface
  }; // ✅ Follows Product interface exactly!

  // This would cause an error (uncomment to see):
  // const invalidUser: User = {
  //   name: "Bob"
  //   // Missing: id, email, isAdmin - TypeScript will complain!
  // };

  return (
    <div style={{ padding: '20px', border: '1px solid #ccc', margin: '10px' }}>
      <h2>Interfaces in Action</h2>

      <div style={{ marginBottom: '20px' }}>
        <h3>Simple Person Interface</h3>
        <p><strong>Name:</strong> {person.name}</p>
        <p><strong>Age:</strong> {person.age}</p>
      </div>

      <div style={{ marginBottom: '20px' }}>
        <h3>User Interface (with more properties)</h3>
        <p><strong>ID:</strong> {user.id}</p>
        <p><strong>Name:</strong> {user.name}</p>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Admin:</strong> {user.isAdmin ? 'Yes' : 'No'}</p>
      </div>

      <div>
        <h3>Product Interface (with arrays)</h3>
        <p><strong>Name:</strong> {product.name}</p>
        <p><strong>Price:</strong> ${product.price}</p>
        <p><strong>Category:</strong> {product.category}</p>
        <p><strong>In Stock:</strong> {product.inStock ? 'Yes' : 'No'}</p>
        <p><strong>Tags:</strong> {product.tags.join(', ')}</p>
      </div>

      <div style={{
        marginTop: '20px',
        padding: '15px',
        backgroundColor: '#f0f8ff',
        borderRadius: '5px'
      }}>
        <h4>💡 Key Takeaway</h4>
        <p>
          Interfaces ensure that every object of the same type has the same structure.
          If you try to create a User without an email, or a Product without a price,
          TypeScript will catch the error before your code runs!
        </p>
      </div>
    </div>
  );
}