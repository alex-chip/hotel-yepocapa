(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var toggleMenu = function toggleMenu(navId, menuId, toggleB) {
    var nav = navId,
        menu = menuId,
        toggleButton = toggleB;

    function showNav() {
        nav.classList.toggle('is-active');
    }

    if (nav) {
        if (toggleButton) {
            toggleButton.addEventListener('click', showNav);
        } else {
            console.log('Not found ' + toggleButton);
        }
    } else {
        console.log('Not found ' + navId);
    }
};

var toggleB = document.getElementById('navId-toggle');
var menuId = document.getElementById('menuId');
var navId = document.getElementById('navId');

toggleMenu(navId, menuId, toggleB);

},{}],2:[function(require,module,exports){
'use strict';

var _navigation = require('./components/navigation');

var _navigation2 = _interopRequireDefault(_navigation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

},{"./components/navigation":1}]},{},[2])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvanMvY29tcG9uZW50cy9uYXZpZ2F0aW9uLmpzIiwic3JjL2pzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNBQSxJQUFNLGFBQWEsU0FBYixVQUFhLENBQUMsS0FBRCxFQUFRLE1BQVIsRUFBZ0IsT0FBaEIsRUFBNEI7QUFDM0MsUUFBSSxNQUFLLEtBQVQ7QUFBQSxRQUNJLE9BQU8sTUFEWDtBQUFBLFFBRUksZUFBZSxPQUZuQjs7QUFJQSxhQUFTLE9BQVQsR0FBbUI7QUFDZixZQUFJLFNBQUosQ0FBYyxNQUFkLENBQXFCLFdBQXJCO0FBQ0g7O0FBRUQsUUFBRyxHQUFILEVBQVE7QUFDSixZQUFHLFlBQUgsRUFBaUI7QUFDYix5QkFBYSxnQkFBYixDQUE4QixPQUE5QixFQUF1QyxPQUF2QztBQUNILFNBRkQsTUFFTztBQUNILG9CQUFRLEdBQVIsZ0JBQXlCLFlBQXpCO0FBQ0g7QUFDSixLQU5ELE1BTU87QUFDSCxnQkFBUSxHQUFSLGdCQUF5QixLQUF6QjtBQUNIO0FBQ0osQ0FsQkQ7O0FBb0JBLElBQU0sVUFBVSxTQUFTLGNBQVQsQ0FBd0IsY0FBeEIsQ0FBaEI7QUFDQSxJQUFNLFNBQVMsU0FBUyxjQUFULENBQXdCLFFBQXhCLENBQWY7QUFDQSxJQUFNLFFBQVEsU0FBUyxjQUFULENBQXdCLE9BQXhCLENBQWQ7O0FBRUEsV0FBVyxLQUFYLEVBQWlCLE1BQWpCLEVBQXdCLE9BQXhCOzs7OztBQ3hCQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJjb25zdCB0b2dnbGVNZW51ID0gKG5hdklkLCBtZW51SWQsIHRvZ2dsZUIpID0+IHtcbiAgICBsZXQgbmF2ID1uYXZJZCxcbiAgICAgICAgbWVudSA9IG1lbnVJZCxcbiAgICAgICAgdG9nZ2xlQnV0dG9uID0gdG9nZ2xlQlxuXG4gICAgZnVuY3Rpb24gc2hvd05hdigpIHtcbiAgICAgICAgbmF2LmNsYXNzTGlzdC50b2dnbGUoJ2lzLWFjdGl2ZScpXG4gICAgfVxuXG4gICAgaWYobmF2KSB7XG4gICAgICAgIGlmKHRvZ2dsZUJ1dHRvbikge1xuICAgICAgICAgICAgdG9nZ2xlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc2hvd05hdilcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGBOb3QgZm91bmQgJHt0b2dnbGVCdXR0b259YClcbiAgICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGBOb3QgZm91bmQgJHtuYXZJZH1gKVxuICAgIH1cbn1cblxuY29uc3QgdG9nZ2xlQiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduYXZJZC10b2dnbGUnKVxuY29uc3QgbWVudUlkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21lbnVJZCcpXG5jb25zdCBuYXZJZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduYXZJZCcpXG5cbnRvZ2dsZU1lbnUobmF2SWQsbWVudUlkLHRvZ2dsZUIpXG4iLCJpbXBvcnQgbmF2aWdhdGlvbiBmcm9tICcuL2NvbXBvbmVudHMvbmF2aWdhdGlvbidcbiJdfQ==
