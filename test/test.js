var Stack = require( '../dist/stack.js' ).default;

var expect = require( 'chai' ).expect;

describe( 'test stack', function() {
    
    var stack;

    before( function() {
        stack = new Stack();
    } );

    it( 'push and pop correctly', function() {
        expect( stack.size ).to.be.equal( 0 );
        stack.push( 'item 1' );
        expect( stack.size ).to.be.equal( 1 );
        expect( stack.top() ).to.be.equal( 'item 1' );
        expect( stack.size ).to.be.equal( 1 );
        expect( stack.pop() ).to.be.equal( 'item 1' );
        expect( stack.size ).to.be.equal( 0 );
    } );
} );
