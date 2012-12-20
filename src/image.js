
SVG.Image = function Image() {
  this.constructor.call(this, SVG.create('image'));
};

// inherit from SVG.Element
SVG.Image.prototype = new SVG.Shape();

// Add image-specific functions
SVG.extend(SVG.Image, {
  
  // (re)load image
  load: function(u) {
    return this.attr('href', u, SVG.xlink);
  }
  
});