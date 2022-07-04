(function() {
  var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

  for (let el of names) {
    let firstLetter = el.toLowerCase().charAt();

    if (firstLetter == 'j') {
      byeSpeaker.speak(el);
    } else {
      helloSpeaker.speak(el);
    }
  }
})()