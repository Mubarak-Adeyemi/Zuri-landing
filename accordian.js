let container = document.getElementsByClassName('question-container');

for(i = 0; i<container.length; i++) {
    container[i].addEventListener('click', function() {
        this.classList.toggle('block');
    })
}