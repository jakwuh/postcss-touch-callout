var fs = require('fs');
var test = require('tape');
var postcss = require('postcss');
var touchCallout = require('..');

function fixturePath(name) {
    return "test/fixtures/" + name + ".css";
}

function fixture(name) {
    return fs.readFileSync(fixturePath(name), "utf8").trim();
}

function resolveFixture(name) {
    return postcss(touchCallout())
        .process(fixture(name), {from: fixturePath(name)});
}

function compareFixtures(t, name) {
    var postcssResult = resolveFixture(name);
    var actual = postcssResult.css.trim();

    fs.writeFile(fixturePath(name + ".actual"), actual);
    var expected = fixture(name + ".expected");

    t.equal(
        actual, expected,
        "processed fixture '" + name + "' should be equal to expected output"
    )

    return postcssResult;
}

test("substitutes user-select property",
    function(t) {
        var result = compareFixtures(t, "default")
        t.equal(
            result.messages.length,
            0,
            "should have no error messages"
        );
        t.end()
    }
);
