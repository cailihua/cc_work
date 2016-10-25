//@ sourceMappingURL=jquery.numeric.min.map
(function($){ 
    var defaults = {
        dateLinkageParam:false,//开始时间联动
        dateLinkageObj :'.endDateNew',
        compareDateParam:false,//开始时间和结束时间对比
        compareDateObj :'.startDateNew',
        divObj : '.date_info'

    };
    var selectDatepicker = function(obj, dateLinkageObj, divObj) {
        var prevendobj = $(obj).parents(divObj).prev().find(dateLinkageObj)[0];
        if (prevendobj != undefined && 　prevendobj.value != "") {
            var splitstr = prevendobj.value.split("-");
            var startvalue = (Number(splitstr[1]) + 1) > 12 ? (Number(splitstr[0]) + 1) + "-01" : (Number(splitstr[1]) + 1) < 10 ? splitstr[0] + "-0" + (Number(splitstr[1]) + 1) : splitstr[0] + "-" + (Number(splitstr[1]) + 1);
            $(obj).val(startvalue);
            $(obj).attr("disabled", "disabled");
        }
    }

     var compareDate = function(endDate, compareDateObj, divObj){
        if(endDate == null || endDate.value == "")
            return;
        var StartDate =$(endDate).parents(divObj).find(compareDateObj)[0].value;
        var EndDate = $(endDate).val();
        if(EndDate < StartDate){
            alert("结束时间必须大于起始时间！");
            $(endDate).val("");
        }
        return true;
    } 

    $.fn.inputMethod = function(options){  
        var opts = $.extend({},defaults, options);
        $(this).each(function(){
            if(opts.dateLinkageParam == true){
                selectDatepicker(this, opts.dateLinkageObj, opts.divObj);
            }
            if(opts.compareDateParam == true){
                $(this).change(function(){
                    compareDate(this, opts.compareDateObj, opts.divObj);
                });       
            }        
        });  

})( jQuery );
