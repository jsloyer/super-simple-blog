function displayBlogPosts(data) {
    var posts = _.template($("#postsTemplate").html(), {items: data.posts});
    $(".container .posts").empty();
    $(".container .posts").append(posts);
}
$(document).ready(function() {
    $(document).on("click", "form.edit", function(e) {
        //get the form the that was click
        console.log(e);
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
});
