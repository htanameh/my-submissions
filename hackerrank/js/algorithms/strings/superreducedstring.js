function superReducedString(s) {
	 return s.split('').reduce((acc, item) => {
		 console.log(acc, item);
		 if(acc.length && acc[acc.length - 1] === item){
			 return acc;
		 }
		 return acc + item;
	 }, '')
}

console.log(superReducedString('aaabccddd'));