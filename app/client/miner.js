
/************
 Create spaceship
 *************/
 
// var spaceship = {
 
//     _temperature: 0,
//     _temperatureDepend: new Tracker.Dependency,
 
//     getTemperature: function() {
//         this._temperatureDepend.depend();
//         return this._temperature;
//     },
 
//     setTemperature: function(value) {
//         if (value != this._temperature) {
//             this._temperature = value;
//             this._temperatureDepend.changed();
//         }
//     }
// };


// miner = {};

// miner.mining = (function () {

//     // Constructor
//     function mining() {
//         if(!this._dependency && typeof Tracker !== 'undefined')
//             this._dependency = new Tracker.Dependency;

//         if(this._dependency)
//             this._dependency.depend();

//         return this.value;
//     };

//     mining.prototype._set = function(newValue){
//         if(newValue !== this.value) {
//             this.value = newValue;

//             if(this._dependency)
//                 this._dependency.changed();
//         }
//     };

//     return mining;
// })();

// miner.hashRate = (function () {

//     // Constructor
//     function hashRate() {
//         if(!this._dependency && typeof Tracker !== 'undefined')
//             this._dependency = new Tracker.Dependency;

//         if(this._dependency)
//             this._dependency.depend();

//         return this.value;
//     };

//     mining.prototype._set = function(newValue){
//         if(newValue !== this.value) {
//             this.value = newValue;

//             if(this._dependency)
//                 this._dependency.changed();
//         }
//     };

//     return mining;
// })();




// -----
///



// OQML Timer
//runJavascript('mist.mining._set('+ eth.mining() +');');



// in the browser
// mist.mining(); // true


// Template.bla.helpers({
//     'mining': function(){
//         return mist.mining();
//     }
// });