// 今日の日付を「YYYY年M月D日」の形式でコンソールに出力する
const today = new Date();

const year  = today.getFullYear();
const month = today.getMonth() + 1; // 月は0始まりのため+1
const date  = today.getDate();

console.log(`${year}年${month}月${date}日`);
