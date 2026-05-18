//change learn web https://developer.mozilla.org/ja/docs/Web/JavaScript/Guide/Introduction
//It is deivided into 3 slevels
//This is introduction

const JSandJava = [
    ["JS", "オブジェクトのデータ型に区別はない", "プロパティとメソッド動的に追加できる", "変数のデータ型は宣言不要"], 
    ["Java", "オブジェクトのデータ型に区別がある", "動的にプロパティやメソッドを追加することができない", "変数のデータ型は宣言必須"]
];
console.table(JSandJava);

//宣言 3種類
//var 再代入再宣言可能　巻き上げのため限りなく先頭に置くとよい
//let ブロックスコープ 再代入可能
//const ブロックスコープ　再代入再宣言不可