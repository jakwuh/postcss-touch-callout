# postcss-touch-callout [![Build Status](https://travis-ci.org/jakwuh/postcss-touch-callout.svg)](https://travis-ci.org/jakwuh/postcss-touch-callout)

> [PostCSS](https://github.com/postcss/postcss) plugin to add `-touch-callout` vendor prefixes.  


On touch devices `user-select` property is replaced with `touch-callout` property which cannot be added with postcss's [autoprefixer](https://github.com/postcss/autoprefixer) since it's only for prefixes. This plugin adds `touch-callout` prefixes whenever it finds the usage of `user-select` property;

Example input: 

```css
.a {
    user-select: none;
}

.b {
    user-select: auto;
}
```

Example output: 
```css
.a {
    -webkit-touch-callout: none;
    user-select: none;
}

.b {
    -webkit-touch-callout: default;
    user-select: auto;
}
```

For full reference see `test` folder.
