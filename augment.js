/*
	augment.js

	This function will add (deeply) any standard objects and arrays.
	It augments (modifies) o1 with o2.
	This is meant for configuration only, and will likely have undesirable 
	results with more complex objects, or if you try to mash an object with an array.
*/
var augment = function(o1, o2) {
	var i, oldArrays = {};
	//	We use only the objects own properties
	for (i in o2) {if(o2.hasOwnProperty(i)) {
		if (o2[i] && o2[i].constructor && o2[i].constructor === Object) {
			//	Deal with objects (recurse)
			o1[i] = o1[i] || {};
			arguments.callee(o1[i], o2[i]);
		} else if( Object.prototype.toString.call( o1[i] ) === '[object Array]' ) {
			//	Deal with Array
			if(o2[i] && Object.prototype.toString.call(o2[i]) === '[object Array]') {
				o1[i] = o1[i].concat(o2[i]);
			}
		} else {
			o1[i] = o2[i];
		}
	}}

	return o1;
};