import { test } from 'qunit';

test( 'ractive.subtract("foo") subtracts 1 from the value of foo', t => {
	let ractive = new Ractive({
		data: { foo: 10 }
	});

	ractive.subtract( 'foo' );
	t.equal( ractive.get( 'foo' ), 9 );

	ractive.subtract( 'foo' );
	t.equal( ractive.get( 'foo' ), 8 );
});

test( 'ractive.subtract("foo",x) subtracts x from the value of foo', t => {
	let ractive = new Ractive({
		data: { foo: 10 }
	});

	ractive.subtract( 'foo', 2 );
	t.equal( ractive.get( 'foo' ), 8 );

	ractive.subtract( 'foo', 3 );
	t.equal( ractive.get( 'foo' ), 5 );
});
