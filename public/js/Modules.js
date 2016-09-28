(function() { 'use strict';

// Globa data with the html data
var GlobalData = function () {
    var headerContainerDef = {
        sectionHTML: '<div class="logo_titleClass" >' + '<a href=""><img src="img/logo.png" alt="Company Logo" style="max-height:100%;"></a>' + '<div class="siteTitleClass">Images Inc.</div>' + '</div>' + '<nav role="navigation" itemscope itemtype="https://schema.org/SiteNavigationElement">' + '<h1 class="hiddenClass">Main Navigation</h1>' + '<ul class="navmenuClass" >' + '<li><a href="#" class="active">Home</a></li>' + '<li><a href="#">Our Company</a></li>' + '<li><a href="#">Pricing</a></li>' + '<li><a href="#">Contact Us</a></li>' + '</ul>' + '</nav>'
    };
    var footerContainerDef = {
        sectionHTML: '<div>' + '<a href="#">Latest News</a>' + '</div>' + '<div>' + '<a href="#">Services</a>' + '</div>' + '<div>' + '<a href="#">Support</a>' + '</div>'
    };
    return {
        getHeaderHTMLTxt: function getHeaderHTMLTxt() {
            return headerContainerDef.sectionHTML;
        },
        getFooterHTMLTxt: function getFooterHTMLTxt() {
            return footerContainerDef.sectionHTML;
        }
    };
}();

// The age updater module
var PageUpdater = function () {

    // private function
    var insertHTMLTxt = function insertHTMLTxt(containerID, newStructure) {
        var theContainer = document.getElementById(containerID);
        theContainer.innerHTML = newStructure;
    };

    // private function
    var applyElementCSS = function applyElementCSS(elementID, className) {
        var theElement = document.getElementById(elementID);
        theElement.className = className;
    };
    return {
        updateElement: function updateElement(elemID, htmlTxt) {
            insertHTMLTxt(elemID, htmlTxt);
        },

        updateElementClass: function updateElementClass(elemId, className) {
            if (!className) {
                console.error('No class name has been provided, exiting module!');
            }
            applyElementCSS(elemId, className);
        }
    };
}();

PageUpdater.updateElement("headerContainer", GlobalData.getHeaderHTMLTxt());
PageUpdater.updateElement("footerContainer", GlobalData.getFooterHTMLTxt());

// Augment the GlobalData module with some new method
var GlobalData = function (coreModule) {
    var someData = "Augment the module with some new info";
    coreModule.newMethod = function () {
        return someData;
    };

    return coreModule;
}(GlobalData);

console.log(GlobalData.newMethod()); }());