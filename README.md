# Day 1 TypeScript Task

This repository contains practice exercises for TypeScript covering basic to intermediate concepts.

---

## 1. Basic Type & Interface Practice
**Goal:** Define `User` interface with optional fields  
**Note:** Use `name`, `email`, `phone?`, `active?`

---

## 2. Union & Type Narrowing
**Goal:** Handle `number | string` input safely  
**Note:** Check type before using (`typeof` guard)

---

## 3. Array & Object Typing
**Goal:** Type a list of products  
**Note:** `Product[]` with `name`, `price`, `inStock`

---

## 4. Function with Generics
**Goal:** Create `getFirstItem<T>(arr: T[]): T | null`  
**Note:** Return first element or `null`

---

## 5. Readonly & Partial Utility
**Goal:** Use `Readonly` and `Partial` with interfaces  
**Note:** `Partial<User>` for update form

---

## 6. Type Assertion & Casting
**Goal:** Safely cast `unknown` to `string`  
**Note:** Use `as string` only after checking type

---

## 7. Enum & Literal Type
**Goal:** Define enum `Role { Admin, User }`  
**Note:** Restrict variable type: `let role: Role = Role.Admin`

---

## 8. Function Return Type Practice
**Goal:** Type function that returns `Promise<User[]>`  
**Note:** Practice `async/await` + return type annotation

---

## Summary
These exercises help to understand:

- Type safety with TypeScript  
- Generic functions and array/object typing  
- Utility types: `Readonly` and `Partial`  
- Type assertion & casting  
- Enums and literal types  
- Async functions with proper return type
