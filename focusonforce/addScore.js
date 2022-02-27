function createScoreFunction() { 
    scores = [];
    return function(score) {
      scores.push(score);   
      console.log(`Total scores: ${scores.length}`); }};// The function returned to 'addScore' still has access to 'scores' through closure.const 
  addScore = createScoreFunction();
  addScore(70);
  addScore(90);
  addScore(100);
  
  