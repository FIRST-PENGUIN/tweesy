module.exports = function() {
  let vm = this;
  vm.submitTweet = submitTweet;
  vm.isDisabledTweet = isDisabledTweet;

  vm.$onInit = function() {
    vm.completed = false;
    vm.content = '';
  }

  function submitTweet() {
    vm.completed = true;
  }

  function isDisabledTweet() {
    return vm.content.length === 0 || vm.content.length >= 140;
  }
}
