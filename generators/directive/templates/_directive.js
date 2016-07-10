'use strict';

describe('Directive: <%= directive_name %>', function () {

    var scope, compile, directiveElem;

    var getCompiledElement = function(){
        var element = angular.element('<div first-directive></div>');
        var compiledElement = compile(element)(scope);
        scope.$digest();
        return compiledElement;
    };

    // load the directive's module
    beforeEach(module('<%= directive_module %>'));
    beforeEach(module('<%= directive_template %>'));

    beforeEach(function(){
        inject(function($compile, $rootScope) {
            compile = $compile;
            scope = $rootScope.$new();
        });
        directiveElem = getCompiledElement();
    });

    it('It must be filled!', inject(function () {

    }));
});

