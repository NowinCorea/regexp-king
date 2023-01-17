let str = `
010-1234-5678
the kingchan@gmail.com
https://www.omdbapi.com/?apikey=7035c60c&s=frozen
The quick brown fox jumps over the lazy dog.
abbcccddddeeeee
죽고_싶은게 아니라 이렇게 살고 싶지 않을 뿐. 
`;

// 정규표현식
// const regexp = new RegExp("the", "g");

// 리터럴방식
// const regexp = /fox/g;
// console.log(regexp.test (str))
// console.log(str.replace(regexp, "AAA"));
// str = str.replace(regexp, "AAA");

// console.log(str);

// console.log(str.match(/^t/gim));

// console.log(str.match(/\bf\w{1,}/g));

// const h = `  the hello  world   !

// `;

// console.log(h.replace(/\s/g, ""));
console.log(str.match(/(?<=@).{1,}/g));
