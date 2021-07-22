document.body.style.color = "#282a36"
document.body.style.fontWeight = "600"
document.body.style.backgroundColor = "#44475a"

document.body.getElementsByClassName("navbar-expand-lg")[0].style.backgroundColor = "#282a36"
document.body.getElementsByClassName("navbar-expand-lg")[0].style.opacity = "100%"

document.body.getElementsByClassName("notification_nav_item")[0].style.color = "#282a36"

document.getElementsByTagName("h1")[0].style.color = "#f8f8f2"
document.getElementsByTagName("h1")[0].style.fontSize = "30px"
document.getElementsByTagName("h1")[0].style.fontWeight = "700"


for (i = 0; i < parseInt(document.getElementsByClassName("list-group")[0].children.length); i++) {
    console.log(i)

    document.getElementsByClassName("btn-primary")[i].style.backgroundColor = "#282a36"
    document.getElementsByClassName("btn-primary")[i].style.border = "3px solid #bd93f9"
    document.getElementsByClassName("btn-primary")[i].style.color = "#bd93f9"
    document.getElementsByClassName("btn-primary")[i].innerText = "View Profile"

    document.getElementsByClassName("list-group-item")[i].style.backgroundColor = "#282a36"
    document.getElementsByClassName("list-group-item")[i].style.color = "#f8f8f2"
    document.getElementsByClassName("list-group-item")[i].style.borderRadius = "5px"
}

$("#feedback_trigger_plus").remove();
$(".notification_nav_item").remove();