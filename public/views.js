function displayBlogPosts(data) {
    var posts = _.template($("#postsTemplate").html(), {items: data.posts});
    $(".container .posts").empty();
    $(".container .posts").append(posts);
}
$(document).ready(function() {
    $(document).on("click", "form.edit", function(e) {
        //get the form the that was click
        if (e.target.className === "btn btn-primary edit") {
            var formData = ($(e.currentTarget).serializeArray()),
                data = {},
                id = $(e.currentTarget).attr("data-id");
            for (var index in formData) {
                var field = formData[index];
                data[field.name] = field.value;
            }
            updateBlogPost(id, data);
        }
    });

    $(document).on("click", "form.delete", function(e) {
        //get the form the that was click
        if (e.target.className === "btn btn-primary delete") {
            var id = $(e.currentTarget).attr("data-id");
            deleteBlogPost(id);
        }
    });

    $(document).on("click", "button.new", function() {
        var modal = _.template($("#createTemplate").html());
        $(".modalContainer").empty();

        $(".modalContainer").append(modal);
        $(".modalContainer .modal").modal("show");
    });

    $(document).on("click", "form.create", function(e) {
        //get the form the that was click
        if (e.target.className === "btn btn-primary create") {
            var formData = ($(e.currentTarget).serializeArray()),
                data = {};

            for (var index in formData) {
                var field = formData[index];
                data[field.name] = field.value;
            }
            createBlogPost(data);
        }
    });
});

function removeModal() {
    $('body').removeClass('modal-open');
    $('.modal-backdrop').remove();
}
