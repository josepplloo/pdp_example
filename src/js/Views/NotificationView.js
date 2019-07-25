function NotificationView(el) {
  this.$el = $(el);

  this.render = function($el, data) {
    $notification = `<div class="col-md-12">
      Last Action: ${data.action} (${data.time} seconds ago)
    </div>`;
    $el.append($notification);
  }
  
}  