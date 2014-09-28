/** @jsx React.DOM */
'use strict';

var React = require('react');

var Header = React.createClass({
  getDefaultProps: function() {
    return {
      taglineItems: [
        { name: 'husband' },
        { name: 'father' },
        { name: 'AtTasker', url: 'http://www.attask.com' },
        { name: 'Egghead.io instructor', url: 'https://egghead.io/instructors/kentcdodds' },
        { name: 'web developer', url: 'http://www.github.com/kentcdodds' },
        { name: 'tweeter', url: 'http://twitter.com/kentcdodds' },
        { name: 'Mormon', url: 'http://www.mormon.org'  }
      ]
    }
  },
  render: function() {
    var taglineContents = this.props.taglineItems.map(function(item, index, arry) {
      var suffix = index < arry.length - 2 ? ', ' : '';
      if (index === arry.length - 2) {
        suffix = ', and ';
      }
      if (item.url) {
        return <span key={item.name}><a href={item.url}>{item.name}</a>{suffix}</span>;
      } else {
        return <span key={item.name}>{item.name + suffix}</span>;
      }
    });

    return (
      <header>
        <h1>Kent C. Dodds</h1>
        <p id="tagline">
          I am a {taglineContents}
        </p>
      </header>
    );
  }
});

module.exports = Header;