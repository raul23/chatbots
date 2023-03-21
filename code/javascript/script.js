//----------------------------------------------------------------------
// gReflections, a translation table used to convert things you say
//    into things the computer says back, e.g. "I am" --> "you are"
//----------------------------------------------------------------------
const gReflections = {
  "am"   : "are",
  "was"  : "were",
  "i"    : "you",
  "i'd"  : "you would",
  "i've"  : "you have",
  "i'll"  : "you will",
  "my"  : "your",
  "are"  : "am",
  "you've": "I have",
  "you'll": "I will",
  "your"  : "my",
  "yours"  : "mine",
  "you"  : "me",
  "me"  : "you"
}

//----------------------------------------------------------------------
// gPats, the main response table.  Each element of the list is a
//  two-element list; the first is a regexp, and the second is a
//  list of possible responses, with group-macros labelled as
//  %1, %2, etc.  
//----------------------------------------------------------------------
const gPats = [
  [/I need (.*)/,
  [ "Why do you need %1?",
    "Would it really help you to get %1?",
    "Are you sure you need %1?"]],
  
  [/Why don\'?t you ([^\?]*)\??/,
  [ "Do you really think I don't %1?",
    "Perhaps eventually I will %1.",
    "Do you really want me to %1?"]],
  
  [/Why can\'?t I ([^\?]*)\??/,
  [ "Do you think you should be able to %1?",
    "If you could %1, what would you do?",
    "I don't know -- why can't you %1?",
    "Have you really tried?"]],
  
  [/I can\'?t (.*)/,
  [  "How do you know you can't %1?",
    "Perhaps you could %1 if you tried.",
    "What would it take for you to %1?"]],
  
  [/I am (.*)/,
  [  "Did you come to me because you are %1?",
    "How long have you been %1?",
    "How do you feel about being %1?"]],
  
  [/I\'?m (.*)/,
  [  "How does being %1 make you feel?",
    "Do you enjoy being %1?",
    "Why do you tell me you're %1?",
    "Why do you think you're %1?"]],
  
  [/Are you ([^\?]*)\??/,
  [  "Why does it matter whether I am %1?",
    "Would you prefer it if I were not %1?",
    "Perhaps you believe I am %1.",
    "I may be %1 -- what do you think?"]],
  
  [/What (.*)/,
  [  "Why do you ask?",
    "How would an answer to that help you?",
    "What do you think?"]],
  
  [/How (.*)/,
  [  "How do you suppose?",
    "Perhaps you can answer your own question.",
    "What is it you're really asking?"]],
  
  [/Because (.*)/,
  [  "Is that the real reason?",
    "What other reasons come to mind?",
    "Does that reason apply to anything else?",
    "If %1, what else must be true?"]],
  
  [/(.*) sorry (.*)/,
  [  "There are many times when no apology is needed.",
    "What feelings do you have when you apologize?"]],
  
  [/Hello(.*)/,
  [  "Hello... I'm glad you could drop by today.",
    "Hi there... how are you today?",
    "Hello, how are you feeling today?"]],
  
  [/I think (.*)/,
  [  "Do you doubt %1?",
    "Do you really think so?",
    "But you're not sure %1?"]],
  
  [/(.*) friend (.*)/,
  [  "Tell me more about your friends.",
    "When you think of a friend, what comes to mind?",
    "Why don't you tell me about a childhood friend?"]],
  
  [/Yes/,
  [  "You seem quite sure.",
    "OK, but can you elaborate a bit?"]],
  
  [/(.*) computer(.*)/,
  [  "Are you really talking about me?",
    "Does it seem strange to talk to a computer?",
    "How do computers make you feel?",
    "Do you feel threatened by computers?"]],
  
  [/Is it (.*)/,
  [  "Do you think it is %1?",
    "Perhaps it's %1 -- what do you think?",
    "If it were %1, what would you do?",
    "It could well be that %1."]],
  
  [/It is (.*)/,
  [  "You seem very certain.",
    "If I told you that it probably isn't %1, what would you feel?"]],
  
  [/r'Can you ([^\?]*)\??/,
  [  "What makes you think I can't %1?",
    "If I could %1, then what?",
    "Why do you ask if I can %1?"]],
  
  [/Can I ([^\?]*)\??/,
  [  "Perhaps you don't want to %1.",
    "Do you want to be able to %1?",
    "If you could %1, would you?"]],
  
  [/You are (.*)/,
  [  "Why do you think I am %1?",
    "Does it please you to think that I'm %1?",
    "Perhaps you would like me to be %1.",
    "Perhaps you're really talking about yourself?"]],
  
  [/You\'?re (.*)/,
  [  "Why do you say I am %1?",
    "Why do you think I am %1?",
    "Are we talking about you, or me?"]],
  
  [/I don\'?t (.*)/,
  [  "Don't you really %1?",
    "Why don't you %1?",
    "Do you want to %1?"]],
  
  [/I feel (.*)/,
  [  "Good, tell me more about these feelings.",
    "Do you often feel %1?",
    "When do you usually feel %1?",
    "When you feel %1, what do you do?"]],
  
  [/I have (.*)/,
  [  "Why do you tell me that you've %1?",
    "Have you really %1?",
    "Now that you have %1, what will you do next?"]],
  
  [/I would (.*)/,
  [  "Could you explain why you would %1?",
    "Why would you %1?",
    "Who else knows that you would %1?"]],
  
  [/Is there (.*)/,
  [  "Do you think there is %1?",
    "It's likely that there is %1.",
    "Would you like there to be %1?"]],
  
  [/My (.*)/,
  [  "I see, your %1.",
    "Why do you say that your %1?",
    "When your %1, how do you feel?"]],
  
  [/You (.*)/,
  [  "We should be discussing you, not me.",
    "Why do you say that about me?",
    "Why do you care whether I %1?"]],
    
  [/Why (.*)/,
  [  "Why don't you tell me the reason why %1?",
    "Why do you think %1?" ]],
    
  [/I want (.*)/,
  [  "What would it mean to you if you got %1?",
    "Why do you want %1?",
    "What would you do if you got %1?",
    "If you got %1, then what would you do?"]],
  
  [/(.*) mother(.*)/,
  [  "Tell me more about your mother.",
    "What was your relationship with your mother like?",
    "How do you feel about your mother?",
    "How does this relate to your feelings today?",
    "Good family relations are important."]],
  
  [/(.*) father(.*)/,
  [  "Tell me more about your father.",
    "How did your father make you feel?",
    "How do you feel about your father?",
    "Does your relationship with your father relate to your feelings today?",
    "Do you have trouble showing affection with your family?"]],

  [/(.*) child(.*)/,
  [  "Did you have close friends as a child?",
    "What is your favorite childhood memory?",
    "Do you remember any dreams or nightmares from childhood?",
    "Did the other children sometimes tease you?",
    "How do you think your childhood experiences relate to your feelings today?"]],
    
  [/(.*)\?/,
  [  "Why do you ask that?",
    "Please consider whether you can answer your own question.",
    "Perhaps the answer lies within yourself?",
    "Why don't you tell me?"]],
  
  [/quit/,
  [  "Thank you for talking with me.",
    "Good-bye.",
    "Thank you, that will be $150.  Have a good day!"]],
  
  [/(.*)/,
  [  "Please tell me more.",
    "Let's change focus a bit... Tell me about your family.",
    "Can you elaborate on that?",
    "Why do you say that %1?",
    "I see.",
    "Very interesting.",
    "%1.",
    "I see.  And what does that tell you?",
    "How does that make you feel?",
    "How do you feel when you say that?"]]
  ]

class Eliza {
  
  constructor() {
    this.keys = gPats.map(x => x[0]);
    this.values = gPats.map(x => x[1]);
  }
  
  //----------------------------------------------------------------------
  // translate: take a string, replace any words found in dict.keys()
  //  with the corresponding dict.values()
  //----------------------------------------------------------------------
  translate(str, dict) {
    let words = str.toLowerCase().split(" ");
    let keys = Object.keys(dict);
    for (let i = 0; i < words.length; i++) {
      if (keys.indexOf(words[i]) > -1) {
        words[i] = dict[words[i]];
      }
    }
    return words.join(" ");
  }
  
  //----------------------------------------------------------------------
  //  respond: take a string, a set of regexps, and a corresponding
  //    set of response lists; find a match, and return a randomly
  //    chosen response from the corresponding list.
  //----------------------------------------------------------------------
  respond(str) {
    for (let i = 0; i < this.keys.length; i++) {
      let regex = this.keys[i];
      let match = regex.exec(str);
      if (match !== null) {
        // found a match ... stuff with corresponding value
        // chosen randomly from among the available options
        let resp = getRandomItem(this.values[i]);
        // we've got a response... stuff in reflected text where indicated
        let pos = resp.indexOf('%');
        while (pos > -1) {
          let num = parseInt(resp.slice(pos+1,pos+2));
          resp = resp.slice(0, pos) + this.translate(match[num], gReflections) + resp.slice(pos+2);
          pos = resp.indexOf('%');
        }
        // fix munged punctuation at the end
        if (JSON.stringify(resp.slice(-2)) == '?.') { 
          resp = resp.slice(0, -2) + '.';
        }
        if (JSON.stringify(resp.slice(-2)) == '??') {
          resp = resp.slice(0, -2) + '?';
        }
        return resp;
      }
    }
    return "Try something else!"
  }
}

var therapist = new Eliza();

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
  let inputOrig = `${input}`;
  input = cleanInput(input);
  console.log(input);
  console.log(inputOrig);
  if (input == "hello" || input == "hi") {
    return hello(input);
  } else if (input == "goodbye" || input == "bye") {
    return goodbye(input);
  } else if (input == "date" || input.startsWith("what date") ||
             input.startsWith("what is the date") || input.startsWith("what's the date")) {
    return new Date().toDateString();
  } else if (input.startsWith("time") || input.startsWith("what time") || 
             input.startsWith("what is the time") || input.startsWith("what's the time")) {
    return getTimeFromCity(input);
  } else {
    let eval = evalExpr(input);
    if (eval === null) {
      return therapist.respond(inputOrig);
    } else {
      return eval;
    }
  }
}

function cleanInput(input) {
  // - Change all characters in lowercase
  // - Remove '?'
  // - Replace multiple spaces with one space
  // - Remove trailing space
  return input.toLowerCase().replace("?", "").replace(/  +/g, ' ').trim();
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
    //return "Try asking something else!";
    return null;
  }
  return eval;
}

// From mozilla MDN
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
}

// https://www.programiz.com/javascript/examples/get-random-item
function getRandomItem(arr) {
    // get random index value
    const randomIndex = Math.floor(Math.random() * arr.length);
    // get random item
    const item = arr[randomIndex];
    return item;
}

function getTimeFromCity(input) {
  let arg;
  if (input.startsWith("what time") || input.startsWith("what is the time") ||
      input.startsWith("what's the time")) {
    arg = ""
  } else {
    arg = input.split(" ").slice(1).join(" ");
  }
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
    case "": // no argument, juste `time`
    case "now":
      return getTime();
    default:
      return "Wrong city!"
  }
  let cityTime = new Date().toLocaleTimeString("en-US", 
                                               {timeZone:timeZone,
                                                timestyle:"full",
                                                hourCycle:"h24"})
  return cityTime + " @ " + city;
}
