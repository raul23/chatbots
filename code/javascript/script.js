// Collapsible
var coll = document.getElementsByClassName("collapsible");

for (let i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function () {
        this.classList.toggle("active");

        var content = this.nextElementSibling;

        if (content.style.maxHeight) {
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
        }

    });
}

function getTime() {
    let today = new Date();
    hours = today.getHours();
    minutes = today.getMinutes();

    if (hours < 10) {
        hours = "0" + hours;
    }

    if (minutes < 10) {
        minutes = "0" + minutes;
    }

    let time = hours + ":" + minutes;
    return time;
}

// Gets the first message
function firstBotMessage() {
    let firstMessage = "How's it going?"
    document.getElementById("botStarterMessage").innerHTML = '<p class="botText"><span>' + firstMessage + '</span></p>';

    let time = getTime();

    $("#chat-timestamp").append(time);
    document.getElementById("userInput").scrollIntoView(false);
}

firstBotMessage();

// Retrieves the response
function getHardResponse(userText) {
    let botResponse = getBotResponse(userText);
    //let botResponse = "I love you too!";
    //let botResponse = "I hate you though!";
    let botHtml = '<p class="botText"><span>' + botResponse + '</span></p>';
    $("#chatbox").append(botHtml);

    document.getElementById("chat-bar-bottom").scrollIntoView(true);
}

function getHardResponse2(userText) {
    //let botResponse = getBotResponse(userText);
    let botResponse = "I love you too!";
    let botHtml = '<p class="botText"><span>' + botResponse + '</span></p>';
    $("#chatbox").append(botHtml);

    document.getElementById("chat-bar-bottom").scrollIntoView(true);
}

//Gets the text text from the input box and processes it
function getResponse() {
    let userText = $("#textInput").val();

    if (userText == "") {
        userText = "I love Code Palace!";
    }

    let userHtml = '<p class="userText"><span>' + userText + '</span></p>';

    $("#textInput").val("");
    $("#chatbox").append(userHtml);
    document.getElementById("chat-bar-bottom").scrollIntoView(true);

    setTimeout(() => {
        getHardResponse(userText);
    }, 1000)

}

// Handles sending text via button clicks
function buttonSendText(sampleText) {
    let userHtml = '<p class="userText"><span>' + sampleText + '</span></p>';

    $("#textInput").val("");
    $("#chatbox").append(userHtml);
    document.getElementById("chat-bar-bottom").scrollIntoView(true);

    //Uncomment this if you want the bot to respond to this buttonSendText event
    setTimeout(() => {
        getHardResponse2(sampleText);
    }, 1000)
}

function sendButton() {
    getResponse();
}

function heartButton() {
    buttonSendText("Heart clicked!")
}

// Press enter to send a message
$("#textInput").keypress(function (e) {
    if (e.which == 13) {
        getResponse();
    }
});

function getBotResponse(input) {
  input = cleanInput(input);
  //console.log(input);
  if (input == "hello" || input == "hi") {
    return hello(input);
  } else if (input == "goodbye" || input == "bye") {
    return goodbye(input);
  } else if (input.startsWith("time ")) {
    return getTimeFromCity(input);
  } else {
    return evalExpr(input);
  }
}

function cleanInput(input) {
  return input.toLowerCase().replace("?", "");
}

function hello(input) {
  let answers;
  let today = new Date();
  hours = today.getHours();
  if (hours < 12) {
    answer = "Good morning!";
  } else if (12 < hours < 18) {
    answer = "Good afternoon!";
  } else {
    answer = "Good evening!"
  }
  //let answers = ["Hello there!", "Hi!"];
  //return answers[getRandomInt(0, answers.length)];
  return answer;
}

function goodbye(input) {
  let answers = ["Talk to you later!", "Have a nice day!", "Bye!", 
                   "See you later!", "Nice talking to you!"];
  let answerIdx = getRandomInt(0, answers.length);
  console.log(answerIdx);
  return answers[answerIdx];
}

function evalExpr(input) {
  let eval;
  try {
    eval = math.evaluate(input);
  }
  catch(err) {
    return "Try asking something else!";
  }
  return eval;
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
}

function getTimeFromCity(input) {
  let arg = input.split(" ").slice(1).join(" ");
  let timeZone, city;
  switch (arg) {
    case "h":
    case "hk":
    case "hkg":
    case "hong":
    case "hong kong":
      city = "Hong Kong";
      timeZone = "Asia/Hong_Kong";
      break;
    case "j":
    case "jhb":
    case "joburg":
    case "johannes":
    case "johannesburg":
      city = "Johannesburg";
      timeZone = "Africa/Johannesburg";
      break;
    case "l":
    case "ldn":
    case "lon":
    case "london":
      city = "London";
      timeZone = "Europe/London";
      break;
    case "m":
    case "mad":
    case "madrid":
      city = "Madrid";
      timeZone = "Europe/Madrid";
      break;
    case "t":
    case "to":
    case "tor":
    case "toronto":
      city = "Toronto";
      timeZone = "America/Toronto";
      break;
    case "n":
    case "ny":
    case "new york":
      city = "New York";
      timeZone = "America/New_York";
      break;
    default:
      return "Wrong city!"
  }
  let cityTime = new Date().toLocaleTimeString("en-US", 
                                               {timeZone:timeZone,
                                                timestyle:"full",
                                                hourCycle:"h24"})
  return cityTime + " @ " + city;
}
