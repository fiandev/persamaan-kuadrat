# persamaan kuadrat

![version](https://img.shields.io/npm/v/persamaan-kuadrat?label=persamaan-kuadrat)
![size](https://img.shields.io/bundlephobia/min/persamaan-kuadrat?label=size)
![persamaan-kuadrat](https://img.shields.io/npm/dw/persamaan-kuadrat)

program ini dibuat untuk menghitung persamaan kuadrat dengan cepat dan mudah.

## cara penggunaan
### bentuk umum persamaan kuadrat

> ax² + bx + c = 0

### mencari x1 dan x2 dari persamaan kuadrat
contoh soal : carilah akar² dari persamaan kuadrat berikut:

>  x2 + 5x - 6 = 0

dengan menggunakan program ini, cukup tulisan baris kode berikut:
```javascript
const { ABC } = require("persamaan-kuadrat");

// untuk mendapatkan atribut² dari persamaan 1
let result = ABC({
  a: 1, // nilai a
  b: 5, // nilai b
  c: -6 // nilai c
});

console.log(result)

// hasilnya seperti ini
/* { 
 *   x1: 1, 
 *   x2: -6 
 * }
*/
```

### mencari persamaan kuadrat dari akar² kuadrat yang diketahui

> carilah persamaan kuadrat dari akar² 1 dan -6

```javascript
const { fromRootToEquation } = require("persamaan-kuadrat");

let x1 = 1;
let x2 = -6;
let result = fromRootToEquation(x1, x2);
/*
 * { 
 *     equation: 'x² + 5x - 6', 
 *     general: 'x² + 5x - 6 = 0' // bentuk umum 
 *  }
 */
```

## instalasi
install melalui npm
```shell
npm install persamaan-kuadrat --save
```