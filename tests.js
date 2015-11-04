import test from 'tape'
import as   from './asarg'

test( 'Exposes this as the first argument', test => {
	test.equals(
		as( arg =>
			arg
		).call( this ),

		this
	)

	test.end()
} )

test( 'Retains this reference', test => {
	test.equals(
		as( arg =>
			this
		).call( this ),

		this
	)

	test.end()
} )

test( 'Retains arguments shifted once to the right', function( test ){
	const inputs = [ 'foo', 'bar' ]

	as( ( ...args ) => {
		test.equals( inputs[ 0 ], args[ 1 ] )

		test.equals( inputs[ 1 ], args[ 2 ] )

		test.end()
	} ).apply( this, inputs )
} )
