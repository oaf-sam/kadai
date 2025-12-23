// id="text" の要素と id="btn" の要素を取得して定数に代入
const text = document.getElementById('text');
const btn  = document.getElementById('btn');

// ボタンがクリックされたときに文字を変更
btn.addEventListener('click', () => {
  text.textContent = 'ボタンをクリックしました！';
});
