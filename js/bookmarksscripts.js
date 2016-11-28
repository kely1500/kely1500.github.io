// JavaScript Document
 jQuery( function( $ ) {
	 
	 var toDelete;
	 
	 $("#bookmarks").on('click','.bookm-remove', function(){
		 var modal='Are you sure you want to delete <strong>'+$(this).closest("#imagem").find("a").text()+'</strong> from your bookmarks?';
		$("#confirmDeleteSite").find(".modal-body>p").html(modal);
		
		$("#confirmDeleteSite").modal('show');
		toDelete=$(this).closest("#imagem");
		 
	 });
	 
	 $("#confirm").click(function(){
			toDelete.fadeIn();
			toDelete.remove();
			});
	 
	 $("#panel>>.oi").on('click', 'li', function(){
		 
		 });
		 
	 $("#okBtn").click(function(){
		  var selectedname = $('#name').val();
  var selectedurl = $('#url').val();
  if(selectedname==''){
  	selectedname=selectedurl;
  }
    $('div.images').append('<div id="imagem"><p><a href="' +selectedurl + '" target="_blank"><img src="img/image_not_found.jpg" class="imag1" width="160" height="120"><br>'+ selectedname+'</a></p><span id="pencil" class="glyphicon glyphicon-pencil"></span><span id="tirar" class="bookm-remove glyphicon glyphicon-remove"></span></div>');
		 $("#myModal").modal('toggle');
		 clearModal();
		 });
		function clearModal(){
			$('#name').val('');
			$('#url').val('');
			$('#desc').val('');
			$('#novasCategorias').empty();
			}
	 
	 $("#butedit>button").click(function(){
		  var cats=$("#navmenu_principal").html();
	
		 $("#c").html(cats);
		 $("#c").find("li").append('<span class="remove">&#10006;</span>');
		 $("#c").find("li:first-child").hide();
		 });
		 
	 $("#add_web").click(function(){
		 var cats=$("#navmenu_principal").html();
		
		 $("#modalParaCategorias").html(cats);
		  $("#modalParaCategorias").find("li:first-child").hide();
		 });
		 
		/*$("#c").on('click', '.remove', function(){
			});*/
		
		$("#applycats").click(function(){
			var newcats=$("#c").children();
			$("#navmenu_principal").html(newcats);
			$("#navmenu_principal").find(".remove").remove();
			$("#navmenu_principal").find("li:first-child").show();
			});
		$("#categoryname").keyup(function(event){
			if(event.keyCode == 13){
				 $("#addNewCategoryButton").click();
				}
			});
			
			$("#newCategory").on('shown.bs.modal', function () {
    		$("#categoryname").focus();
}) ;

$('#myModal').on('shown.bs.modal', function () {
    		$("#name").focus();
}) ;
	 });