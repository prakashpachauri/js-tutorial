const array=[]
// %DebugPrint(array)

// Continuous Holy

// SMI (Small integer)
// Packed Element
// Double (float,String,function)

const arrtwo=[1,2,3,4,5]
// Packed SMI  Element

arrtwo.push(6.0)
console.log(arrtwo)
// PACKED DOUBLE ELEMENT

// This is packed Element
arrtwo.push('7')
console.log(arrtwo)
// PACKED ELEMENT

arrtwo[10]=11
// HOLY_ELEMENT

console.log(arrtwo)
console.log(arrtwo.length)
console.log(arrtwo[9])


//bound Check
// hasownproperty(arrtwo,9)
// hasownproperty(arrtwo.prototype,9)
// hasownproperty(object.prototype,10)

// hole are very expensive in js


const arrthree=[1,2,3,4,5]
console.log(arrthree[2])


// SMI >> DOUBLE>> PACKED
// H_SMI>> H_DOUBLE>>PACKED

const arrfour= new Array(3)
// Just three holes . HOLY_SMI ELEMENTS
arrfour[0]='1'  // HOLY ELEMENTS
arrfour[1]='2'  // HOLY ELEMENTS
arrfour[2]='3'  // HOLY ELEMENTS

const arrfive=[]
arrfive.push('1') // PACKED ELEMENTS
arrfive.push('2') // PACKED ELEMENTS
arrfive.push('3') // PACKED ELEMENTS

// array 6

const arrsix=[1,2,3,4,5]
arrsix.push(Infinity)  // Double
arrsix.pop(Infinity)

console.log(arrsix)

// for , for-of , for Each 



