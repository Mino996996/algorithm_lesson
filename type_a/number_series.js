/* 重複しない数字配列をつくる */
var digit = 9;
var originalNumber = function () {
    var numberList = [];
    var num = 1;
    // 目的桁数までの数字を総ざらいで出す
    //（ただし今回は1～9まで）
    var allNumber = 987654321;
    // 0を持たず、重複ない数字配列をつくってリストに格納
    // while文で1からぶん回す
    console.log(allNumber);
    while (num < allNumber) {
        var numString = String(num);
        // 重複含めて目的桁数まで進める
        if (numString.length == digit) {
            // 該当した数字を配列にする
            var setList = new Set();
            for (var i = 0; i < digit; i++) {
                if (numString[i] !== '0') {
                    setList.add(Number(numString[i]));
                }
            }
            if (setList.size === digit) {
                console.log(setList);
            }
        }
        num += 1;
    }
    // 該当した配列のみ出力
    // console.log(numberList);
};
originalNumber();
