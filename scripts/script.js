/*$(function()
{
	$(".toggle").on("click", function()
	{
		if ($(".menu_item").hasClass("active"))
			$(".menu_item").removeClass("active");
		else
			$(".menu_item").addClass("active");
	});
});*/

$(document).ready(function()
{
	$(".menu_toggle").on("click", function()
	{
		if ($(".menu_item").hasClass("active"))
			$(".menu_item").removeClass("active");
		else
			$(".menu_item").addClass("active");
	});

	$("main").click(function()
	{
		if ($(".menu_item").hasClass("active"))
			$(".menu_item").removeClass("active");
		
	});
	$("footer").click(function()
	{
		if ($(".menu_item").hasClass("active"))
			$(".menu_item").removeClass("active");
		
	});

	$( window ).scroll(function()
	{
		$(".nav_p").removeClass("menu");
	});
});
