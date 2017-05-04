babel=../node_modules/.bin/babel
src=../src
dist=../dist
$babel --presets=es2015 -o $dist/stack.js $src/stack.js
