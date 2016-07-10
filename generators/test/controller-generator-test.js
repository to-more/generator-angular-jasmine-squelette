var helpers = require('yeoman-test');
var assert = require('yeoman-assert');
var path = require('path');

describe('generator-squelette-jasmin:controller', function () {
    describe('when running controller generator must generate a file with some specific content', function () {
        before(function () {
            return helpers.run(path.join( __dirname, '../controller'))
                .withPrompts({
                    nameController: 'controller-test',
                    controllerModule: 'controllerModule'
                })
                .toPromise();
        });

        it('generate template files', function () {
            assert.file([
                'test/controllers/controller-test.js'
            ]);

            assert.fileContent([
                ['test/controllers/controller-test.js', /.*.Controller: .*controller-test.*/],
                ['test/controllers/controller-test.js', /.*.beforeEach\(module\(\'controllerModule.*/]
            ]);
        });
    });
});