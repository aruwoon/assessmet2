function diagnose() {
  const name = document.getElementById("nameInput").value.trim();
  const resultBox = document.getElementById("result");

  if (name === "") {
    resultBox.textContent = "名前を入力してください！";
    return;
  }

  const pastLives = [
    "戦国時代の武将",
    "江戸時代の商人",
    "平安時代の貴族",
    "伝説の魔法使い",
    "王国を守る騎士",
    "神秘的な占い師",
    "海を渡る冒険者",
    "森に住む精霊"
  ];

  // 名前から数値を生成（毎回同じ結果になる）
  let sum = 0;
  for (let i = 0; i < name.length; i++) {
    sum += name.charCodeAt(i);
  }

  const index = sum % pastLives.length;
  const result = `${name}の前世は「${pastLives[index]}」です！`;

  resultBox.textContent = result;
}

