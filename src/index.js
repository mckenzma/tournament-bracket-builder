// import './styles.css';

// document.getElementById("app").innerHTML = `
// <h1>Hello Vanilla!</h1>
// <div>
//   We use the same configuration as Parcel to bundle this sandbox, you can find more
//   info about Parcel
//   <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
// </div>
// `;

console.clear();

var testCases = [
  {
    case: 'A',
    totalVals: 2,
    totalNulls: 2,
    start: [1, 2, null, null],
    end: [1, null, 2, null]
  },
  {
    start: [1, 2, null, null, null, null, null, null],
    end: [1, null, null, null, 2, null, null, null]
  },
  {
    start: [1, 2, 3, null, null, null, null, null],
    end: [1, null, 2, null, 3, null, null, null]
  },
  {
    start: [1, 2, 3, 4, null, null, null, null],
    end: [1, null, 2, null, 3, null, 4, null]
  },
  {
    start: [1, 2, 3, 4, 5, null, null, null],
    end: [1, 2, 3, null, 4, null, 5, null]
  },
  {
    start: [1, 2, 3, 4, 5, 6, null, null],
    end: [1, 2, 3, null, 4, 5, 6, null]
  },
  {
    start: [
      1,
      2,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null
    ],
    end: [
      1,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      2,
      null,
      null,
      null,
      null,
      null,
      null,
      null
    ]
  },
  {
    start: [
      1,
      2,
      3,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null
    ],
    end: [
      1,
      null,
      null,
      null,
      2,
      null,
      null,
      null,
      3,
      null,
      null,
      null,
      null,
      null,
      null,
      null
    ]
  },
  {
    start: [
      1,
      2,
      3,
      4,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null
    ],
    end: [
      1,
      null,
      null,
      null,
      2,
      null,
      null,
      null,
      3,
      null,
      null,
      null,
      4,
      null,
      null,
      null
    ]
  },
  {
    start: [
      1,
      2,
      3,
      4,
      5,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null
    ],
    end: [
      1,
      null,
      2,
      null,
      3,
      null,
      null,
      null,
      4,
      null,
      null,
      null,
      5,
      null,
      null,
      null
    ]
  },
  {
    start: [
      1,
      2,
      3,
      4,
      5,
      6,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null
    ],
    end: [
      1,
      null,
      2,
      null,
      3,
      null,
      null,
      null,
      4,
      null,
      5,
      null,
      6,
      null,
      null,
      null
    ]
  },
  {
    start: [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null
    ],
    end: [
      1,
      null,
      2,
      null,
      3,
      null,
      4,
      null,
      5,
      null,
      6,
      null,
      7,
      null,
      null,
      null
    ]
  },
  {
    start: [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null
    ],
    end: [
      1,
      null,
      2,
      null,
      3,
      null,
      4,
      null,
      5,
      null,
      6,
      null,
      7,
      null,
      8,
      null
    ]
  },
  {
    start: [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      null,
      null,
      null,
      null,
      null,
      null,
      null
    ],
    end: [1, 2, 3, null, 4, null, 5, null, 6, null, 7, null, 8, null, 9, null]
  },
  {
    start: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, null, null, null, null, null, null],
    end: [1, 2, 3, null, 4, null, 5, null, 6, 7, 8, null, 9, null, 10, null]
  },
  {
    start: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, null, null, null, null, null],
    end: [1, 2, 3, null, 4, 5, 6, null, 6, 7, 8, null, 10, null, 11, null]
  },
  {
    start: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, null, null, null, null],
    end: [1, 2, 3, null, 4, 5, 6, null, 7, 8, 9, null, 10, 11, 12, null]
  },
  {
    start: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, null, null, null],
    end: [1, 2, 3, 4, 5, 6, 7, null, 8, 9, 10, null, 11, 12, 13, null]
  },
  {
    start: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, null, null],
    end: [1, 2, 3, 4, 5, 6, 7, null, 8, 9, 10, 11, 12, 13, 14, null]
  }
];

for (var int = 1; int <= 20; int++) {
  // initialize empty array for testing
  var arr = [];

  // fill empty array for testing
  for (var i = 0; i < int; i++) {
    arr[i] = i + 1;
  }

  var exp = 1;
  while (int > Math.pow(2, exp)) {
    exp++;
  }
  var size = Math.pow(2, exp);

  var finalArr = [];

  finalArr = finalArr.concat(balanceBracket(arr, size));
  // console.log('num: ', int);
  // console.log('initial: ', arr);
  // console.log('final: ', finalArr);
}

function balanceBracket(array, size) {
  var length = array.length;

  let temp = [];

  if (length >= size / 2 && length < size - 1) {
    var indexToSplit = Math.ceil(length / 2);

    var left = array.slice(0, indexToSplit);
    var right = array.slice(indexToSplit, size);

    if (left.length < size / 2) {
      temp = temp.concat(balanceBracket(left, size / 2));
    }
    if (right.length < size / 2) {
      temp = temp.concat(balanceBracket(right, size / 2));
    }
  } else if (length < size) {
    let nullArr = [];
    for (var i = 0; i < size - length; i++) {
      nullArr[i] = null;
    }

    temp = temp.concat(array);
    temp = temp.concat(nullArr);
  } else {
    temp = temp.concat(array);
  }

  return temp;
}

// console.log('/////////////////////////');
// console.log('-------------------------');
// console.log('/////////////////////////');

// console.log('testing arrays');
var sizes = [2, 4, 8, 16];

// for (var i = 0; i < sizes.length; i++) {
//   let size = sizes[i];
//   // console.log(size);

//   if (size === 2) {
//     console.log('# fights = ', size - 1);
//   } else {
//     console.log('# fights = ', size);

//     let array = [];
//     for (var index = 0; index < size; index++) {
//       array[index] = index + 1;
//     }
//     console.log(array);

//     // var left = array.slice(0, size / 2);
//     // var right = array.slice(size / 2, size);
//     // console.log('left: ', left);
//     // console.log('right: ', right);

//     // for (var j = 0; j < size - 2; j++) {
//     //   console.log(j + 1);

//     // }
//     let arr = [];
//     buildBracketArray(array, arr);
//     console.log(arr);

//     buildBracket(arr);
//   }
// }

function buildBracketArray(array, arr) {
  // let arr = [];

  var left = array.slice(0, array.length / 2);
  arr.push(left);
  var right = array.slice(array.length / 2, array.length);
  if (right.length >= 4) {
    buildBracketArray(right, arr);
  } else {
    arr.push(right);
  }

  return arr;
}

let nodes = [];
let rels = [];

function makeNode(value) {
  var obj = {};

  obj.id = value;
  obj.label = `Fight ${value}`;

  return obj;
}

function makeRel(start, end, type) {
  var obj = {};

  obj.from = start;
  obj.to = end;
  obj.label = type;

  return obj;
}

function buildBracket(arr) {
  for (var i = 0; i < arr.length - 1; i++) {
    let length = arr[i].length;
    
    if (length > 2) {
      for (var j = 0; j < arr[i + 1].length; j++) {
        nodes.push(makeNode(arr[i][2 * j]));
        nodes.push(makeNode(arr[i][2 * j + 1]));
        
        // console.log('Create WINNER_ADVANCES_TO');
        // console.log(arr[i][2 * j], '-->', arr[i + 1][j]);
        // console.log(arr[i][2 * j + 1], '-->', arr[i + 1][j]);
        rels.push(makeRel(arr[i][2 * j], arr[i + 1][j], 'WINNER_ADVANCES_TO'));
        rels.push(makeRel(arr[i][2 * j + 1], arr[i + 1][j], 'WINNER_ADVANCES_TO'));
      }
    } else {
      nodes.push(makeNode(arr[i][0]));
      nodes.push(makeNode(arr[i][1]));
      nodes.push(makeNode(arr[i + 1][0]));
      nodes.push(makeNode(arr[i + 1][1]));

      // console.log('Create LOSER_ADVANCES_TO');
      // console.log(arr[i][0], '-->', arr[i + 1][0]);
      // console.log(arr[i][1], '-->', arr[i + 1][0]);
      rels.push(makeRel(arr[i][0], arr[i + 1][0], 'LOSER_ADVANCES_TO'));
      rels.push(makeRel(arr[i][1], arr[i + 1][0], 'LOSER_ADVANCES_TO'));
      // console.log('Create WINNER_ADVANCES_TO');
      // console.log(arr[i][0], '-->', arr[i + 1][1]);
      // console.log(arr[i][1], '-->', arr[i + 1][1]);
      rels.push(makeRel(arr[i][0], arr[i + 1][1], 'WINNER_ADVANCES_TO'));
      rels.push(makeRel(arr[i][1], arr[i + 1][1], 'WINNER_ADVANCES_TO'));
    }
  }
}

// UNWIND [
//   {start: 1, end: 5, relType: 'WINNER_ADVANCES_TO'},
//   {start: 2, end: 5, relType: 'WINNER_ADVANCES_TO'},
//   {start: 3, end: 6, relType: 'WINNER_ADVANCES_TO'},
//   {start: 4, end: 6, relType: 'WINNER_ADVANCES_TO'},
//   {start: 5, end: 7, relType: 'LOSER_ADVANCES_TO'},
//   {start: 6, end: 7, relType: 'LOSER_ADVANCES_TO'},
//   {start: 5, end: 8, relType: 'WINNER_ADVANCES_TO'},
//   {start: 6, end: 8, relType: 'WINNER_ADVANCES_TO'}  
// ] as relPair
// MATCH (start:Fight {id: relPair.start})
// MATCH (end:Fight {id: relPair.end})
// CALL apoc.merge.relationship(start, relPair.relType, {}, {}, end, {})
// YIELD rel
// WITH start, end, rel
// RETURN start, end, rel

size = 16;

if (size === 2) {
  console.log('# fights = ', size - 1);
} else {
  console.log('# fights = ', size);

  let array = [];
  for (var index = 0; index < size; index++) {
    array[index] = index + 1;
  }
  // console.log(array);

  // var left = array.slice(0, size / 2);
  // var right = array.slice(size / 2, size);
  // console.log('left: ', left);
  // console.log('right: ', right);

  // for (var j = 0; j < size - 2; j++) {
  //   console.log(j + 1);

  // }
  let arr = [];
  buildBracketArray(array, arr);
  console.log(arr);

  buildBracket(arr);
}



// var nodes_2 = new vis.DataSet([
//   { id: 1, label: "Node 1" },
//   { id: 2, label: "Node 2" },
//   { id: 3, label: "Node 3" },
//   { id: 4, label: "Node 4" },
//   { id: 5, label: "Node 5" },
// ]);

// // create an array with edges
// var edges = new vis.DataSet([
//   // { from: 1, to: 3, label: 'test' },
//   // { from: 1, to: 2 },
//   // { from: 2, to: 4 },
//   // { from: 2, to: 5 },
//   // { from: 3, to: 3 },
// ]);

// create a network
var container = document.getElementById("bracket");
var data = {
  // nodes: nodes_2,
  nodes: new vis.DataSet(nodes),
  edges: new vis.DataSet(rels),
};
var options = {};
var network = new vis.Network(container, data, options);