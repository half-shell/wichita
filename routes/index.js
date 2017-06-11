'use strict'

module.exports = function(routers){
    require('./users')(routers.users);
    require('./auth')(routers.auth);
}
