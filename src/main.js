function medianScore(students) {
  const sortList = students.sort((a, b) => a.score - b.score);
  const midpoint = Math.floor(sortList.length / 2);

  return sortList[midpoint].score;
}

function topScoringStudent(students) {
  const sortList = students.sort((a, b) => b.score - a.score);
  return sortList[0];
}

module.exports = { medianScore, topScoringStudent };
