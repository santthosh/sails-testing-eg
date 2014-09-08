var FooController = require('../../api/controllers/FooController');
var sinon = require('sinon');
var assert = require('assert');

describe('The FooController', function() {
	describe('when we invoke the index action', function() {
		it('should return hello world message', function() {
			var send = sinon.spy();
			FooController.index(null,{
				'send': send
			});
			assert(send.called);
			assert(send.calledWith('Hello, world!'));
		});
	});
});