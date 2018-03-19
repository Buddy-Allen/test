require.config({
    paths:{
        "jquery":"http://apps.bdimg.com/libs/jquery/2.1.4/jquery",
        "math":'./math'
    }
})

require(["jquery","math"],function(jquery,math){

    var arr = [1, [2], [3, [[4]]]];

    $('#box').text("hello world");

    console.log(math.flat(arr))
    
})