function highestRank(arr){
  let numCount = {}
  for (const num of arr){
    if (numCount[num]) numCount[num]++;
    else numCount[num] = 1;
  }

  let high= [0,0]; // key , num
  for (const key in numCount){
    if (Number(numCount[key]) >= high[1]) high =[Number(key),Number(numCount[key])];
  }

  return high[0]
}