---
title: Quick Start Example
description: Hello World of Performative Transactions.
---

## Create your first Performative Transaction

Every Performative Transaction is a transformation of values of a given variable.

```js
function getNextFrequency(currentFrequency) {
    const ratio = Math.pow(2, 1/12);
    const nextFrequency = currentFrequency \* ratio;
    return nextFrequency;
}

PT.create(variable_name=string, variable_value=float, starting_index=int, howmany=int){
    return getNextFrequency(variable_value);
}
```

Run the code with some values:

```js
PT.create("pitch", 130.8128, 0, 12);

// Frequencies of the chromatic scale of one octave, starting from middle c:
Output: [
  130.8128, 138.5913, 146.8324, 155.5635, 164.8138, 174.6141, 184.9972,
  195.9977, 207.6523, 220.0, 233.0819, 246.9417,
];
```
