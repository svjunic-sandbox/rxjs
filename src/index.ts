interface ICountObject {
  tagname: string;
  count: number;
}

import axios from 'axios';

// 非同期パターンいろいろ
// https://github.com/LeoLovina/react_practice/blob/cbca154f2f8f8f726b17fb924fb3e78903e7399a/react-webpack/src/rxjsTest/ApiTest.tsx

import { Observable } from 'rxjs';
import { from, fromEvent } from 'rxjs';
import { map, mergeMap, tap } from 'rxjs/operators';

const query = `
  query($num:Int) {
    getTweets(num:$num) {
      hashtags
    }
  }
`;

const variables = {
  //num: 20
  num: 0
};

//const observable$ = Observable.create(observer => {
//  axios
//    .post('http://127.0.0.1:3001/api/', {
//      query: query,
//      variables: variables
//    })
//    .then(response => {
//      observer.next(response.data);
//      observer.complete();
//    })
//    .catch(error => {
//      observer.error(error);
//    });
//});

const remakeShowData = (message: any) => {
  console.log(message);
  let taglists = message.data.getTweets.map((val: any): any => {
    return val.hashtags;
  });

  taglists = taglists.flat();

  const counts = {};
  for (let i = 0; i < taglists.length; i++) {
    const key = taglists[i];
    counts[key] = counts[key] ? counts[key] + 1 : 1;
  }
  message.counts = counts;

  const countArray = [];
  for (const property in counts) {
    const obj: ICountObject = {
      tagname: property,
      count: counts[property]
    };
    countArray.push(obj);
  }

  message.countList = countArray;

  return message;
};

const clickLoad$ = fromEvent(document.querySelector('#load'), 'click');

const render = countList => {
  countList.sort((a, b) => {
    if (a.count > b.count) {
      return 1;
    } else {
      return -1;
    }
  });

  const $list = document.querySelector('#list');

  const _fragment = document.createDocumentFragment();

  //for (const property in countList) {
  for (let cnt = 0, max = countList.length; cnt < max; cnt++) {
    const { tagname, count } = countList[cnt];
    const tr = document.createElement('tr');
    const th = document.createElement('th');
    const td = document.createElement('td');
    th.appendChild(document.createTextNode(`${tagname}`));
    td.appendChild(document.createTextNode(`${count}`));
    tr.appendChild(th);
    tr.appendChild(td);
    _fragment.appendChild(tr);
  }

  $list.appendChild(_fragment);
};

clickLoad$
  .pipe(
    tap(event => console.log('1', event)),
    mergeMap(event =>
      // fromはpromiseに対応しているから
      from(
        axios
          .post('http://127.0.0.1:3001/api/', {
            query: query,
            variables: variables
          })
          .then(e => {
            // このデータがストリームに流れる
            //return e.data;
            return {
              event,
              data: e.data.data
            };
          })
      )
    ),
    tap(message1 => console.log('2', message1)),
    map(res => remakeShowData(res)),
    tap(message2 => console.log('3', message2))
  )
  .subscribe(result => {
    console.log('complete', result);
    render(result.countList);
  });
//.subscribe(event => console.log('complete', event));

// This function runs when subscribe() is called
function sequenceSubscriber(observer) {
  // synchronously deliver 1, 2, and 3, then complete
  observer.next(1);
  observer.next(2);
  observer.next(3);
  observer.next(6);
  observer.complete();

  // unsubscribe function doesn't need to do anything in this
  // because values are delivered synchronously
  return { unsubscribe() {} };
}

// Create a new Observable that will deliver the above sequence
const sequence = new Observable(sequenceSubscriber);

// execute the Observable and print the result of each notification
sequence.subscribe({
  next(num) {
    console.log(num);
  },
  complete() {
    console.log('Finished sequence');
  }
});

// Logs:
// 1
// 2
// 3
// Finished sequence
