// Adds a "Copy" button to every code block.
document.querySelectorAll("pre").forEach(function (pre) {
  var btn = document.createElement("button");
  btn.className = "copy";
  btn.type = "button";
  btn.textContent = "Copy";
  btn.addEventListener("click", function () {
    var code = pre.querySelector("code") || pre;
    navigator.clipboard.writeText(code.innerText.trim()).then(function () {
      btn.textContent = "Copied";
      setTimeout(function () { btn.textContent = "Copy"; }, 1500);
    });
  });
  pre.appendChild(btn);
});
