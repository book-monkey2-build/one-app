// SUT - 'system under test'
var DeepThought = (function () {
    function DeepThought() {
    }
    DeepThought.prototype.getAlmightyAnswer = function () {
        return 42;
    };
    return DeepThought;
}());
describe("Deep Thought", function () {
    var deepThought;
    beforeEach(function () {
        deepThought = new DeepThought();
    });
    it("should know the answer to life, the universe and everything", function () {
        var answer = deepThought.getAlmightyAnswer();
        expect(answer).toBeGreaterThan(0);
    });
});
//# sourceMappingURL=helloWorldSpec.spec.js.map