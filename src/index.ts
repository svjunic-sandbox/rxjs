import axios from 'axios';

import { from, fromEvent, Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

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

const observable$ = Observable.create(observer => {
  axios
    .post('http://127.0.0.1:3001/api/', {
      query: query,
      variables: variables
    })
    .then(response => {
      observer.next(response.data);
      observer.complete();
    })
    .catch(error => {
      observer.error(error);
    });
});

const remakeShowData = (res: any) => {
  let taglists = res.data.data.getTweets.map((val: any): any => {
    return val.hashtags;
  });

  taglists = taglists.flat();

  const counts = {};

  for (let i = 0; i < taglists.length; i++) {
    const key = taglists[i];
    counts[key] = counts[key] ? counts[key] + 1 : 1;
  }

  return counts;
};

//
fromEvent(document.querySelector('#load'), 'click')
  // どっちがいいのか
  //.pipe(() => getTweets$)
  //.pipe(tap(e => console.log('1', e)))
  // どっちがいいのか
  .pipe(
    () => getTweets$,
    tap(e => console.log('1', e)),
    map(res => remakeShowData(res)),
    tap(e => console.log('2', e))
  );
//.subscribe(event => console.log('complete', event));
