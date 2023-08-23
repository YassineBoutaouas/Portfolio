class NavigationMenu extends HTMLElement {
    constructor() {
      super();
    }

connectedCallback() {
  this.innerHTML = `
  <link rel="stylesheet" href="assets/css/noscript.css" />
  <h2>Menu</h2>
	<ul>
		<li><a href="home.html">About Me</a></li>
		<li><a href="index.html">Projects</a></li>
		<li style="text-indent: 12%;"><a href="goap.html">Goal-Oriented Action Planning</a></li>
		<li style="text-indent: 12%;"><a href="tooldevelopment.html">Tool Development</a></li>
		<li style="text-indent: 12%;"><a href="gameplay.html">Gameplay Programming</a></li>
		<li style="text-indent: 12%;"><a href="crowdsimulation.html">Crowd Simulation</a></li>
		<li><a href="index.html">Contacts</a></li>
		<li style="display: flex; flex-direction: row;">
			<a href="https://github.com/YassineBoutaouas" class="icon brands style2 fa-github"><span class="label">GitHub</span></a>
			<a href="mailto:y.boutaouas@gmail.com" class="icon solid style2 fa-envelope"><span class="label">Email</span></a>
		</li>
	</ul>
  `;
}
}

customElements.define('navigation-menu', NavigationMenu); 