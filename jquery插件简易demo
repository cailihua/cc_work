//@ sourceMappingURL=jquery.numeric.min.map
(function($){ 
    var defaults = {
        startDateParam:false,
        endDateParam:false,
        decimalParam:0,
        isNum:false
    };
    var selectDatepicker = function(obj) {
        var prevendobj = $(obj).parent().parent().prev().find("div").last().children()[0];
        if (prevendobj != undefined && 　prevendobj.value != "") {
            var splitstr = prevendobj.value.split("-");
            var startvalue = (parseInt(splitstr[1]) + 1) > 12 ? (parseInt(splitstr[0]) + 1) + "-01" : (parseInt(splitstr[1]) + 1) < 10 ? splitstr[0] + "-0" + (parseInt(splitstr[1]) + 1) : splitstr[0] + "-" + (parseInt(splitstr[1]) + 1);
            $(obj).val(startvalue);
            $(obj).attr("disabled", "disabled");
        }
    }
    var compareDate = function(endDate){
        if(endDate == null)
            return;
        var StartDate = $(endDate).parent().prev().prev().children()[0].value;
        var start=new Date(StartDate.replace("-", "/").replace("-"));
        var EndDate = $(endDate).val();
        var end=new Date(EndDate.replace("-", "/").replace("-", "/"));
        if(end<start){
            alert("结束时间必须大于起始时间！");
            $(endDate).val("");
        }
        return true;
    }
    $.fn.inputMethod = function(options){  
        var opts = $.extend({},defaults, options);
        $(this).each(function(){
            if($(this).val() != "")
                return;
            if(opts.startDateParam == true){
                selectDatepicker(this);
            }
            if(opts.endDateParam == true){
                $(this).change(function(){
                    compareDate(this);
                });       
            }
            if(opts.decimalParam){
                $(this).change(function(){
                    $(this).val(parseInt($(this).val()).toFixed(opts.decimalParam));
                });
            } 
            if(opts.isNum == true){
                $(this).numeric();
            }           
        });  
    };
})( jQuery );
