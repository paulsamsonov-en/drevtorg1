$(document).ready(function() {
    console.log($(".quest_wrap_questions"));
    $(".quest_wrap_questions").click(function() {
        $(this).next(".quest_wrap_answer").toggle();
    });
});