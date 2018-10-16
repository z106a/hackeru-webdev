var start = Date.now();

var arr = [];
for (let i=0; i<1000; i++){
	arr.push(i);
}
console.log(Date.now() -start);
