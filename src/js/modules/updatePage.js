let updatePage = (function() {

    // private function - update the html based on element's id
    let insertHTMLTxt = function(containerID, newStructure) {

        let theContainer = document.getElementById(containerID);
        theContainer.innerHTML = newStructure;
    };

    // another private function - add a css class the the element with the id..
    let applyElementCSS = function(elementID, className) {

        let theElement = document.getElementById(elementID);
        theElement.className = className;
    };

    return {

        // returned methods for the anonymous object
        updateElement: function(elemID, htmlTxt) {

            insertHTMLTxt(elemID, htmlTxt);
        },

        // method to update css
        updateElementClass: function(elemId, className) {

            if (!className) {

                console.error('No class name has been provided, exiting module!');
            }
            applyElementCSS(elemId, className);
        }
    };

})();
