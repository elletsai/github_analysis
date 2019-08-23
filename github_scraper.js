/*
var gs = require('github-scraper');
var url = '/iteles' // a random username
gs(url, function(err, data) {
  console.log(data); // or what ever you want to do with the data
})
*/
var gs = require('github-scraper');
var url = '/iteles/followers' // a random username (of someone you should follow!)
gs(url, function(err, data) {
  console.log(data); // or what ever you want to do with the data
  if(data.next_page) {
    gs(data.next_page, function(err2, data2) {
      console.log(data2); // etc.
    })
  }
})
/*
var gs = require('github-scraper'); // require the module
var url = 'iteles?tab=stars';           // starred repos for this user
gs(url, function(err, data) {
  console.log(data);                // or what ever you want to do with the data
})*/