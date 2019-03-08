class HoverIntent {
  constructor({elem, over, out}) {
    this.elem = elem;
    this.over = over;
    this.out = out;
    
    this.addListeners();
  }
  addListeners() {
    let self = this;
    
    this.elem.addEventListener('mouseleave', function() {
      clearTimeout(self.slowId);
      self.out();
    });
    
    this.elem.addEventListener('mouseenter', function() {
      new Promise(self.isSlowMove).then(self.over);
    });
  }
  isSlowMove(isSlow, isFast) {
    this.slowId = setTimeout(isSlow, 500);
    
    setTimeout(isFast, 550);
  }
}
