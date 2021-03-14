$(document).ready(function() {

    $(".quest_wrap_questions").click(function() {
        $(this).next(".quest_wrap_answer").toggle();
        $(this).find(".vert").toggle();
    });
});