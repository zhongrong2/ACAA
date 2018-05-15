src="jquery-3.3.1.min.js";
{
    $(".m").hover(
        function () {
            if($(this).find("li").length>0){
                $(this).children("ul").slideDown(200);
            }
        },
        function () {
            $(this).children("ul").slideUp("fast");
        }
    )
}