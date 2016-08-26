angular
  .module('material.components.link', ['material.core'])
  .directive('mdLink', MdLinkDirective);

function MdLinkDirective($mdTheming) {

  return {
    restrict: 'EAC',
    link: postLink
  };

  function postLink(scope, element, attr) {
    $mdTheming(element);
  }
}

MdLinkDirective.$inject = ["$mdTheming"];