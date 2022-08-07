let hire = document.getElementById('hire-talent');
let hire2 = document.getElementById('hire-talent2');
let hire3 = document.getElementById('hire-talent3');
let hireModal = document.getElementById('hire-modal');
// console.log(body);
// console.log(hireModal)

hire.addEventListener('click', function(){

    hireModal.style.display = 'flex';
})
hire2.addEventListener('click', function(){

    hireModal.style.display = 'flex';
})
hire3.addEventListener('click', function(){

    hireModal.style.display = 'flex';
})

window.addEventListener('click', function(e){

    const target = e.target;
    if(target === hireModal){

    hireModal.style.display = 'none';
    }
})

let poolBtn = document.getElementById('pool-btn');
let poolBtn2 = document.getElementById('pool-btn2');
let poolModal = document.getElementById('talent-pool');

poolBtn.addEventListener('click', function(){
    poolModal.style.display = 'flex';
})

poolBtn2.addEventListener('click', function(){
    poolModal.style.display = 'flex';
})
window.addEventListener('click', function(e){
    if(e.target === poolModal){
        poolModal.style.display = 'none';
    }
})



