function PdpModel() {
  this.data = [
    {id: 1, name: 'Damir'}
  ];

  this.init = function(imagesService) {
    this.ImagesService = imagesService;
  }
  this.getAll = function() {
    return this.data;
  }
}  