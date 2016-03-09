describe('ProfileController', function() {
    var scope, $location, createController;

    beforeEach(inject(function ($rootScope, $controller _$location_) {
        $location = _$location_;
        scope = $rootScope.$new();

        createController = function() {
            return $controller('ProfileController', {
                '$scope': scope
            });
        };
    }));

    it('should have a method to check if the path is active', function() {
        var controller = createController();
        expect(true).toBe(true);
    });
});