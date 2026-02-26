/* dx-scoring.js — Quiz and assessment scoring (stub)
   Calculates scores, provides feedback, and reports to progress tracker. */
window.DxScoring = {
  scoreQuiz(answers, key) {
    let correct = 0;
    answers.forEach((a, i) => { if (a === key[i]) correct++; });
    const pct = Math.round((correct / key.length) * 100);
    return { correct, total: key.length, percentage: pct, passed: pct >= 70 };
  },
  reportScore(quizId, result) {
    window.DxProgress?.saveScore(quizId, result.percentage);
    if (result.passed) window.DxProgress?.addXP(10);
  }
};
