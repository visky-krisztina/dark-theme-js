const btn = document.querySelector(".btn");
const articlesDOMContainer = document.querySelector(".articles");

btn.addEventListener("click", () => {
	document.documentElement.classList.toggle("dark-theme");
});

const articlesData = articles
	.map((article) => {
		const { length, snippet, date, title } = article;
		//format date with moment.js
		const formateDate = moment(date).format("MMMM Do, YYYY");
		return `<article class="post">
				<h2>${title}</h2>
				<div class="post-info">
					<span>${formateDate}</span>
					<span>${length} min read</span>
				</div>
				<p>
					${snippet}
				</p>
			</article>`;
	})
	.join("");

articlesDOMContainer.innerHTML = articlesData;
