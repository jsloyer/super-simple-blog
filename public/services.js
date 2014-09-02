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
            removeModal();
            getBlogPosts(true);
        }
    });
}

function deleteBlogPost(id) {
    $.ajax({
        url: '/api/post/' + id,
        type: 'DELETE',
        success: function(result) {
            $("#delete-" + id).modal("hide");
            removeModal();
            getBlogPosts(true);
        }
    });
}

function createBlogPost(data) {
    $.post("/api/post", data ,function (result) {
        $(".modal.create").modal("hide");
        removeModal();
        getBlogPosts();
    });
}
