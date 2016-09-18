// Initializer module
// Register all the available modules in the application and store them in an array
let ApplicationInitModule = function() {
    let registeredModules = [];

    return {
        registerModule: function(module) {
            registeredModules.push(module); // store the module in the array
        },
        getAppModulesCount: function() {
            return registeredModules.length;
        },
        removeRegisteredModule: function(index) {
            registeredModules.splice(index, 1);
        },
        initializeAllModules: function() {
            for (let module in registeredModules) {
                registeredModules[module].initialize();
            }
        }
    };
}();

// mediator module between ApplicationInitModule and testModule1 and testModule2
let GlobalApp = (function() {
    let registerModule = ApplicationInitModule.registerModule;
    return {
        registerModule: registerModule
    };
})();

let testModule1 = (function() {
    let self = {};
    let moduleName = "Module 1"; // private variable accessed in the initialize method via closure

    self.initialize = function() {
        console.log("Testmodule1 has been initialized!");
        console.log("module name is: " + moduleName); // log the moduleName
    };

    (function() {
        GlobalApp.registerModule(self);   // register the module inside the module definition
    })();

    return {   // return an anonymous object
        initialize: self.initialize,
        getName: function() {
            return moduleName;
        }
    };
})();

let testModule2 = (function() {
    let moduleName = 'Module 2';

    function initialize() {
        console.log("Testmodule2 has been initialized!");
    }
    return {
        initialize: initialize
    };
})();
GlobalApp.registerModule(testModule2); // register the module outside the module definition


// initiliaze the registered modules
ApplicationInitModule.initializeAllModules();
