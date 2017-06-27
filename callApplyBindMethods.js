var addMe = function(a, b, c, d){
	return this.num + a + b +c + d;
}
addMe.call(obj, 10, 20, 30, 40);
