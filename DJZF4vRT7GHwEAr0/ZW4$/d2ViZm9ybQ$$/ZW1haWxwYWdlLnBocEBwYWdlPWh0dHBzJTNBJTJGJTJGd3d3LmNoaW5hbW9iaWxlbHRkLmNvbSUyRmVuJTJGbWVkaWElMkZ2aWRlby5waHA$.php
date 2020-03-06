
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.1//EN" "http://www.w3.org/TR/xhtml11/DTD/xhtml11.dtd">
	<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
	<html xmlns="http://www.w3.org/1999/xhtml">
    <head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <title>China Mobile Limited - Search</title>
    <script type="text/javascript" src="../../js/jquery-1.11.1.min.js"></script>
<script type="text/javascript" src="../../js/fancybox/jquery.fancybox.js?v=2.1.5.js"></script>
<script type="text/javascript" src="../../js/jquery.cycle2.min.js"></script>
<script type="text/javascript" src="../../js/highcharts.js"></script>
<script type="text/javascript" src="../../js/exporting.js"></script>
<script type="text/javascript" src="../../js/jquery.appear.js"></script>
<script type="text/javascript" src="../../js/en/chart_common.js"></script>

<script type="text/javascript" src="../../js/slick/slick.min.js"></script>
<script type="text/javascript" src="../../js/magnific.js"></script>
<script type="text/javascript" src="../../js/jquery.responsiveTabs.min.js"></script>
<script type="text/javascript" src="../../js/common.js"></script>
<script language="javascript" type="text/javascript" src="//s7.addthis.com/js/250/addthis_widget.js"></script>





<script language="javascript" type="text/javascript">
$(function(){
	$("input[type=text]").each(function(){
		$("#"+this.id).focus(function(){
			if($("#"+this.id).attr("value")=="Name" || $("#"+this.id).attr("value")=="Email")
			{
				$("#"+this.id).attr("value","");
			}
		});
	});
});
</script>
<style>
BODY, B, P, TD, input, textarea, select, LI, A {
	font-family : Arial;
	font-size: 12px;
	color : #363636;
}
BODY {
	margin-left: 0px;
	margin-top: 0px;
	margin-right: 0px;
	margin-bottom: 0px;	
}
P {
	line-height: 16px;
}

.clear
{
	clear:both;
}

#page
{
	width:300px;
	height:300px;
	overflow:hidden;
}

#header
{
	background-color:#46a9dd;
	padding:6px 6px 6px 6px;
}

.headerText, .headerText *
{
	font-weight:bold;
	color:#FFF;
	text-decoration:none;
}

#main
{
	padding:6px 6px 6px 6px;
}

.nameInput
{
	border:1px #CCC solid;
	width:90px;
	-webkit-appearance: none;
}

.emailInput
{
	border:1px #CCC solid;
	width:150px;
	-webkit-appearance: none;
}

#msgBox
{
	border:1px #CCC solid;
	width:265px;
	height:50px;
	-webkit-appearance: none;
}
</style>
</head>

<body>
<div id="page">
	<FORM name="emailpageform" method="post" action="emailpage.php">
		<div id="header">
			<div class="headerText" style="float:left">Email This Page</div>
			<div class="headerText" style="float:right; display:none;"><a href="javascript:;">Close</a></div>
			<div class="clear"></div>
		</div>
		
		<div id="main">
									
					<div>To:</div>
					<input name="toname" id="toname" class="nameInput" type="text" placeholder="Name" value="" />
					<input name="toemail" id="toemail" class="emailInput" type="text" placeholder="Email" value="" />
					
					<div style="padding-bottom:6px"></div>
					
					<div>From:</div>
					<input name="fromname" id="fromname" class="nameInput" type="text" placeholder="Name" value="" />
					<input name="fromemail" id="fromemail" class="emailInput" type="text" placeholder="Email" value="" />
					
					<div style="padding-bottom:6px"></div>
					
					<div>Message:</div>
					<textarea name="msgBox" id="msgBox" rows="3"></textarea>
					
					<div style="padding-bottom:6px"></div>
					
					<div>Verification Code:</div>
					<div style="float:left"><input name="captcha" id="captcha" type="text" value="" style="width:50px;" class="nameInput" />&nbsp;</div><div style="float:left"><IMG src="../../lib/captcha/CaptchaSecurityImages.php?width=60&amp;height=22&amp;characters=5" /></div>
					<div class="clear"></div>
					<div style="padding-bottom:6px"></div>
					
					<input name="Submit" type="Submit" VALUE="Submit"> <INPUT name="Reset" type="reset" value="Reset">
					
					<input name="page" id="page" type="hidden" value="https://www.chinamobileltd.com/en/media/video.php" />
					</div>
	</FORM>
</div>
</body>
</html>