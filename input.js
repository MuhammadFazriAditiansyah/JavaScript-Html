document.getElementById('searchForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
    
    var searchValue = document.getElementById('searchInput').value;
    var resultDiv = document.getElementById('result');
    
    if (searchValue) {
        resultDiv.textContent = `Mencari data: ${searchValue}`;
    } else {
        resultDiv.textContent = 'Tidak mencari data...';
    }
        });