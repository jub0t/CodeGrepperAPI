Tailwinds = `<link href="https://unpkg.com/tailwindcss@^2.0/dist/tailwind.min.css" rel="stylesheet">`

Developer_Helped = parseInt(document.getElementById("developers_helped_text").innerText);
Followers = parseInt(document.getElementsByClassName("box1")[0].childElementCount);

document.getElementById("profile_container").style.border = "5px"
document.getElementById("profile_image_edit").style.borderRadius = "5px"
document.getElementById("help_with_donate").innerText = "About"
document.getElementById("top_answers").innerText = "Top Answers"

$("#activity_enabled_holder").remove()
$("html").append(Tailwinds)
$(".a-center")[0].remove()
$(".box1")[0].remove()

console.log(Developer_Helped)
console.log(Followers)
