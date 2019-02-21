data = [11,4,41,50,7,19,8,18,2,6,43,6,20,43,2,23,12,24,31,29];

// do mean
adder=0;
data.forEach(function(ele,i)
{
adder+=ele;

});
document.write("<p>Mean is : "+adder/data.length+"</p>");
medianData = data.slice();
medianData.sort((a,b) => a-b);
console.log(medianData);
while (medianData.length>2)
{
  medianData.pop();
  medianData.shift()
}
median=0;
if (medianData.length==1)
{
median = medianData[0];
}
else {
  median = (medianData[0]+medianData[1])/2;
}
document.write("<p>The Median is "+median+"</p>");
var numberFreq = {};
data.forEach(function(num,index){
  if (numberFreq[num]==undefined)
  {
    numberFreq[num]=1;
  }
  else {
    numberFreq[num] = numberFreq[num]+1;
  }
});
mostVal=0;
mode=[];
for (var key in numberFreq)
{
  var val = numberFreq[key];
  console.log(key);
  if (val>mostVal)
  {
    mostVal=val;
    mode =[];
    mode[0] = key;
  }
  if (val==mostVal && mode.indexOf(key)==-1)
  {
    mode[mode.length] = key;
  }

}
document.write("<p>Mode is "+mode+"</p>");

aTotal = data.reduce(function(total,num)
{
    return total+num;
});
aAvgTot = aTotal/data.length;
document.write("<p>Mean with reduce is "+aAvgTot+"</p>");
document.write("<p>The reduce function takes an array and iterates through the array adding the current element to the running total."
+"After the element is added in the reduce it moves to the next number to the right. While there is a number to the right it continues  "
+"If you look at only the numbers to the right of what you've added [10,20,30] becomes total=10 with [20,30] "
+" then total=10+20 and [30] then finally total=10+20+30 and [], so it returns 60. To get the mean you divide by the number of elements.</p>")
