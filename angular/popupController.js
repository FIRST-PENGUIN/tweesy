module.exports = function() {
  let vm = this;
  vm.submitTweet = submitTweet;

  vm.$onInit = function() {
    vm.completed = false;
    vm.content = '';
  }

  function submitTweet() {
    vm.completed = true;
  }
}
