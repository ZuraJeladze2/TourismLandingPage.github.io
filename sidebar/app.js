function myFunc() {
    
    let button = document.querySelector('.sidebar-btn');
    let burger = document.querySelector('.burger')
    let sidebar = document.querySelector('.sidebar')
    burger.addEventListener('click', () => {
        sidebar.classList.add('active');

    })
    button.addEventListener('click', () => {
        sidebar.classList.remove('active');
    }, true)
}
myFunc()