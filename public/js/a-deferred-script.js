function deferredSleep() {
  log('starting deferred sleep', 'green');
  sleep();
  log('finished deferred sleep', 'pink');
}

deferredSleep()