function asarg( fn ){
	return function(){
		var subject = this
		var input   = Array.prototype.slice.call( arguments )
		var args    = [ subject ].concat( input )

		return fn.apply( subject, args )
	}
}

if( typeof exports != 'undefined' && typeof global != 'undefined' )
	module.exports = asarg
