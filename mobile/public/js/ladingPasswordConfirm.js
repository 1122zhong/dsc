var check_pass_word='';var passwords = $('#password').get(0);

$(function(){
    var div = '\
	<div id="key" style="position:absolute;background-color:#A8A8A8;width:99.5%;bottom:0px;">\
		<ul id="keyboard" style="font-size:20px;margin:2px -2px 1px 2px">\
			<li class="symbol"><span class="off">1</span></li>\
			<li class="symbol"><span class="off">2</span></li>\
			<li class="symbol btn_number_"><span class="off">3</span></li>\
			<li class="tab"><span class="off">4</span></li>\
			<li class="symbol"><span class="off">5</span></li>\
			<li class="symbol btn_number_"><span class="off">6</span></li>\
			<li class="tab"><span class="off">7</span></li>\
			<li class="symbol"><span class="off">8</span></li>\
			<li class="symbol btn_number_"><span class="off">9</span></li>\
			<li class="delete lastitem">删除</li>\
			<li class="symbol"><span class="off">0</span></li>\
			<li class="cancle btn_number_">取消</li>\
		</ul>\
	</div>\
	';
    var character,index=0;	$("input.pass").attr("disabled",true);	$("#password").attr("disabled",true);$("#keyboardDIV").html(div);

    $("#addBankCart").click(function () {
        $(".content").css("left","-100%");
        $(".content1").css("left","0%");
    })
    $('#keyboard li').click(function(){
        if ($(this).hasClass('delete')) {
        	$(passwords.elements[--index%6]).val('');
        	if($(passwords.elements[0]).val()==''){
        		index = 0;
        	}
            /*for(var i= 0,len=passwords.elements.length-1;len>=i;len--){
                if($(passwords.elements[len]).val()!=''){
                    $(passwords.elements[len]).val('');
                    break;
                }
            }*/
            return false;
        }
        if ($(this).hasClass('cancle')) {
            $(".content").css("left","0%");
            $(".content1").css("left","100%");
            for(var i= 0,len=passwords.elements.length-1;len>=i;len--){
                    $(passwords.elements[len]).val('');
                }
            index = 0;
        }
        if ($(this).hasClass('symbol') || $(this).hasClass('tab')){
            character = $(this).text();
			$(passwords.elements[index++%6]).val(character);
			if($(passwords.elements[5]).val()!=''){
        		index = 0;
        	}
        /*for(var i= 0,len=passwords.elements.length;i<len;i++){
            if($(passwords.elements[i]).val()== null ||$(passwords.elements[i]).val()==undefined||$(passwords.elements[i]).val()==''){
                $(passwords.elements[i]).val(character);
                break;
            }
        }*/
        if($(passwords.elements[5]).val()!='') {
            var temp_rePass_word = '';
            for (var i = 0; i < passwords.elements.length; i++) {
                temp_rePass_word += $(passwords.elements[i]).val();
            }
            check_pass_word = temp_rePass_word;
            $("#key").hide();

            //模拟密码输入成功，跳转页面
            if(check_pass_word=="000000"){
                location.href="/mobile/resources/views/user/bind_bank_cart.html"
            }
            }
                    }
        return false;
    });
});
(function () {
    function tabForward(e) {
        e = e || window.event;
        var target = e.target || e.srcElement;
        if (target.value.length === target.maxLength) {
            var form = target.form;
            for (var i = 0, len = form.elements.length-1; i < len; i++) {
                if (form.elements[i] === target) {
                    if (form.elements[i++]) {
                        form.elements[i++].focus();
                    }
                    break;
                }
            }
        }
    }
    var form = document.getElementById("password");
    form.addEventListener("keyup", tabForward, false);
    var set_text='\
	<span>请输入</span>\
	<span style="color: red;">提货密码</span>\
	<span>，验证本次操作</span>\
	';
    $("#set_text").html(set_text);
})();