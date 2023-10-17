function reverseWords(string) {
    let returnStr = [];

    string.split(" ").forEach(word => {
        let tempWord = "";
        word.split("").forEach(letter => {
            tempWord = letter + tempWord;
        });
        returnStr.push(tempWord);
    });

    return returnStr.join(" ");
}
