# TypeScript OOP Examples 🚀

Welcome to the **TypeScript OOP Examples** repository! This repo contains practical examples demonstrating Object-Oriented Programming (OOP) concepts using TypeScript. Whether you're a beginner or looking to refine your skills, you'll find clear examples to help you master TypeScript's OOP features.

---

## 📝 Table of Contents
- [Introduction](#introduction)
- [Key Concepts Covered](#key-concepts-covered)
- [Examples](#examples)
- [Getting Started](#getting-started)
- [Contributing](#contributing)
- [License](#license)

---

## 💡 Introduction
This repository provides a collection of TypeScript code snippets focusing on key OOP principles like **Classes**, **Inheritance**, **Encapsulation**, **Polymorphism**, and **Abstraction**. These examples are designed to help you learn how to structure and organize your TypeScript code effectively using OOP principles.

---

## 🔑 Key Concepts Covered

- **Classes & Objects**: Defining classes and creating objects in TypeScript.
- **Encapsulation**: Using access modifiers (`public`, `private`, `protected`) to control access to class properties and methods.
- **Inheritance**: Extending classes and reusing code in TypeScript.
- **Polymorphism**: Using method overriding and interfaces for flexible design.
- **Abstraction**: Abstract classes and interfaces to define common behavior and structure.

---

## 💻 Examples

### 1. **Classes and Objects**

```typescript
class Person {
  constructor(public name: string, public age: number) {}

  greet() {
    console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`);
  }
}

const person = new Person('Alice', 30);
person.greet(); // Output: Hello, my name is Alice and I'm 30 years old.