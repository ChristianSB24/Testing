import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {ProfileBadgeComponent} from './profiles'
import store from './app/store';
import { Provider } from 'react-redux';
import {FeedComponent, TweetsComponent, TweetDetailComponent} from './tweets'
import reportWebVitals from './reportWebVitals';
//import * as serviceWorker from './serviceWorker';
// import './api/server'
import { fetchUsers } from './tweets/features/users/usersSlice'

store.dispatch(fetchUsers())

const appEl = document.getElementById('root')
if (appEl) {
  ReactDOM.render(
    <Provider store={store}> 
      <App />
    </Provider>,
     appEl);
}
const e = React.createElement
const tweetsEl = document.getElementById("tweetme-2")
if (tweetsEl) {
    ReactDOM.render(
      e(TweetsComponent, tweetsEl.dataset), tweetsEl);
}

const tweetFeedEl = document.getElementById("tweetme-2-feed")
if (tweetFeedEl) {
  ReactDOM.render(
    e(FeedComponent, tweetFeedEl.dataset), tweetFeedEl);
}

const tweetDetailElements = document.querySelectorAll(".tweetme-2-detail")

tweetDetailElements.forEach(container=> {
  ReactDOM.render(
    e(TweetDetailComponent, container.dataset),
    container);
})

const userProfileBadgeElements = document.querySelectorAll(".tweetme-2-profile-badge")

userProfileBadgeElements.forEach(container=> {
  ReactDOM.render(
    e(ProfileBadgeComponent, container.dataset),
    container);
})

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
//serviceWorker.unregister();
