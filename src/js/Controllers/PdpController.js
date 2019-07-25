function PdpController(el, view, model) {
  this.$el = $(el);
  this.view = view;
  this.model = model;

  this.init = function() {
    this.bindEvents();
  }

  this.bindEvents = function() {
    EventManager.on('element.clicked', this.elementClicked.bind(this));
  }

  this.elementClicked = function(action) {
    EventManager.fire('element.clicked', action);
  }

}