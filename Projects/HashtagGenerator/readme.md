# Prompt
The marketing team is spending way too much time typing in hashtags. Let's help them with our own Hashtag Generator!

Here's the deal:

It must start with a hashtag (#).
All words must have their first letter capitalized.
If the final result is longer than 140 chars it must return false.
If the input or the result is an empty string it must return false.

## Examples
- ``` "H'ello there thanks for trying my Kata" => #HelloThereThanksForTryingMyKata" ```
- ``` "    Hello     World   "  =>  "#HelloWorld" ```
- ``` ""  =>  false ```


# Submission

``` javascript
function generateHashtag(input) {
  let finalResult = "#";
  if (input === "") return false;

  finalResult = input
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join("");

  if (finalResult.length >= 140) return false;
  if (finalResult === "") return false;
  else return '#'+finalResult;
}
```
