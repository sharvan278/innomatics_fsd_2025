function showContent(tabId) {
    let tabs = document.querySelectorAll('.tab-btn');
    tabs.forEach(tab => tab.classList.remove('active'));
    event.target.classList.add('active');
    let contentBoxes = document.querySelectorAll('.content-box');
    contentBoxes.forEach(box => box.style.display = 'none');
    document.getElementById(tabId).style.display = 'flex';
}
