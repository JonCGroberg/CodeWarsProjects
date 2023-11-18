# Submission

    '''
    const alphabet = [
      "a",
      "b",
      "c",
      "d",
      "e",
      "f",
      "g",
      "h",
      "i",
      "j",
      "k",
      "l",
      "m",
      "n",
      "o",
      "p",
      "q",
      "r",
      "s",
      "t",
      "u",
      "v",
      "w",
      "x",
      "y",
      "z",
    ];
    
    function rot13(message) {
      var encodedMessage = message.split("");
    
      for (var i = 0; i < message.length; i++) {
        for (var j = 0; j < alphabet.length; j++) {
          if (message[i].toLowerCase() == alphabet[j]) {
            let isUppercase = message[i] == message[i].toUpperCase();
            let roll = 13 - (alphabet.length - j);
            if (roll > 0) {
              encodedMessage[i] = alphabet[roll];
              if (isUppercase) encodedMessage[i] = encodedMessage[i].toUpperCase();
            } else {
              encodedMessage[i] = alphabet[j + 13];
              if (isUppercase) encodedMessage[i] = encodedMessage[i].toUpperCase();
            }
          }
        }
      }
    
      return encodedMessage.join("");
    }
    '''