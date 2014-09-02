function getBlogPosts() {
    $.get( "/api/posts", function(data) {
        displayBlogPosts(data);
    });
}
