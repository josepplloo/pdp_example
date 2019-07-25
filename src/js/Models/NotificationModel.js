function NotificationModel() {
  let data = {
    action: 'Page Load',
    time: 0
  };

  this.getAll = function() {
    return data;
  };

  this.set = function(action, time) {
    Object.assign(data, {action, time})
  }
}  