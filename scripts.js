const createSentence = (word1, word2, word3) =>
  `${word1[1]}. ${word1} ${word2[0]}. ${word2} ${word1}. ${word1[1]} ${word1[1]}${word2[0]}. ${word3}. ${word1[1]}. ${word2.slice(
    0,
    2
  )}. ${word1} ${word1[1]}. ${word2[0]}. ${word2.slice(0, 2)}. ${word1[1]} ${word2.slice(2)} ${word1}. ${word2.slice(0, 2)}. ${word2.slice(
    2
  )} ${word1[1]}. ${word1} ${word1[1]}. ${word1[1]} ${word2[0]}. ${word2.slice(0, 3)}. ${word2[3]}${word1[1]} ${word1} ${word1[1]}. ${word3}. ${
    word1[1]
  }${word1[1]}. ${word1} ${word2[0]}. ${word2} ${word1}. ${word1[1]} ${word1[1]}${word2[0]}. ${word2}. ${word1[1]}. ${word2.slice(
    0,
    2
  )}. ${word1} ${word1[1]}. ${word2[0]}. ${word2.slice(0, 2)}. ${word1[1]} ${word2.slice(2)} ${word1}. ${word2.slice(0, 2)}. `;
const copy = (text) => {
  const tmp = document.createElement('textarea');
  tmp.value = text;
  document.body.appendChild(tmp);
  tmp.select();
  document.execCommand('copy');
  document.body.removeChild(tmp);
};

const inputs = Array.from(document.getElementsByTagName('form')[0].getElementsByTagName('input'));

inputs.forEach((e) =>
  e.addEventListener('keyup', () => {
    const word1 = inputs[0].value === '' || inputs[0].value.length < 2 ? '슈슉' : inputs[0].value;
    const word2 = inputs[1].value === '' || inputs[1].value.length < 4 ? '시발럼아' : inputs[1].value;
    const word3 = inputs[2].value === '' || inputs[2].value.length < 4 ? inputs[1].value : inputs[2].value;
    const result = createSentence(word1, word2, word3);

    document.getElementById('result').textContent = result;
  })
);

document.getElementById('copy').addEventListener('click', () => copy(document.getElementById('result').textContent));
