

function test() {
var formData = $("#new_comment").serializeArray();
var comment_name = $("#comment_name").value;
var comment_user_id = $("#comment_user_id").value;
var comment_post_id = $("#comment_post_id").value;
var comment_body = $("#comment_body").value;
$.ajax({
       type: "POST",
       url: "/addcomments",
       data: formData,
       //data:{
          //comment: {
              //comment_name : comment_name,
              //comment_user_id : comment_user_id,
              //comment_post_id : comment_post_id,
              //comment_body : comment_body
            //}
         //},
       dataType: 'json',
       success: function(data){
        $(".appendCmnt").append('<p>'+data.name+'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'+data.body+'&nbsp;&nbsp;&nbsp;less than a minute&nbsp;&nbsp;&nbsp;<span>ago</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="javascript:void(0);" id="remCF">delete</a></td></tr></p><hr>')
        $("#remCF").on('click',function(){
            $(this).parent().remove();
            $('hr:last').remove();
        });
       },error: function(msg){
        console.log(msg,'error')
       }
     });
  }


  
