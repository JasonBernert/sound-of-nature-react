class Sound {
  constructor(context, buffer) {
    this.context = context;
    this.buffer = buffer;
  }
  
  setup() {
    this.gainNode = this.context.createGain();
    this.source = this.context.createBufferSource();
    this.source.buffer = this.buffer;
    this.source.connect(this.gainNode);
    this.gainNode.connect(this.context.destination);
    this.gainNode.gain.setValueAtTime(0.8, this.context.currentTime);
  }

  play() {
    this.setup();
    this.source.start(this.context.currentTime);
  }
  
  stop() {
    var ct = this.context.currentTime + 0.5;
    this.gainNode.gain.exponentialRampToValueAtTime(0.001, ct);
    this.source.stop(ct);
  }
}

class Buffer {
  constructor(context, urls) {  
    this.context = context;
    this.urls = urls;
    this.buffer = [];
  }
  
  loadSound(url, index) {
    let request = new XMLHttpRequest();
    request.open('get', url, true);
    request.responseType = 'arraybuffer';
    let thisBuffer = this;
    request.onload = function() {
      thisBuffer.context
        .decodeAudioData(request.response, function(buffer) {
          thisBuffer.buffer[index] = buffer;
          if(index === thisBuffer.urls.length - 1) {
            thisBuffer.loaded();
          }       
        });
    };
    request.send();
  };
  
  getBuffer() {
    this.urls.forEach((url, index) => {
      this.loadSound(url, index);
    })
  }
  
  loaded() {
    console.log('loaded');
  }
  
  getSound(index) {
    return this.buffer[index];
  }
}

module.exports = {
  Sound,
  Buffer
};