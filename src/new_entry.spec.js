import React from 'react';
import ReactTestUtils from 'react-dom/test-utils'; // ES6
import NewEntry from './new_entry.js'

describe("NewEntry", function() {

  beforeEach(function() {
  });

  it("The default component should work", function() {
    var element = React.createElement(
      NewEntry, // component class
      {} // props go here
      // You can also add children here as the last argument
    );
    expect(function() {
      var component = ReactTestUtils.renderIntoDocument(element);
    }).not.toThrow();

  });
});
