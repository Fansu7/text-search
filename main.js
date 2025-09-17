const input = document.querySelector(".search-input");
const text = document.querySelector(".text-content");

input.addEventListener("input", () => {
  let search = input.value;

  if (search.trim() != "") {
    let regExp = new RegExp(search, "gi");

    text.innerHTML = text.textContent.replace(regExp, '<span class="text-search">$&</span>');
  } else {
    text.innerHTML = text.textContent;
  }
});