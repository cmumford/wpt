'use strict';

function test_shorthand_value(shorthandName, shorthandValue, longhandNames, longhandValues) {
    const stringifiedValue = JSON.stringify(shorthandValue);

    test(function(){
        var div = document.getElementById('target') || document.createElement('div');
        div.style[shorthandName] = "";
        div.style[shorthandName] = shorthandValue;

        for (let index = 0; index < longhandNames.length; ++index) {
            const longhandName = longhandNames[index];
            const readValue = div.style[longhandName];
            assert_equals(readValue, longhandValues[index], longhandName + " should be canonical");

            div.style[longhandName] = "";
            div.style[longhandName] = readValue;
            assert_equals(div.style[longhandName], readValue, "serialization should round-trip");
        }
    }, "e.style['" + shorthandName + "'] = " + stringifiedValue + " should set the longhand values");
}
