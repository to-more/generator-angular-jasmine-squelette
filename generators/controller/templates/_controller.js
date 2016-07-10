'use strict';

describe('Controller: <%= controller_name %>', function () {

    var $controller;

    beforeEach(module('<%= controller_module %>'));

    beforeEach(inject(function(_$controller_){
        $controller = _$controller_;
    }));

    describe('Test controller $scope', function() {
        var $scope, controller;

        beforeEach(function() {
            $scope = {};
            controller = $controller('<%= controller_name %>', { $scope: $scope });
        });

        it('It should be filled!', inject(function () {
            // you can here describe some expects about the controller: <%= controller_name %>
        }));

    });
});

