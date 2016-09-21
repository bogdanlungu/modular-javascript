(function() { "use strict";

// Initializer module
// Register all the available modules in the application and store them in an array
var ApplicationInitModule = function () {
    var registeredModules = [];

    return {
        registerModule: function registerModule(module) {
            registeredModules.push(module); // store the module in the array
        },
        getAppModulesCount: function getAppModulesCount() {
            return registeredModules.length;
        },
        removeRegisteredModule: function removeRegisteredModule(index) {
            registeredModules.splice(index, 1);
        },
        initializeAllModules: function initializeAllModules() {
            for (var module in registeredModules) {
                registeredModules[module].initialize();
            }
        }
    };
}();

// mediator module between ApplicationInitModule and testModule1 and testModule2
var GlobalApp = function () {
    var registerModule = ApplicationInitModule.registerModule;
    return {
        registerModule: registerModule
    };
}();

var testModule1 = function () {
    var self = {};
    var moduleName = "Module 1"; // private variable accessed in the initialize method via closure

    self.initialize = function () {
        console.log("Testmodule1 has been initialized!");
        console.log("module name is: " + moduleName); // log the moduleName
    };

    (function () {
        GlobalApp.registerModule(self); // register the module inside the module definition
    })();

    return { // return an anonymous object
        initialize: self.initialize,
        getName: function getName() {
            return moduleName;
        }
    };
}();

var testModule2 = function () {
    var moduleName = 'Module 2';

    function initialize() {
        console.log("Testmodule2 has been initialized!");
    }
    return {
        initialize: initialize
    };
}();
GlobalApp.registerModule(testModule2); // register the module outside the module definition


// initiliaze the registered modules
ApplicationInitModule.initializeAllModules();
'use strict';

var updatePage = function () {

    // private function - update the html based on element's id
    var insertHTMLTxt = function insertHTMLTxt(containerID, newStructure) {

        var theContainer = document.getElementById(containerID);
        theContainer.innerHTML = newStructure;
    };

    // another private function - add a css class the the element with the id..
    var applyElementCSS = function applyElementCSS(elementID, className) {

        var theElement = document.getElementById(elementID);
        theElement.className = className;
    };

    return {

        // returned methods for the anonymous object
        updateElement: function updateElement(elemID, htmlTxt) {

            insertHTMLTxt(elemID, htmlTxt);
        },

        // method to update css
        updateElementClass: function updateElementClass(elemId, className) {

            if (!className) {

                console.error('No class name has been provided, exiting module!');
            }
            applyElementCSS(elemId, className);
        }
    };
}(); }());
