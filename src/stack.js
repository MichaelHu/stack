class Stack {

    constructor() {
        this.stack = [];
        this.size = 0;
    }

    top() {
        let item = null;
        if ( this.size ) {
            item = this.stack[ this.size - 1 ];
        }
        return item;
    }

    bottom() {
        let item = null;
        if ( this.size ) {
            item = this.stack[ 0 ];
        }
        return item;
    }

    first( callback ) {
        let item = null, i = 0;
        while ( i < this.size ) {
            if ( !callback( this.stack[ i ] ) ) {
                i++;
            }
            else {
                item = this.stack[ i ];
                break;
            }
        }
        return item;
    }

    last( callback ) {
        let item = null, i = this.size - 1;
        while ( i >= 0 ) {
            if ( !callback( this.stack[ i ] ) ) {
                i--;
            }
            else {
                item = this.stack[ i ];
                break;
            }
        }
        return item;
    }

    each( callback ) {
        let i = 0;
        while ( i < this.size ) {
            callback( this.stack[ i ] );
            i++;
        }
    }

    pop() {
        let item = null;
        if ( this.size ) {
            item = this.stack.pop();
            this.size--;
        }
        return item;
    }

    push( item ) {
        if ( item !== null ) {
            this.stack.push( item );
            this.size++;
        }
    }

    popTill( callback ) {
        while ( this.top() !== null && !callback( this.top() ) ) {
            this.pop();
        }
    }

}

export default Stack;
