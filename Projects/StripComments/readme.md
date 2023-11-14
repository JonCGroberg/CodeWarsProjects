# Prompt

Complete the solution so that it strips all text that follows any of a set of comment markers passed in. Any whitespace at the end of the line should also be stripped out.

Example:

Given an input string of:

    `apples, pears # and bananas
    grapes
    bananas !apples`

The output expected would be:

    `apples, pears
    grapes
    bananas`

The code would be called like so:

````javascript
var result = solution("apples, pears # and bananas\ngrapes\nbananas !apples", [
  "#",
  "!",
]);
// result should == "apples, pears\ngrapes\nbananas"```
````

# Submission

````javascript
function solution(input, markers) {
    let lines = input.split("\n");
    let result = [];
    for (let line of lines) {
      const markerIndices = markers.map((char) => line.indexOf(char));
      const firstIndex = markerIndices
        .filter((a) => a >= 0)
        .sort((a) => a > b)[0];
      result.push(
        line
          .slice(0, firstIndex != undefined ? firstIndex : line.length)
          .trimEnd()
      );
    }
    return result.join("\n");
  }```
````
