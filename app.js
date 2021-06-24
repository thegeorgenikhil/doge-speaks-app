var btnTranslate = document.querySelector("#btn-translate")
var inputTxt = document.querySelector("#input-text")
var outputTxt = document.querySelector("#output-area")

btnTranslate.addEventListener("click",btnClickHandler)

serverURL = "https://api.funtranslations.com/translate/doge.json"

function getTranslationURL(text){
    return serverURL + "?text=" + text
}

function errorHandler(error){
    console.log("error occured",error);
    alert("something wrong with server! try again after sometime")
}


function btnClickHandler(){
    var userText = inputTxt.value

    fetch(getTranslationURL(userText))
          .then(response => response.json())
          .then(json => outputTxt.innerText =(json.contents.translated))
          .catch(errorHandler)
}