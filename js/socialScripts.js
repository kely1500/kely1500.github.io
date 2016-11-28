// JavaScript Document
 jQuery( function( $ ) {
	 $("#postButton").click(function(){
		if($(".posting .socialcheck>input:checked").length>0){
		  $("#post").val('');
		  alert("Your post has been published.");
		}
		else{
			alert("Ups... You have to select to which social networks you want to publish your post!");
			}
	 });
	 
	 $(".img-rounded").click(function(){
		 var alt=$(this).attr("alt");
		 var otherChecks=$("."+alt).find(".socialcheck>input");
		 var check=$(this).closest("tr").find(".loginok");
		 if(check.css('display')==='none'){
            check.show();
			otherChecks.prop('disabled', false);
			
          }
          else{
            check.hide();
			otherChecks.prop('checked', false).change();
			otherChecks.prop('disabled', true);
          }
		 });
		 
		 $(".underRow .socialcheck").change(function(){
			 var theclass=$(this).closest("tr").attr("class");
			 var posts=$(".postsPlace .well").filter("."+theclass);
			 if($(this).find("input").is(':checked')) {
				 posts.show();
			 }
			 else{
				 posts.hide();
				 }
			 });
	 });