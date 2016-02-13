import test from 'tape'
import as   from './asarg'

test( 'Exposes this as the first argument', test => {
	test.equals(
		as( arg => arg ).call( this ),
		this
	)

	test.end()
} )

test( 'Retains this reference', test => {
	test.equals(
		as( function ( arg ){ return this } ).call( this ),
		this
	)

	test.end()
} )

test( 'Retains 1 argument shifted once to the right', function( test ){
	const inputs = [ 'foo' ]
	const self = this

	as( function ( ...args ){
		test.equals( self, this )
		test.equals( self, args[ 0 ] )
		test.equals( inputs[ 0 ], args[ 1 ] )

		test.end()
	} ).apply( this, inputs )
} )

test( 'Retains 2 arguments shifted once to the right', function( test ){
	const inputs = [ 'foo', 'bar' ]
	const self = this

	as( function ( ...args ){
		test.equals( self, this )
		test.equals( self, args[ 0 ] )
		test.equals( inputs[ 0 ], args[ 1 ] )
		test.equals( inputs[ 1 ], args[ 2 ] )

		test.end()
	} ).apply( this, inputs )
} )

test( 'Retains 3 arguments shifted once to the right', function( test ){
	const inputs = [ 'foo', 'bar', 'baz' ]
	const self = this

	as( function ( ...args ){
		test.equals( self, this )
		test.equals( self, args[ 0 ] )
		test.equals( inputs[ 0 ], args[ 1 ] )
		test.equals( inputs[ 1 ], args[ 2 ] )
		test.equals( inputs[ 2 ], args[ 3 ] )

		test.end()
	} ).apply( this, inputs )
} )

test( 'Retains 4 arguments shifted once to the right', function( test ){
	const inputs = [ 'foo', 'bar', 'baz', 'spam' ]
	const self = this

	as( function ( ...args ){
		test.equals( self, this )
		test.equals( self, args[ 0 ] )
		test.equals( inputs[ 0 ], args[ 1 ] )
		test.equals( inputs[ 1 ], args[ 2 ] )
		test.equals( inputs[ 2 ], args[ 3 ] )
		test.equals( inputs[ 3 ], args[ 4 ] )

		test.end()
	} ).apply( this, inputs )
} )

test( 'Retains 5 arguments shifted once to the right', function( test ){
	const inputs = [ 'foo', 'bar', 'baz', 'spam', 'eggs' ]
	const self = this

	as( function ( ...args ){
		test.equals( self, this )
		test.equals( self, args[ 0 ] )
		test.equals( inputs[ 0 ], args[ 1 ] )
		test.equals( inputs[ 1 ], args[ 2 ] )
		test.equals( inputs[ 2 ], args[ 3 ] )
		test.equals( inputs[ 3 ], args[ 4 ] )
		test.equals( inputs[ 4 ], args[ 5 ] )

		test.end()
	} ).apply( this, inputs )
} )

test( 'Retains 10 arguments shifted once to the right', function( test ){
	const inputs = [
		'foo', 'bar', 'baz', 'spam', 'eggs',
		'one', 'two', 'three', 'four', 'five'
	]
	const self = this

	as( function ( ...args ){
		test.equals( self, this )
		test.equals( self, args[ 0 ] )
		test.equals( inputs[ 0 ], args[ 1 ] )
		test.equals( inputs[ 1 ], args[ 2 ] )
		test.equals( inputs[ 2 ], args[ 3 ] )
		test.equals( inputs[ 3 ], args[ 4 ] )
		test.equals( inputs[ 4 ], args[ 5 ] )
		test.equals( inputs[ 5 ], args[ 6 ] )
		test.equals( inputs[ 6 ], args[ 7 ] )
		test.equals( inputs[ 7 ], args[ 8 ] )
		test.equals( inputs[ 8 ], args[ 9 ] )
		test.equals( inputs[ 9 ], args[ 10 ] )

		test.end()
	} ).apply( this, inputs )
} )
