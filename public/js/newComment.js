const commentHandler = document.getElementById('new-comment');

const createComment = async (event) => {
    event.preventDefault();

    const content = document.getElementById('new-comment-content').value.trim();

    console.log(`${content}`);
    
    if (content) {
        const response = await fetch('/api/posts/newcomment', {
            method: 'POST',
            body: JSON.stringify({content}),
            headers: { 'Content-Type': 'application/json' }
        });

        if (response.ok) {
            
            console.log(post.id)
            document.location.replace(`/posts/${post.id}`);
        } else {
            alert('failed to add comment')
        }
    }
    
}
    
 



commentHandler.addEventListener('submit', createComment)