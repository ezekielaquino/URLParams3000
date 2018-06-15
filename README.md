# URLParams3000

A simple utility to query URLSearchParameters.

Weighing in at 1.5kb including polyfills.

## Usage

```js
  import URLParams from 'urlparams3000';

  const searchParams = new URLParams();

  // query the search parameters
  // www.amazingwebsite.com/test?&kiwis=1&bananas=2&delicious=yes
  const currentParams = searchParams.query();

  console.log(currentParams);

  // return an object with current url parameters
  // { kiwis: '1', bananas: '2', delicious: 'yes' }
```