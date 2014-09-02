function getBlogPosts() {
    $.get( "/api/posts", function(data) {
        displayBlogPosts(data);
    });
}

function updateBlogPost(id, data) {
    $.ajax({
        url: '/api/post/' + id,
        type: 'PUT',
        data: data,
        success: function(result) {
            $("#edit-" + id).modal("hide");
            $('body').removeClass('modal-open');
            $('.modal-backdrop').remove();
            getBlogPosts();
        }
    });
}
