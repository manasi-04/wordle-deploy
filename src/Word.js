import wordList from './wordle-bank.txt';

export const defaultWord= [
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', '']
];

export const generateWordSet = async() => {
    let wordSet;
    let todaysWord;
    await fetch(wordList).then(response => response.text())
    .then(result => {
        const arr = result.split("\r\n");
        todaysWord = arr[Math.floor(Math.random() * arr.length)];
        wordSet = new Set(arr);
    });

    return { wordSet, todaysWord };
}
