(function(window, document){
'use strict';

var dateService = {
  getCurrentDate: function(){
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1;
    var yyyy = today.getFullYear();

    if(dd<10) {
        dd = '0' + dd;
    }

    if(mm<10) {
        mm = '0' + mm;
    }

    return mm + '/' + dd + '/' + yyyy;
  }
}

var commentsService = {
  showComments: function(element){
    //button and hidden comments strongly coupled !!

    var hiddenCommentsElement = element.parentElement.previousSibling.previousSibling;

    if(hiddenCommentsElement.style.maxHeight === '0px' || !hiddenCommentsElement.style.maxHeight){
      hiddenCommentsElement.style.maxHeight = '150vh';
      element.innerHTML = 'less... <i class="fa fa-arrow-up" aria-hidden="true"></i>';
    } else {
      hiddenCommentsElement.style.maxHeight = '0';
      element.innerHTML = 'more... <i class="fa fa-arrow-down" aria-hidden="true"></i>';
    }

  },
  addComment: function(element){

    var hiddenCommentsOnlyCommentsWrapper = element.parentElement.previousSibling.previousSibling;
    console.log('hiddenCommentsOnlyCommentsWrapper.previousSibling.previousSibling: ', hiddenCommentsOnlyCommentsWrapper);

    //access previous sibling*2 gets one previous sibling
    var commentAuthorElement = element.previousSibling.previousSibling.previousSibling.previousSibling;
    var commentContentElement = element.previousSibling.previousSibling;

    hiddenCommentsOnlyCommentsWrapper.innerHTML += '<div class="comment">\n' +
                                                      '<div class="comment__author">\n' +
                                                        commentAuthorElement.value + '\n' +
                                                      '</div>\n' +
                                                      '<div class="comment__date">\n' +
                                                        dateService.getCurrentDate() + '\n' +
                                                      '</div>\n' +
                                                      '<div class="comment__content">\n' +
                                                        commentContentElement.value +
                                                      '</div>\n' +
                                                    '</div>\n';

    commentAuthorElement.value = '';
    commentContentElement.value = '';
  }
}

document.showComments = commentsService.showComments;
document.addComment = commentsService.addComment;


var tabService = {
  uwazajWrapper: document.getElementById('uwazaj'),
  dzialajWrapper: document.getElementById('dzialaj'),
  poznawajWrapper: document.getElementById('poznawaj'),
  tabsController: function(number){
    if(number === 1){
      tabService.uwazajWrapper.style.height = 'auto';
      tabService.dzialajWrapper.style.height = '0px';
      tabService.poznawajWrapper.style.height = '0px';
    } else if(number === 2){
      tabService.uwazajWrapper.style.height = '0px';
      tabService.dzialajWrapper.style.height = 'auto';
      tabService.poznawajWrapper.style.height = '0px';
    } else if(number === 3){
      tabService.uwazajWrapper.style.height = '0px';
      tabService.dzialajWrapper.style.height = '0px';
      tabService.poznawajWrapper.style.height = 'auto';
    }

  }

}

document.chooseTab = tabService.tabsController;


})(window, document);
