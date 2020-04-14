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
      original_tweet_id
    }
  }
`;

const variables = {
  num: 20
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

getTweets()
  .pipe(res => {
    res.mogeta = true;
    return res;
  })
  .subscribe(res => {
    console.log(res);
  });
