$(function() {

    //datepicker
    $(".datepicker,#datepicker").datepicker({
        prevText: 'Last',
        nextText: 'Next',
        currentText: 'Today',
        monthNames: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'],
        monthNamesShort: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'],
        dayNames: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
        dayNamesShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
        dayNamesMin: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
        buttonImageOnly: false,
        changeMonth: true,
        changeYear: true,
        dateFormat: 'yy.mm.dd',
    }); 
    
    //gnb width 
    let length = $('.headerframe nav ul li').length;
    let width = $('.headerframe nav');
        if(length<5){				
            width.addClass('wid_value')
        }
        else{				
            width.removeClass('wid_value')
        }
        
    //bpop
    function callPop(classId) {
        $(classId).bPopup({
                      
        });
        /*$(classId).draggable({
            'cancel': '.pop-con'
        }); //레이어 드래그 */
    }
   //gnb 활성화
    
    
    
});




