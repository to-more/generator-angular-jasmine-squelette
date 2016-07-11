'use strict';

describe('Filter: <%= filter_name %>', function() {

    var $filter;

    beforeEach(inject(function(_$filter_){
        $filter = _$filter_;
    }));

    it('should be filled do better describe your specs', function() {
        // Fill here for you some code explanation from angular web
        var length = $filter('length');
        expect(length(null)).toEqual(0);
    });

});
