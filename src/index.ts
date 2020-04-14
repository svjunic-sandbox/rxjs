import axios from 'axios';

import { of, from, fromEvent } from 'rxjs';
import { map } from 'rxjs/operators';

of(1, 2, 3);

of(1, 2, 3).pipe(map(x => x + '!!!'));

fromEvent(document.querySelector('#sample'), 'click').subscribe(event => console.log(event));

const observable = from([1, 2, 3]);
observable.subscribe(next => console.log(next));

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

function getTweets() {
  //古い書き方
  //return Observable.fromPromise(
  return from(
    axios.post('http://127.0.0.1:3001/api/', {
      query: query,
      variables: variables
    })
  );
}

getTweets().subscribe(res => {
  let taglists = res.data.data.getTweets.map(val => {
    return val.hashtags;
  });

  console.log(taglists.flat());

  var counts = {};

  for (var i = 0; i < myCurrentArray.length; i++) {
    var key = myCurrentArray[i];
    counts[key] = counts[key] ? counts[key] + 1 : 1;
  }

  alert(counts['apple']);
  alert(counts['banana']);
});
