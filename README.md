# isActual

A tiny utility for checking values in JavaScript

## Install

`$ npm install @lilylaw/isactual`

## Usage

`import isactual from @lilylaw/isactual`
or
`const isactual = require('@lilylaw/isactual')`

## API

- number: return true if input is an actual number value (as a int/float/string) and false if not (i.e. NaN, null, [1]...)
  - syntax: isActual.number(<value>)

## Development Setup

- Folk and clone the [repo](https://github.com/lily-law/isActual.git)
- cd into root
- `$ npm test` to build and runs the tests
- New test can be written in tests/test.ts
- Add or improve code in src/index.ts
- `$ npm run build` to rebuild lib

## Contributing 

If you find a bug, think of improvements, or want to suggest a new feature please feel free to folk or add an issue or both. 