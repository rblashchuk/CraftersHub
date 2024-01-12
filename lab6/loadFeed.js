document.addEventListener("DOMContentLoaded", function () {
    // Показываем индикатор загрузки
    document.querySelector('.table-container').innerHTML = '<img src="sheep_loading.gif" alt="Loading...">';

    setTimeout(function () {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                updateTable(data);
            })
            .catch(error => {
                console.error('Error fetching data:', error)
                showError();
            });
    }, 3000);
});

function updateTable(data) {
    const randomFail = Math.random() < 0.5;
    if (randomFail) {
        showError();
        return;
    }

    const filtered = data.filter(post => post.userId % 2 == 0 && post.id % 2 == 0)

    let tableHTML = `
        <h2 class="table-container__title">Posts</h2>
        <div class="table-header">
            <div class="table-cell">userId</div>
            <div class="table-cell">id</div>
            <div class="table-cell">title</div>
            <div class="table-cell">body</div>
        </div>
    `;

    filtered.forEach(post => {
        tableHTML += `
            <div class="table-row">
                <div class="table-cell">${post.userId}</div>
                <div class="table-cell">${post.id}</div>
                <div class="table-cell">${post.title}</div>
                <div class="table-cell">${post.body}</div>
            </div>
        `;
    });

    document.querySelector('.table-container').innerHTML = tableHTML;
}

function showError() {
    document.querySelector('.table-container').innerHTML = `
        <img src="sheep_failed.png" alt="Failed to load">
        <p>Ой, что-то пошло не так.</p>
    `;
}