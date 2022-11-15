let alexInfo_en = `
<div id="modal" class="modal" onclick="closeModal()">

		<!-- Modal content -->
		<div class="modal-content">
			<div class="modal-header">
				<h2>Alexander Kell</h2>
				<span class="close" onclick="closeModal()">&times;</span>
			</div>

			<hr />
			<p>My great passion is to experience, explore and understand the ever-changing world around us.</p>
			<br />
			<p>I enthusiastically dive into the depths of human history to develop a better idea of how humanity has
				changed over millennia, centuries and decades. Reading and reflecting on psychology, helps me to better
				understand other people and myself. A deep curiosity, drives me to always learn, discover and try new
				things and to use new technologies to develop smarter and better solutions or improve existing ones.</p>
			<br />
			<p>These personal drivers, pushed me to found rapiddweller together with my co-founder Peter, with the goal
				to make the world a better place.</p>
			<br />
			<p>Summed up: 💡🗺🏞️🥾🧗🌄☕️🍷🚭</p>
		</div>

</div>
`;
let alexInfo_de = `
<div id="modal" class="modal" onclick="closeModal()">

		<!-- Modal content -->
		<div class="modal-content">
			<div class="modal-header">
				<h2>Alexander Kell</h2>
				<span class="close" onclick="closeModal()">&times;</span>
			</div>

			<hr />
			<p>Meine große Leidenschaft ist es, die sich ständig verändernde Welt um uns herum, zu erleben und zu begreifen.</p>
			<br />
			<p>Mit Begeisterung tauche ich in die Tiefe der menschlichen Geschichte ein, um eine bessere Vorstellung zu entwickeln, wie sich die Menschheit über Jahrtausende, Jahrhunderte und Jahrzehnte verändert hat. Das Lesen und Reflektieren über Psychologie hilft mir dabei, andere Menschen und mich selbst besser zu verstehen. Eine tiefe Neugier treibt mich dazu, immer neue Dinge zu lernen, zu entdecken und auszuprobieren und neue Technologien zu nutzen, um intelligentere und bessere Lösungen zu entwickeln oder bestehende Lösungen zu verbessern.</p>
			<br />
			<p>Diese persönlichen Treiber haben mich dazu geführt, mit meinem Co-Founder Peter zusammen rapiddweller zu gründen, mit dem Ziel die Welt ein Stück besser zu machen.
			</p>
			<br />
			<p>Summed up: 💡🗺🏞️🥾🧗🌄☕️🍷🚭</p>
		</div>

</div>
`;
let peterInfo_en = `
<div id="modal" class="modal" onclick="closeModal()">

		<!-- Modal content -->
		<div class="modal-content">
			<div class="modal-header">
				<h2>Peter Brinkhoff</h2>
				<span class="close" onclick="closeModal()">&times;</span>
			</div>

			<hr />
			<p>Supporting large corporations on their journey of digital transformation, gave me deep insights into lots of international IT projects. Clients were struggling with similar issues and mostly reinventing the wheel with millions in consulting spent. Ineffectiveness, missing communication, missing agreements, and plenty of meetings pushed the actual tasks and the motivation of people aside. The change was possible with great ideas, teamwork, and agreed quality standards. Solutions were created that finally made projects a success and let motivation return. SMEs do not have the time and resources to try and error that large corporations might have. But the same constantly changing world is challenging their business, too.</p>
			<br />
			<p>I co-founded rapiddweller to apply tools and concepts from successful projects to digitally transform SMEs at predictable cost and time.
            </p>
			<br />
			<p>I love to explore the world - preferably on foot - and its beautiful nature, meeting new people and their culture, gaining new experiences, and getting surprised. I am a Foodie seeking new tastes in the local cuisines everywhere I go.</p>
			<br />
			<p>Summed up: 🗺💻💡⛵️⛰🎢🤿🚴🍱🥢☕️🍵🚭</p>
		</div>

</div>
`;
let peterInfo_de = `
<div id="modal" class="modal" onclick="closeModal()">

		<!-- Modal content -->
		<div class="modal-content">
			<div class="modal-header">
				<h2>Peter Brinkhoff</h2>
				<span class="close" onclick="closeModal()">&times;</span>
			</div>

			<hr />
			<p>Großunternehmen auf ihrem Weg der digitalen Transformation zu unterstützen, gab mir tiefe Einblicke in viele internationale IT-Projekte. Überall kämpften Kunden mit ähnlichen Problemen und erfanden wieder und wieder mit millionenschweren Beratungskosten das Rad neu. Ineffektivität, fehlende Kommunikation, fehlende Absprachen und viele Meetings drängten die eigentlichen Aufgaben in den Hintergrund und brachten die Motivation zum Erliegen. Mit tollen Ideen, Teamwork und vereinbarten Qualitätsstandards waren schließlich Veränderungen möglich. Es wurden Lösungen geschaffen, die Projekte zum Erfolg führten und die Motivation zurückkehren ließen. KMUs haben weder Zeit noch Ressourcen für derartige Experimente - dieselbe sich ständig verändernde Welt fordert jedoch auch ihr Geschäft heraus.</p>
			<br />
			<p>Ich habe rapiddweller mitgegründet, um Werkzeuge und Konzepte aus erfolgreichen Großprojekten anzuwenden, um KMUs mit überschaubaren Kosten und Zeitaufwand digital zu transformieren.</p>
			<br />
			<p>Ich liebe es unsere Erde - am liebsten zu Fuß - zu erkunden, neue Menschen und ihre Kultur kennenzulernen, neue Erfahrungen zu sammeln und mich überwältigen zu lassen. Als Foodie schaffen das die Geschmäcker in den Küchen dieser Welt.
			</p>
			<br />
			<p>Summed up: 🗺💻💡⛵️⛰🎢🤿🚴🍱🥢☕️🍵🚭</p>
		</div>

</div>
`;




// it will receive one of these parameters alexInfo or peterInfo & lang de or en
function openModal(id) {

	// prevent scrolling
	document.body.style.overflow = "hidden";


	if (id.includes("de")) {

		// return a modal with information
		id.includes("alexInfo") ? document.body.innerHTML += alexInfo_de : document.body.innerHTML += peterInfo_de;

	}
	if (id.includes("en")) {

		// return a modal with information
		id.includes("alexInfo") ? document.body.innerHTML += alexInfo_en : document.body.innerHTML += peterInfo_en;

	}

}

function closeModal() {

	let modal = document.getElementById("modal");
	modal.parentNode.removeChild(modal);
	document.body.style.overflow = "scroll";
}


let alexmore = document.getElementById("alexInfo");


