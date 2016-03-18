webAppFactory.apiSvc = function($resource){
	return {
        env:"prod",
        prod:{
            protocol:"https",
            host:"mixeet.herokuapp.com",
            port:""
        },
        dev:{
            protocol:"http",
            host:"localhost",
            port:"5000"
        },

        getApiPath:function(path){
            var api=this[this.env];
            return api.protocol+"://"+api.host+(api.port!==""?(":"+api.port):"")+"/"+path;
        },

        rest:function(path, methods, defaultParams){
            var resource=$resource(
                this.getApiPath(path),
                defaultParams || {},
                methods || {}
            );
            return resource;
        }
    };

};