/* Autogenerated with Kurento Idl */

/*
 * (C) Copyright 2013-2015 Kurento (http://kurento.org/)
 *
 * All rights reserved. This program and the accompanying materials are made
 * available under the terms of the GNU Lesser General Public License (LGPL)
 * version 2.1 which accompanies this distribution, and is available at
 * http://www.gnu.org/licenses/lgpl-2.1.html
 *
 * This library is distributed in the hope that it will be useful, but WITHOUT
 * ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS
 * FOR A PARTICULAR PURPOSE. See the GNU Lesser General Public License for more
 * details.
 */

var inherits = require('inherits');

var kurentoClient = require('kurento-client');

var disguise = kurentoClient.disguise;

var checkType      = kurentoClient.checkType;
var ChecktypeError = checkType.ChecktypeError;


var Transaction = kurentoClient.TransactionsManager.Transaction;

var Filter = kurentoClient.register.abstracts.Filter;


function noop(error, result) {
  if (error) console.trace(error);

  return result
};


/**
 * Create an element
 *
 * @classdesc
 *  NuboEarDetector interface. Documentation about the module
 *
 * @extends module:core/abstracts.Filter
 *
 * @constructor module:nuboeardetector.NuboEarDetector
 */
function NuboEarDetector(){
  NuboEarDetector.super_.call(this);
};
inherits(NuboEarDetector, Filter);


//
// Public methods
//

/**
 * To indicate  the algorithm if process all the images or only when it receives
 *
 * @alias module:nuboeardetector.NuboEarDetector.detectByEvent
 *
 * @param {external:Integer} event
 *  0 (default) => process all the frames without constraints; 1 => process only
 *
 * @param {module:nuboeardetector.NuboEarDetector~detectByEventCallback} [callback]
 *
 * @return {external:Promise}
 */
NuboEarDetector.prototype.detectByEvent = function(event, callback){
  var transaction = (arguments[0] instanceof Transaction)
                  ? Array.prototype.shift.apply(arguments)
                  : undefined;

  checkType('int', 'event', event, {required: true});

  var params = {
    event: event
  };

  callback = (callback || noop).bind(this)

  return disguise(this._invoke(transaction, 'detectByEvent', params, callback), this)
};
/**
 * @callback module:nuboeardetector.NuboEarDetector~detectByEventCallback
 * @param {external:Error} error
 */

/**
 * Specify how much the image size is reduced at each haar image 
 *
 * @alias module:nuboeardetector.NuboEarDetector.multiScaleFactor
 *
 * @param {external:Integer} scaleFactor
 *  5-50 (25 default)
 *
 * @param {module:nuboeardetector.NuboEarDetector~multiScaleFactorCallback} [callback]
 *
 * @return {external:Promise}
 */
NuboEarDetector.prototype.multiScaleFactor = function(scaleFactor, callback){
  var transaction = (arguments[0] instanceof Transaction)
                  ? Array.prototype.shift.apply(arguments)
                  : undefined;

  checkType('int', 'scaleFactor', scaleFactor, {required: true});

  var params = {
    scaleFactor: scaleFactor
  };

  callback = (callback || noop).bind(this)

  return disguise(this._invoke(transaction, 'multiScaleFactor', params, callback), this)
};
/**
 * @callback module:nuboeardetector.NuboEarDetector~multiScaleFactorCallback
 * @param {external:Error} error
 */

/**
 * process x frames every 4 frames
 *
 * @alias module:nuboeardetector.NuboEarDetector.processXevery4Frames
 *
 * @param {external:Integer} xper4
 *  1,2,3,4 (default) => process x frames every 4 frames
 *
 * @param {module:nuboeardetector.NuboEarDetector~processXevery4FramesCallback} [callback]
 *
 * @return {external:Promise}
 */
NuboEarDetector.prototype.processXevery4Frames = function(xper4, callback){
  var transaction = (arguments[0] instanceof Transaction)
                  ? Array.prototype.shift.apply(arguments)
                  : undefined;

  checkType('int', 'xper4', xper4, {required: true});

  var params = {
    xper4: xper4
  };

  callback = (callback || noop).bind(this)

  return disguise(this._invoke(transaction, 'processXevery4Frames', params, callback), this)
};
/**
 * @callback module:nuboeardetector.NuboEarDetector~processXevery4FramesCallback
 * @param {external:Error} error
 */

/**
 * The ears and the profile faces detected (x,y,width,height) are sent as 
 * metadata 
 *
 * @alias module:nuboeardetector.NuboEarDetector.sendMetaData
 *
 * @param {external:Integer} metaData
 *  0 (default) => metadata are not sent; 1 => metadata are sent
 *
 * @param {module:nuboeardetector.NuboEarDetector~sendMetaDataCallback} [callback]
 *
 * @return {external:Promise}
 */
NuboEarDetector.prototype.sendMetaData = function(metaData, callback){
  var transaction = (arguments[0] instanceof Transaction)
                  ? Array.prototype.shift.apply(arguments)
                  : undefined;

  checkType('int', 'metaData', metaData, {required: true});

  var params = {
    metaData: metaData
  };

  callback = (callback || noop).bind(this)

  return disguise(this._invoke(transaction, 'sendMetaData', params, callback), this)
};
/**
 * @callback module:nuboeardetector.NuboEarDetector~sendMetaDataCallback
 * @param {external:Error} error
 */

/**
 * Show or Hide the ears in the video stream
 *
 * @alias module:nuboeardetector.NuboEarDetector.showEars
 *
 * @param {external:Integer} viewEars
 *  Determines wheter the detected ears will be displayed or not
 *
 * @param {module:nuboeardetector.NuboEarDetector~showEarsCallback} [callback]
 *
 * @return {external:Promise}
 */
NuboEarDetector.prototype.showEars = function(viewEars, callback){
  var transaction = (arguments[0] instanceof Transaction)
                  ? Array.prototype.shift.apply(arguments)
                  : undefined;

  checkType('int', 'viewEars', viewEars, {required: true});

  var params = {
    viewEars: viewEars
  };

  callback = (callback || noop).bind(this)

  return disguise(this._invoke(transaction, 'showEars', params, callback), this)
};
/**
 * @callback module:nuboeardetector.NuboEarDetector~showEarsCallback
 * @param {external:Error} error
 */

/**
 * this will be the width of the image that the algorithm is going to process to
 *
 * @alias module:nuboeardetector.NuboEarDetector.widthToProcess
 *
 * @param {external:Integer} width
 *  160,320 (default),480,640
 *
 * @param {module:nuboeardetector.NuboEarDetector~widthToProcessCallback} [callback]
 *
 * @return {external:Promise}
 */
NuboEarDetector.prototype.widthToProcess = function(width, callback){
  var transaction = (arguments[0] instanceof Transaction)
                  ? Array.prototype.shift.apply(arguments)
                  : undefined;

  checkType('int', 'width', width, {required: true});

  var params = {
    width: width
  };

  callback = (callback || noop).bind(this)

  return disguise(this._invoke(transaction, 'widthToProcess', params, callback), this)
};
/**
 * @callback module:nuboeardetector.NuboEarDetector~widthToProcessCallback
 * @param {external:Error} error
 */


/**
 * @alias module:nuboeardetector.NuboEarDetector.constructorParams
 *
 * @property {module:core.MediaPipeline} mediaPipeline
 *  the parent {@link module:core.MediaPipeline MediaPipeline}
 */
NuboEarDetector.constructorParams = {
  mediaPipeline: {
    type: 'MediaPipeline',
    required: true
  }
};

/**
 * @alias module:nuboeardetector.NuboEarDetector.events
 *
 * @extends module:core/abstracts.Filter.events
 */
NuboEarDetector.events = Filter.events;


/**
 * Checker for {@link module:nuboeardetector.NuboEarDetector}
 *
 * @memberof module:nuboeardetector
 *
 * @param {external:String} key
 * @param {module:nuboeardetector.NuboEarDetector} value
 */
function checkNuboEarDetector(key, value)
{
  if(!(value instanceof NuboEarDetector))
    throw ChecktypeError(key, NuboEarDetector, value);
};


module.exports = NuboEarDetector;

NuboEarDetector.check = checkNuboEarDetector;