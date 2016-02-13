function asarg( fn ){
	'use strict'

	return function(){
		// Optimize the common case of a low-ish number of arguments. Engines
		// are very good at optimizing function calls with consistent numbers of
		// arguments.
		switch (arguments.length) {
		case 0: return fn.call( this, this )
		case 1: return fn.call( this, this, arguments[ 0 ] )
		case 2: return fn.call( this, this, arguments[ 0 ], arguments[ 1 ] )

		case 3:
			return fn.call( this, this,
				arguments[ 0 ],
				arguments[ 1 ],
				arguments[ 2 ] )

		case 4:
			return fn.call( this, this,
				arguments[ 0 ],
				arguments[ 1 ],
				arguments[ 2 ],
				arguments[ 3 ] )

		default:
			var subject = this
			var input   = Array.prototype.slice.call( arguments )
			var args    = [ this ].concat( input )

			return fn.apply( this, args )
		}
	}
}

if( typeof exports != 'undefined' && typeof global != 'undefined' )
	module.exports = asarg
