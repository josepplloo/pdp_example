function NotificationController(el, view, model) {
  this.$el = $(el);
  this.view = view;
  this.model = model;

  this.init = function(){
    this.bindEvents();
    this.showNotification();
  }

  this.showNotification = function () {
    this.view.render(this.$el, this.model.getAll())
    this.syncLastUpdated();
  }

  this.bindEvents = function() {
    EventManager.on('page.loaded', this.notifyClicked.bind(this));
    EventManager.on('pdp.items.clicked', this.notifyClicked.bind(this));
    this.$el.on('load',EventManager.fire('page.loaded','page load'))

  }

  this.notifyClicked = function(notifystr) {
    this.lastUpdated = notifystr;
    this.time = 0;
  }

  this.syncLastUpdated = function() {
    this.time = 0;
    this.timer = setInterval(() => {
      this.model.set(this.lastUpdated, this.time);
      this.time++;
    }, 1000);
    console.log(this.model.getAll())

  }


}