var ch = {} || ch;
ch.jezek = function() {
    
    function getAnswer(theMessageEvent) {
        if (theMessageEvent.name === "resize") {
            safari.self.tab.dispatchMessage("doResize", [self.innerWidth, self.innerHeight]);
        }
    }
    
    return {
        getAnswer: getAnswer
    };
}();
safari.self.addEventListener("message", ch.jezek.getAnswer, false);

