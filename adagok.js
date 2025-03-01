document.getElementById('servings').addEventListener('input', function() {
    let baseServings = 4; // Az alap recept 4 főre szól
    let newServings = this.value;
    document.querySelectorAll('#ingredients li').forEach(item => {
        let baseAmount = item.getAttribute('data-base');
        item.querySelector('span').textContent = (baseAmount * newServings / baseServings).toFixed(1);
    });
});
