---
title: 'Fake blog post'  
subtitle: 'It's about Typescript. Thanks AI!'
date: '2023-03-01' 

---

This is an AI generaated, placeholder blog post.

TypeScript adds static type checking to JavaScript to catch bugs and improve autocomplete. Here's how to use it with React:

## Install Dependencies

npm install --save typescript @types/react @types/node

Also install types for React DOM and Jest if using them.

## Configure tsconfig.json

Set `"jsx": "react"` and `"module": "esnext"` to support React 17+ JSX transform and ESM.

## Rename Files to .tsx

Change components from `.js` to `.tsx` to enable TS checks.

## Add Types

Add types like`:

```ts
const message: string = 'Hello World' 

interface Props {
  title: string
}

const App = (props: Props) => {
  //...
}
Component Props
Props can be interfaces or objects:

tsx

Copy code

interface User {
  name: string
  age: number
}

const User: React.FC<{user: User}> = () => {
  //...
}
That covers the basics! TypeScript takes a little setup but catches a lot of errors. Custom hook and context typing is also useful.
