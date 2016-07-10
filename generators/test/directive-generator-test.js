var helpers = require('yeoman-test');
var assert = require('yeoman-assert');
var path = require('path');

describe('generator-squelette-jasmin:directive', function () {
    describe('when running directive generator must generate a file with some specific content', function () {
        before(function () {
            return helpers.run(path.join( __dirname, '../directive'))
                .withPrompts({
                    nameDirective: 'directive-test',
                    templateUrl: '/directives.html' ,
                    directiveModule: 'directiveModule'
                })
                .toPromise();
        });

        it('generate template files', function () {
            assert.file([
                'test/directives/directive-test.js'
            ]);
            assert.fileContent([
                ['test/directives/directive-test.js', /.*.Directive: .*directive-test.*/],
                ['test/directives/directive-test.js', /.*.beforeEach\(module\(\'directiveModule.*/],
                ['test/directives/directive-test.js', /.*.beforeEach\(module\(\'\/directives.html.*/]
            ]);
        });
    });
});