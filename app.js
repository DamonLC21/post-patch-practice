const postContainer = document.querySelector('.posts')

fetch('http://localhost:3000/posts')
.then(response => response.json())
.then(posts => {
  posts.forEach(post => {
    const li = document.createElement('li')
    li.innerText = post.content 
    postContainer.append(li)
  })
})