/*
	Phantom by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

let	scrollButton = document.getElementById("scrollback");
let projectsButton = document.getElementById("checkbox-projects");
let abilitiesButton = document.getElementById("checkbox-abilities");

var $projectstab = document.getElementById("projects-tab");
var $abilitiestab = document.getElementById("abilities-tab");

let editorComponents = document.getElementById("detail-img");
const editorElements = [
	document.getElementById("img_0"),
	document.getElementById("img_1"),
	document.getElementById("img_2"),
	document.getElementById("img_3"),
	document.getElementById("img_4"),
];

window.onscroll = function() {scrollFunction()};
scrollButton.onclick = toTopFunction;

if(projectsButton !== null)
	projectsButton.onclick = toggleProjects;
if(abilitiesButton !== null)
	abilitiesButton.onclick = toggleAbilities;

if(editorComponents !== null)
	editorComponents.onclick = toggleEditorComponentImages;

(function($) {

	var	$window = $(window),
		$body = $('body');

	// Breakpoints.
		breakpoints({
			xlarge:   [ '1281px',  '1680px' ],
			large:    [ '981px',   '1280px' ],
			medium:   [ '737px',   '980px'  ],
			small:    [ '481px',   '736px'  ],
			xsmall:   [ '361px',   '480px'  ],
			xxsmall:  [ null,      '360px'  ]
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Touch?
		if (browser.mobile)
			$body.addClass('is-touch');

	// Forms.
		var $form = $('form');

		// Auto-resizing textareas.
			$form.find('textarea').each(function() {

				var $this = $(this),
					$wrapper = $('<div class="textarea-wrapper"></div>'),
					$submits = $this.find('input[type="submit"]');

				$this
					.wrap($wrapper)
					.attr('rows', 1)
					.css('overflow', 'hidden')
					.css('resize', 'none')
					.on('keydown', function(event) {

						if (event.keyCode == 13
						&&	event.ctrlKey) {

							event.preventDefault();
							event.stopPropagation();

							$(this).blur();

						}

					})
					.on('blur focus', function() {
						$this.val($.trim($this.val()));
					})
					.on('input blur focus --init', function() {

						$wrapper
							.css('height', $this.height());

						$this
							.css('height', 'auto')
							.css('height', $this.prop('scrollHeight') + 'px');

					})
					.on('keyup', function(event) {

						if (event.keyCode == 9)
							$this
								.select();

					})
					.triggerHandler('--init');

				// Fix.
					if (browser.name == 'ie'
					||	browser.mobile)
						$this
							.css('max-height', '10em')
							.css('overflow-y', 'auto');

			});

	// Menu.
		var $menu = $('#menu');

		$menu.wrapInner('<div class="inner"></div>');

		$menu._locked = false;

		$menu._lock = function() {

			if ($menu._locked)
				return false;

			$menu._locked = true;

			window.setTimeout(function() {
				$menu._locked = false;
			}, 350);

			return true;

		};

		$menu._show = function() {

			if ($menu._lock())
				$body.addClass('is-menu-visible');

		};

		$menu._hide = function() {

			if ($menu._lock())
				$body.removeClass('is-menu-visible');

		};

		$menu._toggle = function() {

			if ($menu._lock())
				$body.toggleClass('is-menu-visible');

		};

		$menu
			.appendTo($body)
			.on('click', function(event) {
				event.stopPropagation();
			})
			.on('click', 'a', function(event) {

				var href = $(this).attr('href');

				event.preventDefault();
				event.stopPropagation();

				// Hide.
					$menu._hide();

				// Redirect.
					if (href == '#menu')
						return;

					window.setTimeout(function() {
						window.location.href = href;
					}, 350);

			})
			.append('<a class="close" href="#menu">Close</a>');

		$body
			.on('click', 'a[href="#menu"]', function(event) {

				event.stopPropagation();
				event.preventDefault();

				// Toggle.
					$menu._toggle();

			})
			.on('click', function(event) {

				// Hide.
					$menu._hide();

			})
			.on('keydown', function(event) {

				// Hide on escape.
					if (event.keyCode == 27)
						$menu._hide();

			});

			bindCollapsibles();

})(jQuery);

function scrollFunction(){
	if(document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
		scrollButton.style.display = "block";
	  } else {
		scrollButton.style.display = "none";
	  }
}

function toTopFunction(){
	document.body.scrollTop = 0;
  	document.documentElement.scrollTop = 0;
}

function toggleProjects(){
	if($projectstab.style.display === 'flex')
		return;
	
	projectsButton.classList.add("toggle-button-active");
	abilitiesButton.classList.remove("toggle-button-active");
	
	$projectstab.style.display = 'flex';
	$abilitiestab.style.display = 'none';
}

function toggleAbilities(){
	if($projectstab.style.display === 'none')
	return;

	abilitiesButton.classList.add("toggle-button-active");
	projectsButton.classList.remove("toggle-button-active");

	$projectstab.style.display = 'none';
	$abilitiestab.style.display = 'flex';
}

function toggleEditorComponentImages(event){
	var rect = event.target.getBoundingClientRect();

	let relativePosX = (event.clientX - rect.left) / rect.width;
    let relativePosY = (event.clientY - rect.top) / rect.height;

	console.log("x: " + relativePosX + ", y:" + relativePosY);

	if(relativePosX < 0.15) {
		for(let i = 0; i < 5; i++){
			editorElements[i].style.display = 'none';
		}

		editorElements[4].style.display = 'block';
		return;
	}

	if(relativePosX > 0.7 && relativePosY < 0.6) {
		for(let i = 0; i < 5; i++){
			editorElements[i].style.display = 'none';
		}

		editorElements[2].style.display = 'block';
		return;
	}

	if(relativePosX > 0.7 && relativePosY > 0.4) {
		for(let i = 0; i < 5; i++){
			editorElements[i].style.display = 'none';
		}

		editorElements[3].style.display = 'block';
		return;
	}

	if(relativePosX > 0.15 && relativePosX < 0.7 && relativePosY > 0.7) {
		for(let i = 0; i < 5; i++){
			editorElements[i].style.display = 'none';
		}

		editorElements[1].style.display = 'block';
		return;
	}

	for(let i = 0; i < 5; i++){
		editorElements[i].style.display = 'none';
	}

	editorElements[0].style.display = 'block';
}

function toggleFoldout() {
}

function bindCollapsibles(){
	var coll = document.getElementsByClassName("collapsible");

	for (var i = 0; i < coll.length; i++) {
	  	coll[i].addEventListener("click", function() {
	  	  var content = this.nextElementSibling;
			this.classList.toggle("active-collapsible");
			
			if (content.style.maxHeight){
				content.style.maxHeight = null;
			} else {
				content.style.maxHeight = content.scrollHeight + "px";
			}
	  	});
	}	
}