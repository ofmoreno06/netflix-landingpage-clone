(function(){
  'use strict';

  const tabItems = document.querySelectorAll('.tab-item');
  const tabContentItems = document.querySelectorAll('.tab-content-item');

  // listening click in tabs
  tabItems.forEach(item => item.addEventListener('click', selectItem));

  function selectItem(e){
    removeBorder();
    this.classList.add('tab-border');
    removeShow();
    document.querySelector(`#${this.id}-content`).classList.add('show');
    e.preventDefault();
  }

  function removeBorder(){
    tabItems.forEach(item => item.classList.remove('tab-border'));
  }

  function removeShow(){
    tabContentItems.forEach(item => item.classList.remove('show'));
  }

})();