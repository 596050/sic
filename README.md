# sic-list

![Travis (.org)](https://img.shields.io/travis/596050/sic)
![Codecov](https://img.shields.io/codecov/c/github/596050/sic?token=555be04c-ccfa-41c4-8b86-d3f887213890)

Maps Standard Industial Classification (SIC) codes to English descriptions and vice versa.

https://www.npmjs.com/package/sic-list

Available in typescript

https://www.npmjs.com/package/@types/sic-list

## Example

```js
const { getCode, getDescription } = require("sic-list");

// codes must be strings
console.log(getDescription("43290")); // "Other construction installation"

console.log(getCode("Operation of rail freight terminals")); // "52211"

console.log(getCode("01101000 01100101 01101100 01101100 01101111")); // undefined
```

How to change the description for a code

```js
const { overwrite, getDescription } = require("sic-list");

overwrite([
  { code: "01230", description: "Growing of citrus fruits and wild mushrooms" }
]);

console.log(getDescription("01230")); // "Growing of citrus fruits and wild mushrooms"
```

## Methods

Usage:

```js
const sicList = require("sic-list");
```

All input is case-insensitive.

### overwrite(sics)

Expects an array of sic objects containing `code` and `description` properties.

Replaces a description for a given code.

```js
[
  {
    code: "01210",
    description: "Growing of white, black and red grapes"
  }
];
```

### getDescription(code)

Expects an sic code.

Returns the description for that sic code.

If not found, it returns `undefined`.

### getCode(description)

Expects the English sic description.

Returns the code for that country.

If not found, it returns `undefined`.

### getDescriptions()

Returns an array of all sic descriptions.

### getCodes()

Returns an array of all sic codes.

### getDescriptionList()

Returns a key-value object of all sics with the description as key.

### getCodeList()

Returns a key-value object of all sics with the code as key.

### getData()

Returns an array of all sic information, in the same format as it gets imported.

## Install

```cli
npm install sic-list

or

yarn add sic-list
```

For typescript

```cli
npm install @types/sic-list

or

yarn add @types/sic-list
```

## License

MIT

## Source

Uses data from the Office of National Statistics (UK SIC 2007)

Which makes the list of SIC codes available free of charge.
