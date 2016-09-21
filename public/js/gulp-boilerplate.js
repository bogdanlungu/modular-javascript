(function() { "use strict";

console.log('Hello World!');

// Initializer module
// Register all the available modules in the application and store them in an array
var ApplicationInitModule = function () {
    // IIFE which reference to a anonymous singleton object, which is the interface of the module
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

var GlobalApp = function () {
    var registerModule = ApplicationInitModule.registerModule;
    return {
        registerModule: registerModule
    };
}();

var testModule1 = function () {
    var self = {};
    var moduleName = "Module 1";

    self.initialize = function () {
        //displays "testmodule1 has been initialized!"
        console.log("testmodule1 has been initialized!");
        //displays "module name is: Module 1"
        console.log("module name is: " + moduleName);
    };

    (function () {
        GlobalApp.registerModule(self);
    })();

    return {
        initialize: self.initialize,
        getName: function getName() {
            return moduleName;
        }
    };
}();

var testModule2 = function () {
    var moduleName = "Module 2";

    function initialize() {
        //displays "testmodule2 has been initialized!"
        console.log("testmodule2 has been initialized!");
    }
    return {
        initialize: initialize
    };
}();
GlobalApp.registerModule(testModule2);
"use strict";

var sum = function sum(a, b) {
  return a + b;
};
sum(1, 2); }());