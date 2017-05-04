"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Stack = function () {
    function Stack() {
        _classCallCheck(this, Stack);

        this.stack = [];
        this.size = 0;
    }

    _createClass(Stack, [{
        key: "top",
        value: function top() {
            var item = null;
            if (this.size) {
                item = this.stack[this.size - 1];
            }
            return item;
        }
    }, {
        key: "bottom",
        value: function bottom() {
            var item = null;
            if (this.size) {
                item = this.stack[0];
            }
            return item;
        }
    }, {
        key: "first",
        value: function first(callback) {
            var item = null,
                i = 0;
            while (i < this.size) {
                if (!callback(this.stack[i])) {
                    i++;
                } else {
                    item = this.stack[i];
                    break;
                }
            }
            return item;
        }
    }, {
        key: "last",
        value: function last(callback) {
            var item = null,
                i = this.size - 1;
            while (i >= 0) {
                if (!callback(this.stack[i])) {
                    i--;
                } else {
                    item = this.stack[i];
                    break;
                }
            }
            return item;
        }
    }, {
        key: "each",
        value: function each(callback) {
            var i = 0;
            while (i < this.size) {
                callback(this.stack[i]);
                i++;
            }
        }
    }, {
        key: "pop",
        value: function pop() {
            var item = null;
            if (this.size) {
                item = this.stack.pop();
                this.size--;
            }
            return item;
        }
    }, {
        key: "push",
        value: function push(item) {
            if (item !== null) {
                this.stack.push(item);
                this.size++;
            }
        }
    }, {
        key: "popTill",
        value: function popTill(callback) {
            while (this.top() !== null && !callback(this.top())) {
                this.pop();
            }
        }
    }]);

    return Stack;
}();

exports.default = Stack;
