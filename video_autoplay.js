<script>
	window.onload = addAutoplay();
	var videoLocation  = document.getElementById("achtergrondvideo");
	function addAutoplay() {
		if(window.innerWidth >800){
			videoLocation.setAttribute("autoplay","");
	  };
	}
</script>