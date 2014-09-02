function displayBlogPosts(data) {
    var posts = _.template($("#postsTemplate").html(), {items: data.posts});
    $(".container").append(posts);
}
