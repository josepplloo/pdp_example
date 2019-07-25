function ImagesService() {

    const generateRandomNumber = (max, min) => {
      return Math.round(Math.random() * (max - min) + min);
    }

    this.getImage = function (width, height) {
      let imageId = generateRandomNumber(100, 10);
      https://picsum.photos/id/401/120/107
      return `https://picsum.photos/id/${imageId}/${width}/${height}`;
    }
}