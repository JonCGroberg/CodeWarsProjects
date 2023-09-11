# Prompt
Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.
Examples

"This is an example!" ==> "sihT si na !elpmaxe"
"double  spaces"      ==> "elbuod  secaps"




## Code
```javscript
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
```
