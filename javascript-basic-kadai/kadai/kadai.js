// 要素を取得
const text = document.getElementById('text');
const btn  = document.getElementById('btn');

// ボタンクリックで2秒後にテキストを書き換え
btn.addEventListener('click', () => {
  // 2000ミリ秒 = 2秒
  setTimeout(() => {
    text.textContent = '2秒経ったので書き換えました！';
  }, 2000);
});
