describe("build.js", function () {
    it('Should verify the correct skeleton height for the back skeleton.', function() {
        var actualValue = app.createBackSkeleton(3 ,5).skeletonSize;

        expect(actualValue).toBe(15);
    });

    it('Should verify the color of the background of the skeleton.', function() {
        var expectedValue = 'red';
        var actualValue = tile.style.backgroundColor;

        expect(actualValue).toBe(expectedValue);
    });

    it('Should verify the correct skeleton size for the front skeleton.', function() {
        var actualValue = app.createFrontSkeleton(3 ,5).skeletonSize;

        expect(actualValue).toBe(15);
    });

    it('Should verify the color of the background of the front skeleton.', function() {
        var expectedValue = 'yellow';
        var actualValue = title.style.backgroundColor;

        expect(actualValue).toBe(expectedValue);
    });

    it('Should verify that the left menu is visible.', function() {

    });

    it('Should verify that the left menu closes.', function() {

    });

    it('Should verify that the tile color changes.', function() {

    });

    it('Should verify that text has been added to a tile', function() {

    });

    it('Should verify that the font color has changed.', function() {

    });

    it ('Should verify that the font style has changed.', function(){

    });

    it('Should verify that the font type has changed.', function() {

    });



    it("Should verify that a preview from the selected tile is created", function () {
        var expectedValue = 0;
        var actualValue = 1;
        expect(actualValue).toBe(expectedValue);
    });
    it("Should verify that a tile can be deleted", function () {
        var tile = document.createElement("div");
        selectedTile = tile;
        selectedTile.id = "tiletest"
        selectedTile.innerText = "something";
        deleteTile();
        var expectedValue = document.getElementById("tiletest").innerText;
        var actualValue = "";
        expect(actualValue).toBe(expectedValue);
    });
    it("Should verify that a tile can be rotated", function () {
        var expectedValue = 0;
        var actualValue = 1;
        expect(actualValue).toBe(expectedValue);
    });
    it("Should verify that a tile can be resized", function () {
        var expectedValue = 0;
        var actualValue = 1;
        expect(actualValue).toBe(expectedValue);
    });
    it("Should verify that a tile can be dropped", function () {
        var expectedValue = 0;
        var actualValue = 1;
        expect(actualValue).toBe(expectedValue);
    });
    it("Should verify that a tile can not be dropped", function () {
        var expectedValue = 0;
        var actualValue = 1;
        expect(actualValue).toBe(expectedValue);
    });
    it("Should verify that the hasTile returns true when a tile is at the clicked position", function () {
        var expectedValue = 0;
        var actualValue = 1;
        expect(actualValue).toBe(expectedValue);
    });
    it("Should verify that the hasTile returns false when there is no tile at the clicked position", function () {
        var expectedValue = 0;
        var actualValue = 1;
        expect(actualValue).toBe(expectedValue);
    });
    it("Should verify that it's possible to rag a tilet", function () {
        var expectedValue = 0;
        var actualValue = 1;
        expect(actualValue).toBe(expectedValue);
    });
    it("Should verify that the application shows with a color which spots are available", function () {
        var expectedValue = 0;
        var actualValue = 1;
        expect(actualValue).toBe(expectedValue);
    });
    it("Should verify that the application resets the tiles colors correctly to the original state", function () {
        var expectedValue = 0;
        var actualValue = 1;
        expect(actualValue).toBe(expectedValue);
    });
    it("Should verify that a tile gets placed in the targeted div", function () {
        var expectedValue = 0;
        var actualValue = 1;
        expect(actualValue).toBe(expectedValue);
    });
});
