/*$(function()
{
	$(".toggle").on("click", function()
	{
		if ($(".item").hasClass("active"))
			$(".item").removeClass("active");
		else
			$(".item").addClass("active");
	});
});*/

$(document).ready(function()
{
	$(".toggle").on("click", function()
	{
		if ($(".item").hasClass("active"))
			$(".item").removeClass("active");
		else
			$(".item").addClass("active");
	});

	$("main").click(function()
	{
		if ($(".item").hasClass("active"))
			$(".item").removeClass("active");
		
	});
	$("footer").click(function()
	{
		if ($(".item").hasClass("active"))
			$(".item").removeClass("active");
		
	});

	$( window ).scroll(function()
	{
		$(".nav_p").removeClass("menu");
	});
});
