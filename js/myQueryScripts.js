// JavaScript Document
 jQuery( function( $ ) {
	 
	 $(document).ready(function(){
			var h="<div class='monitorGroup row container-fluid'><div class='row'><div class='col-sm-1' style='width:40px;'><span role='button' class='monitorBack glyphicon glyphicon-chevron-left' aria-hidden='true'></span></div><h1 class='col-sm-8'>Monitor group</h1><div class='sideBtns col-sm-2' role='group'  aria-label='Vertical button group'><button type='button' class='btn cutebutton'>Edit monitoring</button><button type='button' class='btn cutebutton'>Delete monitoring</button><button type='button' class='btn cutebutton'>Stop monitoring</button></div></div><div class='sitesList col-sm-6 row' style='margin-top:5px; margin-left:5%; width:65%;'><div class='list-group'><a class='list-group-item' href='#'><span class='badge'>New</span>monitored site 1 </a><a class='list-group-item' href='#'>monitored site 2</a></div></div></div>";
			//$(".monitorGroup-grid").html(h);
			$(".monitorGroup-grid").append(h);
			$(".sideBtns").hide();
		$(".monitorBack").hide();
		$(".sitesList").hide();
			});
	 
	  $("#load-first").click( function() {  
	  	$("#mainDiv").load("file:///D:/Documentos/fct/IPM/mySite/monitoring.html"); 
	  });
	  
	$(".monitorGroup-grid").on("click", ".monitorGroup", function(){
//	$(".monitorGroup").click(function(){
		
		if($(this).find(".monitorBack").css("display")==="none"){
		$(this).css({"height":"400pt"});
		$(this).find(".sideBtns").fadeIn();
		$(this).find(".monitorBack").fadeIn();
		$(this).find(".sitesList").delay(300).fadeIn();
		}
		});

	

	$(".monitorGroup-grid").on("click",".monitorBack", function(){
		$(this).closest(".monitorGroup").find(".sideBtns").fadeOut();
		$(this).closest(".monitorGroup").find(".sitesList").fadeOut();
		$(this).fadeOut();
		$(this).closest(".monitorGroup").css({"height":"150px"});
		});
	$(".segmented-control > input").click(function(){
		alert($("input[type='radio']:checked").val());
	});
	
	$(".cute-panel").on('click', '#sitebtn', function(){
		$(".cute-panel").find("tbody").append('<tr class="cute-tr"><td class="sitesMonitorName"><label class="sitesMonitorLabel">Name: </label><input class="monitorName" type="text"></td><td><label class="sitesMonitorLabel">URL: </label><input class="sitesMonitorURL" type="url" required="true"></td><td style="width: 23pt;"><button type="button" class="closeSite close" >&times;</button></td></tr>');
  
	});
	$(".cute-panel").on('click', '.closeSite', function(){
			$(this).closest("tr").remove();
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
			$(".cute-panel").find("tbody tr").each(function(i, row){
					var name=($(row).find(".monitorName").val());
					var url=($(row).find(".sitesMonitorURL").val());
					if(name=='' && url==''){
						$(row).remove();
						}
						$(row).find(".sitesMonitorURL").oninvalid = function () {alert();
					        this.setCustomValidity("Please enter at least 5 characters.");}
					/*else if(url==''){
						
						}
					else if(name==''){
						name=url;
						}*/
				});
			});
		
	});