var helpers = require('yeoman-test');
var assert = require('yeoman-assert');
var path = require('path');

describe('generator-squelette-jasmin:filter', function () {
    describe('when running filter generator must generate a file with some specific content', function () {
        before(function () {
            return helpers.run(path.join( __dirname, '../filter'))
                .withPrompts({
                    nameFilter: 'filter-test'
                })
                .toPromise();
        });

        it('generate template files', function () {
            assert.file([
                'test/filters/filter-test.js'
            ]);
            assert.fileContent([
                ['test/filters/filter-test.js', /.*.Filter: .*filter-test.*/]
            ]);
        });
    });
});