$(document).ready(function(){$("body").localScroll();$(".full-screen").css("min-height",$(window).height());$(".article-slider").css("min-height",$(window).height());$(window).resize(function(){$(".full-screen").css("min-height",$(window).height());$(".article-slider").css("min-height",$(window).height())});$("#primary-nav").addClass("closed");$("#main").addClass("menu-closed");$("#toggle").click(function(){$(this).toggleClass("close");$("#primary-nav").toggleClass("closed");$("#primary-nav").toggleClass("open");$("#main").toggleClass("menu-open");$("#main").toggleClass("menu-closed");$("body").toggleClass("overflow-hidden")});$("#main").click(function(){$("#primary-nav").addClass("closed");$("#primary-nav").removeClass("open");$("#main").removeClass("menu-open");$("#main").addClass("menu-closed");$("#toggle").removeClass("close");$("body").removeClass("overflow-hidden")});$("#primary-nav a").click(function(){});$("#top").addClass("fadeout");$(window).scroll(function(){var e=window.pageYOffset,t=400;if(e>t){$("#top").addClass("fadein");$("#top").removeClass("fadeout")}else{$("#top").removeClass("fadein");$("#top").addClass("fadeout")}});window.orgfigures=$("#orgfigures").Swipe().data("Swipe");window.grantacc=$("#grantacc").Swipe().data("Swipe");window.highlightedgrantees=$("#highlighted-grantees").Swipe().data("Swipe");$(".project-content").addClass("collapsed");$("#project-1 .project-header").click(function(){$("#project-1 .project-content").toggleClass("collapsed")})});