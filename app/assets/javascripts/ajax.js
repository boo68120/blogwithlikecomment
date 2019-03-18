function test() {
var formData = $("#new_comment").serializeArray();
var id = $('#comment_post_id').val();
$.ajax({
       type: "POST",
       url: "/posts/"+id+"/comments",
       data: formData,
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


function del(id){
    var cid = $('.cid').data("id");
    //alert(cid);
    //alert(id);
    if(confirm("Are You Sure?")){
    $.ajax({
        type: "DELETE",
        url: "/posts/"+id+"/comments/"+cid,
        beforeSend: function(xhr) {xhr.setRequestHeader('X-CSRF-Token', $('meta[name="csrf-token"]').attr('content'))},
        data: {delete_id:cid},
        success: function(data){
           $('#delete'+id).hide();
           $("#cmt-count-<%= @post.id %>").html('<%= @post.comments.count %>');
        }
    });
  }
  else{
    console.log(data)
  }
}



function myFunction(value) {
  if(value == ""){
     location.reload();
  }
  else{
  $.ajax({
    type: "GET",
    url: "/posts",
    data: {
      'title': value
    },
    dataType: "text",
    success: function (msg) {

      $.each($.parseJSON(msg), function (key, value) {
        //alert(value[0].body);
        if (value[0].body == null) {
           $('#search').remove();
        }
        else{
          $('#search').remove();
           $('.pagination').remove();
          $("#search1").append('<h3>' + value[0].title + '</h3><p><b>User:</b>boo@spritle.com</p><p>' + value[0].body + '</p>')
        }
      });


    }
  });
}
}
