window.onload = function() {
    // Load any saved values from LocalStorage
    var onlyAvailable = localStorage.getItem('only_available');
    var genere = localStorage.getItem('genere');
    var titolo = localStorage.getItem('titolo');

    if(onlyAvailable !== null) document.getElementById('checkbox').checked = (onlyAvailable === 'true');
    if(genere !== null) document.getElementById('genere').value = genere;
    if(titolo !== null) document.getElementsByName('titolo')[0].value = titolo;

    document.getElementById('checkbox').addEventListener('change', function() {
        localStorage.setItem('only_available', this.checked);
    });

    document.getElementById('genere').addEventListener('change', function() {
        localStorage.setItem('genere', this.value);
    });

    document.getElementsByName('titolo')[0].addEventListener('input', function() {
        localStorage.setItem('titolo', this.value);
    });
    document.getElementById("filter-reset-button").addEventListener("click", function() {
        localStorage.removeItem('only_available');
        localStorage.removeItem('genere');
        localStorage.removeItem('titolo');
        document.getElementById('checkbox').checked = false;
        document.getElementById('genere').value = '';
        document.getElementsByName('titolo')[0].value = '';
    });
};