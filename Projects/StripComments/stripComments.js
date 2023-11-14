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
  }