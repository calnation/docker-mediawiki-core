/*!
 * VisualEditor IME 'Home' key test for Firefox on Windows.
 *
 * @copyright 2011-2016 VisualEditor Team and others; see http://ve.mit-license.org
 */

ve.ce.imetests.push( [ 'home-firefox-win7-none', [
	{ imeIdentifier: 'none', userAgent: 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:34.0) Gecko/20100101 Firefox/34.0', startDom: '' },
	{ seq: 0, time: 12.242, action: 'sendEvent', args: [ 'keydown', { keyCode: 65 } ] },
	{ seq: 1, time: 12.261, action: 'sendEvent', args: [ 'keypress', { keyCode: 0 } ] },
	{ seq: 2, time: 12.264, action: 'changeText', args: [ 'a' ] },
	{ seq: 3, time: 12.264, action: 'changeSel', args: [ 1, 1 ] },
	{ seq: 4, time: 12.264, action: 'sendEvent', args: [ 'input', {} ] },
	{ seq: 5, time: 12.292, action: 'endLoop', args: [] },
	{ seq: 6, time: 12.304, action: 'sendEvent', args: [ 'keydown', { keyCode: 83 } ] },
	{ seq: 7, time: 12.308, action: 'sendEvent', args: [ 'keypress', { keyCode: 0 } ] },
	{ seq: 8, time: 12.314, action: 'changeText', args: [ 'as' ] },
	{ seq: 9, time: 12.314, action: 'changeSel', args: [ 2, 2 ] },
	{ seq: 10, time: 12.314, action: 'sendEvent', args: [ 'input', {} ] },
	{ seq: 11, time: 12.345, action: 'endLoop', args: [] },
	{ seq: 12, time: 12.431, action: 'sendEvent', args: [ 'keyup', { keyCode: 65 } ] },
	{ seq: 13, time: 12.434, action: 'endLoop', args: [] },
	{ seq: 14, time: 12.447, action: 'sendEvent', args: [ 'keydown', { keyCode: 68 } ] },
	{ seq: 15, time: 12.45, action: 'sendEvent', args: [ 'keypress', { keyCode: 0 } ] },
	{ seq: 16, time: 12.452, action: 'changeText', args: [ 'asd' ] },
	{ seq: 17, time: 12.452, action: 'changeSel', args: [ 3, 3 ] },
	{ seq: 18, time: 12.452, action: 'sendEvent', args: [ 'input', {} ] },
	{ seq: 19, time: 12.473, action: 'endLoop', args: [] },
	{ seq: 20, time: 12.487, action: 'sendEvent', args: [ 'keyup', { keyCode: 83 } ] },
	{ seq: 21, time: 12.503, action: 'endLoop', args: [] },
	{ seq: 22, time: 12.573, action: 'sendEvent', args: [ 'keyup', { keyCode: 68 } ] },
	{ seq: 23, time: 12.577, action: 'endLoop', args: [] },
	{ seq: 24, time: 15.106, action: 'sendEvent', args: [ 'keydown', { keyCode: 37 } ] },
	{ seq: 25, time: 15.11, action: 'sendEvent', args: [ 'keypress', { keyCode: 37 } ] },
	{ seq: 26, time: 15.113, action: 'changeSel', args: [ 2, 2 ] },
	{ seq: 27, time: 15.113, action: 'endLoop', args: [] },
	{ seq: 28, time: 15.186, action: 'sendEvent', args: [ 'keyup', { keyCode: 37 } ] },
	{ seq: 29, time: 15.19, action: 'endLoop', args: [] },
	{ seq: 30, time: 15.624, action: 'sendEvent', args: [ 'keydown', { keyCode: 16 } ] },
	{ seq: 31, time: 15.63, action: 'endLoop', args: [] },
	{ seq: 32, time: 16.124, action: 'sendEvent', args: [ 'keydown', { keyCode: 16 } ] },
	{ seq: 33, time: 16.129, action: 'endLoop', args: [] },
	{ seq: 34, time: 16.155, action: 'sendEvent', args: [ 'keydown', { keyCode: 37 } ] },
	{ seq: 35, time: 16.16, action: 'sendEvent', args: [ 'keypress', { keyCode: 37 } ] },
	{ seq: 36, time: 16.179, action: 'changeSel', args: [ 2, 1 ] },
	{ seq: 37, time: 16.179, action: 'endLoop', args: [] },
	{ seq: 38, time: 16.223, action: 'sendEvent', args: [ 'keyup', { keyCode: 37 } ] },
	{ seq: 39, time: 16.227, action: 'endLoop', args: [] },
	{ seq: 40, time: 16.443, action: 'sendEvent', args: [ 'keyup', { keyCode: 16 } ] },
	{ seq: 41, time: 16.45, action: 'endLoop', args: [] },
	{ seq: 42, time: 18.332, action: 'sendEvent', args: [ 'keydown', { keyCode: 36 } ] },
	{ seq: 43, time: 18.338, action: 'sendEvent', args: [ 'keypress', { keyCode: 36 } ] },
	{ seq: 44, time: 18.346, action: 'changeSel', args: [ 0, 0 ] },
	{ seq: 45, time: 18.346, action: 'endLoop', args: [] },
	{ seq: 46, time: 18.461, action: 'sendEvent', args: [ 'keyup', { keyCode: 36 } ] },
	{ seq: 47, time: 18.466, action: 'endLoop', args: [] }
] ] );
