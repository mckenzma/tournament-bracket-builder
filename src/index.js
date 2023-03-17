// import './styles.css';

// document.getElementById("app").innerHTML = `
// <h1>Hello Vanilla!</h1>
// <div>
//   We use the same configuration as Parcel to bundle this sandbox, you can find more
//   info about Parcel
//   <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
// </div>
// `;

let arraySize = 14;

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

for (var int = 1; int <= arraySize; int++) {
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
}

// console.log(finalArr);

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
// var sizes = [2, 4, 8, 16];
// size = 32;
size = finalArr.length;

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

function makeNode(value, x, y) {
  var obj = {};
  let label = ''
  // console.log(value);
  obj.id = value;
  // obj.label = `Fight ${value}\nPerson 1: #\nPerson 2: #`;
  label = label + `Fight ${value}`;
  label = label + '\n' + (value === size ? 'Final' : (value === size - 1 ? '3rd Place' : (value >= size-3 ? 'Semi-Finals' : '')))
  //obj.label = (value === size ? 'Final\n' : (value === size - 1 ? '3rd Place\n' : (value >= size-3 ? 'Semi-Finals\n' : ''))) 
  //           + 'Person 1: #\nPerson 2: #';
  if (value <= size / 2) {
    let first = finalArr[2*(value-1)];
    let second = finalArr[2*(value-1)+1];

    // console.log(value, first, second);
    if (first !== null) {
      label = label + `\nPerson ${first}`;
    } else {
      // nothing
      label = label + `N/A`;
    }

    if (second !== null) {
      label = label + '\n' + `Person ${second}`;
    } else {
      label = label + '\n' + ' ';
      obj.color = '#C0C0C0';
    }
    // label = label + `Person ${finalArr[2*(value-1)]}` + '\n' + `Person ${finalArr[2*(value-1)+1]}`
  // } else {
  //   // console.log('set winner of')
  //   if (value <= size - 2) {
  //     // console.log (size, value / 2)
  //     // winner advances
  //     label = label + `Winner of ${null}`;
  //     label = label + `\nWinner of ${null}`;
  //   } else if (value === size - 1 ) {
  //     // loser advances
  //     label = label + `Loser of ${value - 2}`;
  //     label = label + `\nLoser of ${value - 1}`;
  //   } else {
  //     // final
  //     // winner advances
  //     label = label + `Winner of ${value - 3}`;
  //     label = label + `\nWinner of ${value - 2}`;
  //   }
  }
  obj.label = label;
  obj.x = x;
  obj.y = y;

  return obj;
}

function makeRel(start, end, type) {
  var obj = {};
  // console.log(start, end);
  obj.from = start;
  obj.to = end;
  obj.label = type;
  // console.log(obj);
  return obj;
}

function buildBracket(arr) {
  const xSpacing = 150;
  const ySpacing = 75;
  // console.log(arr);

  for (var i = 0; i < arr.length - 1; i++) {
    let length = arr[i].length;
    
    if (length > 2) {
      for (var j = 0; j < arr[i + 1].length; j++) {
        nodes.push(makeNode(arr[i][2 * j], i * xSpacing, (2*j)*Math.pow(2,i) * ySpacing + Math.pow(2,i) * ySpacing / 2));
        nodes.push(makeNode(arr[i][2 * j + 1], i * xSpacing, (2*j+1)*Math.pow(2,i) * ySpacing  + Math.pow(2,i) * ySpacing / 2));
        
        // Rels for winners to advance
        // rels.push(makeRel(arr[i][2 * j], arr[i + 1][j], 'WINNER_ADVANCES_TO'));
        rels.push(makeRel(arr[i][2 * j], arr[i + 1][j], ''));
        // rels.push(makeRel(arr[i][2 * j + 1], arr[i + 1][j], 'WINNER_ADVANCES_TO'));
        rels.push(makeRel(arr[i][2 * j + 1], arr[i + 1][j], ''));
      }
    } else {
      nodes.push(makeNode(arr[i][0], i * xSpacing, (2*0)*Math.pow(2,i-1) * ySpacing + Math.pow(2,i) * ySpacing / 2)); // Semi final #1
      nodes.push(makeNode(arr[i][1], i * xSpacing, (2*1)*Math.pow(2,i-1) * ySpacing + Math.pow(2,i) * ySpacing / 2)); // Semi final #2
      nodes.push(makeNode(arr[i + 1][0], (i+1) * xSpacing /*- xSpacing/2*/, (2*0)*Math.pow(2,i-1) * ySpacing + Math.pow(2,i+1) * ySpacing / 2)); // 3rd Place
      nodes.push(makeNode(arr[i + 1][1], (i+2) * xSpacing, (2*0)*Math.pow(2,i-1) * ySpacing + Math.pow(2,i+1) * ySpacing / 2)); // Final

      // Rels to 3rd place
      // rels.push(makeRel(arr[i][0], arr[i + 1][0], 'LOSER_ADVANCES_TO'));
      rels.push(makeRel(arr[i][0], arr[i + 1][0], ''));
      // rels.push(makeRel(arr[i][1], arr[i + 1][0], 'LOSER_ADVANCES_TO'));
      rels.push(makeRel(arr[i][1], arr[i + 1][0], ''));

      // Rels to Final
      // rels.push(makeRel(arr[i][0], arr[i + 1][1], 'WINNER_ADVANCES_TO'));
      rels.push(makeRel(arr[i][0], arr[i + 1][1], ''));
      // rels.push(makeRel(arr[i][1], arr[i + 1][1], 'WINNER_ADVANCES_TO'));
      rels.push(makeRel(arr[i][1], arr[i + 1][1], ''));
    }
  }

  // console.log(nodes);
  rels.forEach(rel => {
    let index = nodes.findIndex(node => node.id === rel.to);
    if (index === size - 1) {
      // finals
      nodes[index].label = nodes[index].label + `\nWinner of ${rel.from}`;
    } else if (index === size - 2) {
      // 3rd place
      nodes[index].label = nodes[index].label + `\nLoser of ${rel.from}`;
    } else {
      nodes[index].label = nodes[index].label + `\nWinner of ${rel.from}`;
    }
  });

}

if (size === 2) {
  // console.log('# fights = ', size - 1);
} else {
  // console.log('# fights = ', size);

  let array = [];
  for (var index = 0; index < size; index++) {
    array[index] = index + 1;
  }
  
  let arr = [];
  buildBracketArray(array, arr);
  // console.log(arr);

  buildBracket(arr);
  // console.log(arr);
}

// create a network
var container = document.getElementById("bracket");
var data = {
  nodes: new vis.DataSet(nodes),
  edges: new vis.DataSet(rels),
};
var options = {
  nodes: {
    fixed: true,
    shape: 'box',
    font: {
      align: 'left'
    }
  },
  edges: {
    arrows: 'to',
    smooth: {
      enabled: true,
      // type: 'straightCross',
      type: 'horizontal',
      forceDirection: 'vertical',
      roundness: 1
    },
    font: {
      align: 'top'
    }
  }
};
var network = new vis.Network(container, data, options);

network.on('click', function(obj){
  // console.log(obj);
})