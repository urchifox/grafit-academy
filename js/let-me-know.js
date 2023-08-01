const letMeKnowButtons = document.querySelectorAll('.let-me-know');

for (const letMeKnowButton of letMeKnowButtons) {
	letMeKnowButton.onclick = function() {
		const iconNotChecked = letMeKnowButton.querySelector('.not-checked');
		const iconChecked = letMeKnowButton.querySelector('.checked');
		iconNotChecked.classList.toggle('hidden');
		iconChecked.classList.toggle('hidden');
	};
}
