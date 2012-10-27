var xmlhttp
/*@cc_on @*/
/*@if (@_jscript_version >= 5)
  try {
  xmlhttp=new ActiveXObject("Msxml2.XMLHTTP")
 } catch (e) {
  try {
    xmlhttp=new ActiveXObject("Microsoft.XMLHTTP")
  } catch (E) {
   xmlhttp=false
  }
 }
@else
 xmlhttp=false
@end @*/
if (!xmlhttp && typeof XMLHttpRequest!='undefined') {
 try {
  xmlhttp = new XMLHttpRequest();
 } catch (e) {
  xmlhttp=false
 }
}
function myXMLHttpRequest() {
  var xmlhttplocal;
  try {
    xmlhttplocal= new ActiveXObject("Msxml2.XMLHTTP")
 } catch (e) {
  try {
    xmlhttplocal= new ActiveXObject("Microsoft.XMLHTTP")
  } catch (E) {
    xmlhttplocal=false;
  }
 }

if (!xmlhttplocal && typeof XMLHttpRequest!='undefined') {
 try {
  var xmlhttplocal = new XMLHttpRequest();
 } catch (e) {
  var xmlhttplocal=false;
  alert('couldn\'t create xmlhttp object');
 }
}
return(xmlhttplocal);
}


function sndReq(vote,id_num,speaker_id) {
	
	var element = document.getElementById('rankItem'+id_num);
	//new Effect.Fade(element);
    element.innerHTML = '<div style="height: 30px;"><em>Loading ...</em></div>';
	
	var action = '/m/ajax/RankBlogItem.action?rssItemId=' + id_num + '&speakerId=' + speaker_id + '&rank=' + vote;
		
    xmlhttp.open('get', action);
    xmlhttp.onreadystatechange = handleResponse;
    xmlhttp.send(null);
	
}

function handleResponse() {
    if(xmlhttp.readyState == 4){
		if (xmlhttp.status == 200){
       	
        var response = xmlhttp.responseText;
        var update = new Array();

        if(response.indexOf('|') != -1) {
            update = response.split('|');
            changeText(update[0], update[1]);
        }
		}
    }
}

function changeText( div2show, text ) {
    // Detect Browser
    var IE = (document.all) ? 1 : 0;
    var DOM = 0; 
    if (parseInt(navigator.appVersion) >=5) {DOM=1};

    // Grab the content from the requested "div" and show it in the "container"

    if (DOM) {
        var viewer = document.getElementById(div2show)
        viewer.innerHTML=text
    }
    else if(IE) {
        document.all[div2show].innerHTML=text
    }
}
