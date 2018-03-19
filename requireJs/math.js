require.config({
    paths:{
        "jquery":"http://apps.bdimg.com/libs/jquery/2.1.4/jquery",
        "underscore":"http://apps.bdimg.com/libs/underscore.js/1.7.0/underscore-min",
    }
})

define(['underscore'],function(_) {

    var add =function(x,y){
        return x+y;
    }

     var flat = function(arr){
        return _.flatten(arr)
     }

    return {
        add:add,
        flat:flat
    }
    
});