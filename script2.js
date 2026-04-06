function showResult() {
  const f = document.getElementById("quizForm");
  const rBox = document.getElementById("result");
  const fData = new FormData(f);
  const s = {
    pink: 0,
    red: 0,
    green: 0,
    blue: 0,
    purple: 0
  };
  for (const [key,value] of fData.entries()) 
    {
    s[value]++;
  }
  const total= Object.values(s).reduce((a,b) => a+b, 0);
  if (total<7) 
    {
    rBox.textContent = "Please answer all questions first.";
    return;}
  const mScore=Math.max(...Object.values(s));
  const w=Object.keys(s).filter(colour =>s[colour]=== mScore);
  const descr= {
    pink: "Pink\n\nYou are emotionally mature and seek connection with others.",
    red: "Red\n\nYou are strong and goal driven. You need to use your skills in a right way.",
    green: "Green\n\nYou are calm and mature. You value stability and safety.",
    blue: "Blue\n\nYou are thoughtful and logical. You value structure, knowledge, and planning.",
    purple: "Purple\n\nYou are creative and deep. You value identity, and seek being truly understood."
  };
  if(w.length=== 1){
    rBox.textContent= descr[w[0]];
  } else 
    {
    const nam = {
      pink: "Pink",
      red: "Red",
      green: "Green",
      blue: "Blue",
      purple: "Purple"
    };
    rBox.textContent= "You are a mix of: "+ w.map(c => nam[c]).join(" + ")+ "\n\nYou are a rare mix";
  }
}
function resetQuiz() {
  document.getElementById("result").textContent ='Choose one answer for each question and click "See My Result."';
}