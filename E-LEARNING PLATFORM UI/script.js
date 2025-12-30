function showPage(pageId) {
  document.querySelectorAll(".page").forEach(page => {
    page.style.display = "none";
  });

  document.getElementById(pageId).style.display = "block";
}

showPage("home");   


function openCourse(title, progress) {
  showPage("coursePage");
  document.getElementById("courseTitle").innerText = title;
  document.getElementById("progressBar").style.width = progress + "%";
}