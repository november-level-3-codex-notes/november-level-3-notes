"use strict";

import prompt from "prompt-sync";
import chalk from "chalk";

const input = prompt();
let score = 0;

const testData = [
  { question: "What is 5 + 5? ", answer: "10" },
  { question: "What is 5 * 5? ", answer: "25" },
  { question: "What is 5 / 5? ", answer: "1" },
  { question: "What is 5 - 5? ", answer: "0" },
  { question: "What is 5 - 4? ", answer: "1" },
];

export function startQuiz() {
  for (let d of testData) {
    const userAnswer = input(d.question);
    if (userAnswer === d.answer) {
      score++;
    }
  }
  const testScore = ((score / testData.length) * 100).toFixed(2);
  const testResult = colorCodeTestScore(testScore);
  return testResult;
}

function colorCodeTestScore(testScore) {
  if (testScore < 50) {
    return chalk.red(testScore) + "%";
  }
  return chalk.green(testScore) + "%";
}
