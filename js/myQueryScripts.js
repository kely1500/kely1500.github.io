// JavaScript Document
 jQuery( function( $ ) {
	 
	 $(document).ready(function(){
			
			$(".sideBtns").hide();
		$(".monitorBack").hide();
		$(".sitesList").hide();
		var act=$("input[type='radio']:checked").val();
		if(act==1){
			$("#deactive").hide();
		}
		else{
			$("#active").hide();			
		}
			});
	 
	/*  $("#load-first").click( function() {  
	  	$("#mainDiv").load("file:///D:/Documentos/fct/IPM/mySite/monitoring.html"); 
	  });
	  */
	$(".monitorGroup-grid").on("click", ".monitorGroup", function(){
//	$(".monitorGroup").click(function(){
		var restart=$(this).find(".restartmonit").css("display");
		var grid=$(this).closest(".monitorGroup-grid");
		if($(this).find(".monitorBack").css("display")==="none" && ((restart!="none" && grid.is("#deactive"))|| (restart=="none" && grid.is("#active")))){
			$(this).find(".monitor-badge").fadeOut();
			$(this).find(".restartmonit").fadeOut();
			$(this).css({"height":"400pt"});
			$(this).find(".sideBtns").delay(200).fadeIn();
			$(this).find(".monitorBack").fadeIn();
			$(this).find(".sitesList").delay(300).fadeIn();
		}
		});

	
	$("#active").on("click",".sitesList>>>a", function(){
		var badge=$(this).find(".badge");
		if( badge.css("display")!="none"){
			badge.fadeOut();
			var old=$(this).closest(".sitesList").find(".oldmonit");
			var site=$(this).remove();
			old.prepend(site);
			}
		});
	
	$(".monitorGroup-grid").on("click",".monitorBack", function(){
		$(this).closest(".monitorGroup").find(".sideBtns").fadeOut();
		$(this).closest(".monitorGroup").find(".sitesList").fadeOut();
		$(this).fadeOut();
		$(this).closest(".monitorGroup").css({"height":"150px"});
		if($(this).closest(".monitorGroup-grid").is("#deactive")){
			
			$(this).closest(".monitorGroup").find(".restartmonit").delay(300).fadeIn();
		}
		var badgeN=$(this).closest(".monitorGroup").find(".sitesList").find(".badge:not(:hidden)").length;
		if(badgeN>0){
			var b=$(this).closest(".monitorGroup").find(".monitor-badge");
			b.text(badgeN);
			b.delay(300).fadeIn();
			}
		
		});
	$(".segmented-control > input").click(function(){
		var act=$("input[type='radio']:checked").val();
		if(act==1){
			
			$("#deactive").hide();
			$("#active").delay(400).show();
			}
		else{
			$("#active").hide();
			$("#deactive").delay(400).show();
			
			}
	});
	var toDelete;
	$(".monitorGroup-grid").on('click', '#delete-monit', function(){
		
		var modal='Are you sure you want to delete the <strong>'+$(this).closest(".monitorGroup").find("h1").text()+'</strong> monitoring?';
		$("#confirmDelete").find(".modal-body>p").html(modal);
		
		$("#confirmDelete").modal('show');
		toDelete=$(this).closest(".monitorGroup");
		
		});
		$("#confirm").click(function(){
			toDelete.fadeIn();
			toDelete.remove();
			activeEmpty();
			deactiveEmpty();
			});
	
	$("#deactive").on("click","#stop-monit", activate);
	
	
		function activate(){
			
			var monigroup=$(this).closest(".monitorGroup");
			monigroup.find("#stop-monit").text("Stop monitoring");
			
			monigroup.find(".restartmonit").hide();
			monigroup.find(".sideBtns").hide();
			
			monigroup.find(".sitesList").hide();
			monigroup.css({"height":"150px"});
			monigroup.find(".monitorBack").fadeOut();
			//monigroup.fadeOut();
			monigroup.remove();
			$(".normalmonits").append(monigroup);
			deactiveEmpty();
			activeNotEmpty();
			}
			
			
	$("#active").on("click","#stop-monit",function(){
		
		var monigroup=$(this).closest(".monitorGroup");
		monigroup.find(".sitesList").find(".badge:not(:hidden)").hide();
		monigroup.find("#stop-monit").text("Start monitoring");
		
		monigroup.find(".restartmonit").hide();
			monigroup.find(".sideBtns").hide();
			
			monigroup.find(".sitesList").hide();
			monigroup.css({"height":"150px"});
			monigroup.find(".monitorBack").fadeOut();
			monigroup.find(".restartmonit").fadeIn();
		//first().after("<button type='button' class='btn cutebutton restartmonit'>Start monitoring</button>");
		//monigroup.fadeOut();
		monigroup.remove();
		$("#deactive").prepend(monigroup);
		activeEmpty();
		deactiveNotEmpty();
		/*$("#deactive").first().fadeIn();*/
		});
	function activeNotEmpty(){
		$(".noActive").hide();
		}
	
	function deactiveNotEmpty(){
		$(".noDeactive").hide();
		}
	function activeEmpty(){
	
		if($("#active").find(".monitorGroup").length==0){
				$(".noActive").show();
			}
		}
	function deactiveEmpty(){
		if($("#deactive").find(".monitorGroup").length==0){
				$(".noDeactive").show();
			}
		}
	$(".monitorGroup-grid").on("click",".restartmonit", activate);
	
	$(".cute-panel").on('click', '#sitebtn', function(){
		$(".cute-panel").find("tbody").append('<tr class="cute-tr"><td class="sitesMonitorName"><label class="sitesMonitorLabel">Name: </label><input class="monitorName" type="text"></td><td><label class="sitesMonitorLabel" id="urlLabel" >URL: <abbr class="required"> *</abbr></label><input class="sitesMonitorURL" type="url" required="true" title="This field is required!!" oninvalid="this.setCustomValidity("This field is required!!")"></td><td style="width: 23pt;"><button type="button" class="closeSite close" >&times;</button></td></tr>');
  	
	});
	$(".cute-panel").on('click', '.closeSite', function(){
			$(this).closest("tr").remove();
			if($(".cute-panel").find(".sitesMonitorURL").filter(function(){return $(this).val()!=''}).length==0){
				$("#add-monitoring").prop('disabled', true);
				}
		});
		
		
	$('[data-toggle="tooltip"]').tooltip(); 
	
	
	$("#checkkeys").click(function(){
	
		if($("#checkkeys").prop('checked')){
			$("#keys").prop( "disabled", false );
		}
		else{
			$("#keys").prop( "disabled", true);
			}
		});
		
		
		$("#add-monitoring").click(function(){
			var newmonit='<div class="monitorGroup row container-fluid"><div class="row"><div class="col-sm-1" style="width:40px;"><span role="button" class="monitorBack glyphicon glyphicon-chevron-left" aria-hidden="true" style="display:none"></span></div><h1 class="col-sm-8">';
			var ok=true;
			var group=$("#group_name").val();
			if(group==''){
				ok=false;
				}
			newmonit+=group;
			newmonit+='</h1><span class="badge monitor-badge" style="display:none"></span><div class="sideBtns col-sm-2" role="group"  aria-label="Vertical button group" style="display:none"><button type="button" id="edit-monit" class="btn cutebutton">Edit monitoring</button><button type="button" id="delete-monit" class="btn cutebutton">Delete monitoring</button><button type="button" id="stop-monit" class="btn cutebutton">Stop monitoring</button></div></div><button type="button" class="btn cutebutton restartmonit" style="display:none">Start monitoring</button><div class="sitesList col-sm-6 row " style="margin-top:5px; margin-left:5%; width:65%; display:none"><div class="list-group">';
			/*var hasKeys=false;
			var keys;
			if($("#checkkeys").is(':checked')){
				haskeys=true;
				$("#keys").val();
				}*/
			$(".cute-panel").find("tbody tr").each(function(i, row){
					
					var name=($(row).find(".monitorName").val());
					var url=($(row).find(".sitesMonitorURL").val());
					
					var removed=false;
					if(name=='' && url==''){
						$(row).remove();
						removed=true;
						}
					else if(url==''){
						ok=false;
						/*var t=$(row).find(".sitesMonitorURL");
						t.tooltip({ items: ".sitesMonitorURL", content: "Displaying on click"});
						t.tooltip("open");*/
						}
					else if(name==''){
						name=url;
						}
					if(!removed){
						newmonit+='<a class="list-group-item" href="'+url+'" target="_blank"><span class="badge" style="display:none">New</span>'+name+'</a>';
					}
    
				});
				newmonit+='</div></div></div>';
				if(ok){
					$(".normalmonits").append(newmonit);
					activeNotEmpty();
					clearNewMonit();
					$("#myModal").modal('toggle');
				}
			});
			$("#cancel-monitoring").click(clearNewMonit);
			
			function clearNewMonit(){
				$("#group_name").val('');
				$(".cute-panel").find("tbody").empty();
				$("#checkkeys").prop( "checked", false );
				$("#keys").val('');
				$("#add-monitoring").prop('disabled', true);
				}
		
		$("#group_name").keyup(function(){
			if($(this).val()==''){
				$("#add-monitoring").prop('disabled', true);
				}
			else if($(".cute-panel").find(".sitesMonitorURL").filter(function(){return $(this).val()!=''}).length>0){
				$("#add-monitoring").prop('disabled', false);
				}
			});
			
		$(".cute-panel").on('keyup', '.sitesMonitorURL', function(){
			if($("#group_name").val()!='' && $(this).val()!=''){
				$("#add-monitoring").prop('disabled', false);
			}
		});
		
		
		
});
	
	
		