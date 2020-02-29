function menuClick() {
    const headerUl = document.getElementById('header-ul');
    if (headerUl.style.display === 'block') {
        headerUl.style.display = 'none';
        return;
    }
    headerUl.style.display = 'block';
}