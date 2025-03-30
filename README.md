# TypeScript Masterclass 2025 Edition - React + NodeJS Project

[Udemy](https://www.udemy.com/course/typescript-course/)


## Section 1: TypeScript Introduction
```
$ tsc index.ts
```

```
$ node index.js
```

```
$ npx tsc index.js
```
most recent executable is picked up from npm. if you have TypeScript 5.3 running on your computer and the latest executable is 5.7 on npm, then tsc is going to compile using 5.7.

The ts config file is not respected, and the version of TypeScript also changes.

```
$ tsc --init
```

```
$ tsc watch
```

## Section 2: Primitive Types
In Javascript, a primitive type is a data that is not an object and has no methods or properties. A primitive value is represented directly at the lowest level of the language implementation.

Primitive Types in Javascript
string	number		boolean
null	undefined	Bigint
		Symbol

Any expression that resolves as a string is considered as type of string by TypeScript. \
Any expression that resolves into a number is also considered as a number type by TypeScript. \
Any expression that resolves into a boolean is also considered as a boolean type by TypeScript.

Any expression that evaluates to a bigInt is also a bigInt itself.
bigInt cannot be generated with floating point numbers.
bigInt do not have overlaps with number.

## Section 3 Exploring TypeScript's Type System



