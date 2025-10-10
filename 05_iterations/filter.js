const arr = [3,5,6,7,8,9]

const game = arr.forEach((val) => { 
    // console.log(val);
    return val > 4
})


// console.log print elements but return donot print the elements

// filter method 

// if we want to print only those no which is greater than 5 basically a condition then we use filter method

// it doesn't mean that foreach cannot do it but it not return the value

// const print = arr.filter((num) => num > 4)
// const print = arr.filter((num) => (num > 4))
const print = arr.filter((num) => {return num > 4})

// if we write arrow function in curly braces then we have to write return also

console.log(print);

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];


  const userBooks = books.filter((book)=> ( book.genre == "History"))

  console.log(userBooks);
//    {
//     title: 'Book Three',
//     genre: 'History',
//     publish: 1999,
//     edition: 2007
//   },
//   {
//     title: 'Book Seven',
//     genre: 'History',
//     publish: 1986,
//     edition: 1996
//   }
// ]

  
  const userBooks2 = books.filter((edtn)=>(edtn.edition == "2004"))

  console.log(userBooks2);
  
// { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 }


const userBooks3 = books.filter((flt)=> (flt.publish >= 1980 && flt.genre == "Fiction"))

console.log(userBooks3);

// [
    //   { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    //   { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 }
    // ]
    
    const userBooks4 = books.filter((flt)=> (flt))
    console.log(userBooks4);
    