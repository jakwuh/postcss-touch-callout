var postcss = require('postcss');

var map = {
    'none': 'none',
    'auto': 'default',
    'text': 'default',
    'contain': 'default',
    'all': 'default',
    'inherit': 'inherit',
    'initial': 'initial',
    'unset': 'unset'
};

module.exports = postcss.plugin('postcss-touch-callout', function() {
	return function(root) {
        root.walkDecls('user-select', function(decl) {
            if (decl.value in map) {
                decl.parent.prepend({prop: '-webkit-touch-callout', value: map[decl.value]})
            }
        })
    }
});
