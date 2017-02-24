'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var welcome = function welcome(props) {

    return '<div>\n            <h1>Welcome ' + (props.name || '') + '!</h1>\n            <p>' + (props.subtitle || '') + '</p>\n        </div>';
};

exports.default = welcome;