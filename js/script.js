const fromText = document.querySelector(".from-text"),
    toText = document.querySelector(".to-text"),
    selectTag = document.querySelectorAll("select"),
    exchangeIcon = document.querySelector(".exchange"),
    translateBtn = document.querySelector("button");
selectTag.forEach((tag) => {
  for (const country_code in countries) {
    let option = `<option value="${country_code}">${countries[country_code]}</option>`;
    tag.insertAdjacentHTML("beforeend", option)
  }
});
exchangeIcon.addEventListener("click",()=>{
  let tempText = fromText.value;
  fromText.value = toText.value;
  toText.value = tempText
})
translateBtn.addEventListener("click",()=>{
  let text = fromText.value,
      translateFrom = selectTag[0].value,
      translateTo = selectTag[1].value;
  let apiUrl = `https://api.mymemory.translated.net/get?q=${text}&langpair=${translateFrom}|${translateTo}`;
  fetch(apiUrl).then(res=>res.json()).then(data=>{
    console.log(data);
    toText.value = data.responseData.translatedText;
  })
})
