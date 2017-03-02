(function() {
    angular.module('myApp')
        .service('User', function() {
            
            var callbacks = [];
            var clickCounter = 3;

            this.registerCallback = function (cb) {
                if (typeof cb === 'function') {
                    callbacks.push(cb);
                }
            };

            this.unRegisterCallback = function (cb) {
                if (typeof cb === 'function') {
                    var index = callbacks.indexOf(cb);

                    if(index >= 0){
                        callbacks.splice(index, 1);
                    }
                }
            };

            this.decClickCounter = function (){
                if(clickCounter > 0) clickCounter -= 1;

                return !! clickCounter;
            };

            function notify(data) {
                for (var i = 0; i < callbacks.length; i++) {
                    callbacks[i](data);
                }
            }
            
            var id = 100;

            this.name = 'Васян';
            this.surname = 'Пупкинян';
            this.email = 'vasya@ololo.com';

            
            this.getId = function () {
                return id;
            };

            this.setName = function (value) {
                this.name = value;
                for (var i = 0; i < callbacks.length; i++) {
                    callbacks[i](this.name);
                }
                // notify(data)
            }
        })

        .factory('Message', function () {
            var defaultStyles = 'background-color:red;';
            
            var styles = defaultStyles;

            function showMessage(text) {
                console.log('%c' + text, styles);
            }
            function setStyles(stylesString) {
                if (stylesString) {
                    styles = stylesString;   
                }
            }
            function resetStyles() {
                styles = defaultStyles;
            }
            return {
                show: showMessage,
                set: setStyles,
                reset: resetStyles
            }
        })
    
    
    
})();