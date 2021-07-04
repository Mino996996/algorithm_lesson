/* 重複しない数字配列をつくる */
const digitNum = 2;
const list = [];

const numberLine = () => {
  let num = new Set<number>();
  const allNumber = 9 * 8 * 7 * 6 * 5 * 4 * 3 * 2 * 1;
  console.log(allNumber);
  // i桁目に1~9を入れていく　
  for (let i = 1; i < 10; i++) {
    num.add(i);
    if (num.size === digitNum) {
      list.push(addNumber(num));
    } else {
      addNumber(num);
    }
  }
  console.log(num);
  // 条件に合った配列の個数を表示する
  console.log(list.length);
}

// 順番に0～9まで重複を避けながら配列を作る
// 目的の桁数に到達したら値を返す。
const addNumber = (num: Set<number>) => {
  for (let i = 1; i < 9; i++) {
    return num.add(i);
  }
}

numberLine();