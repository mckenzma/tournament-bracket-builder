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
    case: "A",
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
  console.log("num: ", int);
  console.log("initial: ", arr);
  console.log("final: ", finalArr);
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
