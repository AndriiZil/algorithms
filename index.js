const numbers = [1, 2, 3, 4, 5, 7, 2, 2];
const set = new Set(numbers); // =>
const uniq = Array.from(new Set(numbers));
const uniq2 = [... new Set(numbers)];

console.log(set); // => Set { 1, 2, 3, 4, 5, 7 }

// Масив унікальних значень
console.log(uniq); // Uniq values
console.log(uniq2);
// ************************************************************************
const initial = [ {id: 1, score: 1}, {id: 2, score: 2}, {id: 3, score: 4}];
const newValue = {id: 3, score: 3};
// Оновлення масива по властивості
const updated = initial.map(x => x.id === newValue.id ? newValue : x);

console.log(updated); // => [ { id: 1, score: 1 }, { id: 2, score: 2 }, { id: 3, score: 3 } ]
// ************************************************************************
const rempvedId = 2;
// Видалення обєкта по властивості
const without2 = initial.filter(x => x.id !== rempvedId); // => [ { id: 1, score: 1 }, { id: 3, score: 4 } ]

console.log(without2);
// ************************************************************************
const obj = {
  foo: 'bar',
  useFull: 1,
  useLess: 2
}

// видалення проперті з обєкта
const { useLess, ...clean } = obj;
console.log(clean); // => { foo: 'bar', useFull: 1 }

// обєднання масива обєктів
const data = [ {a: 1}, {b: 2}, {c: 3} ];
const merged = data.reduce((res, obj) => ({ ...res, ...obj }), {});

console.log(merged); // => { a: 1, b: 2, c: 3 }

// обєднання масива обєктів
const toMerge = [
  { id: 1, value: 'a', },
  { id: 2, value: 'b', },
  { id: 3, value: 'c' },
  { id: 1, score: 1 },
  { id: 2, score: '2' },
];

const mergedByProperty = toMerge.reduce((result, obj) => ({
  ...result,
  [obj.id]: {
    ...result[obj.id],
    ...obj
  }
}), {});
/*
  *{ '1': { id: 1, value: 'a', score: 1 },
  *  '2': { id: 2, value: 'b', score: '2' },
  *  '3': { id: 3, value: 'c' } }
 */

console.log(mergedByProperty);

// Трансформація масива
const arrayOfArray = [ [1, 2], [3, 4], [[5, 6]] ];
const flattened = arrayOfArray.reduce((res, a) => [...res, ...a], [] );

console.log(flattened); // => [1, 2, 3, 4, [5, 6]];

// Перетворення масива в ключ значення

const pairs = [['a', 1], ['b', 2], ['c', 3]];
const asObjects = pairs.reduce((res, [key, value]) => ({ ...res, [key]: value }), {});

console.log(asObjects); // => { a: 1, b: 2, c: 3  }

// Видалення повторюваних значень з масивів
const s1 = [ 1, 2, 3, 4, 5 ];
const s2 = [ 2, 4 ];
const subtracted = s1.filter(x => s2.indexOf(x) < 0);

console.log(subtracted); // => [ 1, 3, 5 ]
