const button = document.querySelector('#more'); // seleciona elemento por id
const post = document.querySelector('.card');
const containerPosts = document.querySelector('.cards');
const likeButton = document.querySelector('.likes > img');
const likeNum = document.querySelector('.likes > b');

likeButton.addEventListener('click', function(){
    if(likeButton.classList.contains('active')){
        likeButton.src = 'img/icons/heart.svg'
        likeButton.classList.remove('active')
        likeNum.innerHTML = '1 like'
    } else {
        likeButton.src = 'img/red-heart.png'
        likeButton.classList.add('active')
        likeNum.innerHTML = '2 likes'
    }
})

button.addEventListener('click', function(){
    containerPosts.innerHTML += post.outerHTML;
})

console.log(button)