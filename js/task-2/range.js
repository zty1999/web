var RangeSlider = function(cfg,uu){
    uu.sliderCfg = {
        min: cfg && !isNaN(parseFloat(cfg.min)) ? Number(cfg.min) : null,
        max: cfg && !isNaN(parseFloat(cfg.max)) ? Number(cfg.max) : null,
        step: cfg && Number(cfg.step) ? cfg.step : 1,
        callback: cfg && cfg.callback ? cfg.callback : null
    };
    var min = uu.sliderCfg.min;
    var max = uu.sliderCfg.max;
    var step = uu.sliderCfg.step;
    var callback = uu.sliderCfg.callback;
    var range_inner=document.getElementById("range_innerid");
    aspan = range_inner.getElementsByTagName("span");

    uu.setAttribute('min', min);
    uu.setAttribute('max', max);
    uu.setAttribute('step', step);

    uu.oninput= function(e){
        uu.setAttribute('value', this.value);
        var a = this.value/12 *100;
        uu.style.backgroundSize = a + '% 100%';
        var value = this.value;
        for (var i=0;i<aspan.length;i++) {
            (function(index){
                if(index < value ){
                    aspan[index].style.backgroundColor="#059CFA";
                }else{
                    aspan[index].style.backgroundColor="#CCCCCC";
                }
            })(i)
        };

        if (typeof(callback) == 'function') {
            callback(this);
        }
    };
};

var change = function($input) {
    /*内容可自行定义*/
    console.log($input.value);
}
var sliderblock= document.getElementById("sliderblock");
RangeSlider({ min: 0,   max: 12,  step: 1,  callback: change},sliderblock);
