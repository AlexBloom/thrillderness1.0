$(document).ready(function(){$(".full-screen-container").css("min-height",$(window).height());$(window).resize(function(){$(".full-screen-container").css("min-height",$(window).height())});$("#site-header").addClass("closed");$("#main").addClass("open");$("#nav-toggle").click(function(){$("#site-header").toggleClass("closed");$("#site-header").toggleClass("open");$("#main").toggleClass("open");$("#main").toggleClass("closed");$("body").toggleClass("overflow-hidden")});$(".main").click(function(){$("#site-header").addClass("closed");$("#site-header").removeClass("open");$(".main").removeClass("menu-open");$(".main").addClass("menu-closed");$("#toggle").removeClass("close");$("body").removeClass("overflow-hidden")})});