export class ImageEditor {
  constructor(canvas, onChange=()=>{}) { this.canvas=canvas; this.ctx=canvas.getContext("2d"); this.onChange=onChange; this.images=[]; this.current=-1; this.history=[]; this.future=[]; this.state=null; }
  get image(){return this.images[this.current]||null}
  addFiles(fileList){
    const valid=[...fileList].filter(f=>f.type.startsWith("image/"));
    return Promise.all(valid.map(file=>new Promise((resolve,reject)=>{const url=URL.createObjectURL(file);const img=new Image();img.onload=()=>resolve({id:crypto.randomUUID(),name:file.name,img,url,original:{brightness:100,contrast:100,saturation:100,rotation:0,flip:false,background:null},crop:null});img.onerror=reject;img.src=url;}))).then(items=>{this.images.push(...items);if(this.current<0)this.current=0;this.select(this.current);return items;});
  }
  select(i){if(i<0||i>=this.images.length)return;this.current=i;this.state={...this.image.original};this.history=[];this.future=[];this.draw();this.onChange();}
  snapshot(){return {state:{...this.state},crop:this.image.crop?{...this.image.crop}:null};}
  commit(){this.history.push(this.snapshot());if(this.history.length>30)this.history.shift();this.future=[];}
  restore(s){this.state={...s.state};this.image.crop=s.crop?{...s.crop}:null;this.draw();this.onChange();}
  undo(){if(!this.history.length)return;this.future.push(this.snapshot());this.restore(this.history.pop());}
  redo(){if(!this.future.length)return;this.history.push(this.snapshot());this.restore(this.future.pop());}
  setAdjustment(key,value){if(!this.image)return;this.commit();this.state[key]=value;this.draw();}
  setRotation(deg){if(!this.image)return;this.commit();this.state.rotation=(this.state.rotation+deg+360)%360;this.draw();}
  flip(){if(!this.image)return;this.commit();this.state.flip=!this.state.flip;this.draw();}
  setBackground(color){if(!this.image)return;this.commit();this.state.background=color;this.draw();}
  reset(){if(!this.image)return;this.commit();this.image.crop=null;this.state={...this.image.original};this.draw();}
  crop(x,y,w,h){if(!this.image)throw Error("Upload a photo first");const src=this.sourceCanvas();x=Math.max(0,Math.floor(x));y=Math.max(0,Math.floor(y));w=Math.min(src.width-x,Math.floor(w));h=Math.min(src.height-y,Math.floor(h));if(w<1||h<1)throw Error("Crop area is outside the image");this.commit();const c=document.createElement("canvas");c.width=w;c.height=h;c.getContext("2d").drawImage(src,x,y,w,h,0,0,w,h);this.image.crop={canvas:c,width:w,height:h};this.draw();}
  sourceCanvas(){const im=this.image;const c=document.createElement("canvas");const rotated=[90,270].includes(this.state.rotation);c.width=rotated?im.img.height:im.img.width;c.height=rotated?im.img.width:im.img.height;const x=c.getContext("2d");x.translate(c.width/2,c.height/2);x.rotate(this.state.rotation*Math.PI/180);x.scale(this.state.flip?-1:1,1);x.drawImage(im.img,-im.img.width/2,-im.img.height/2);if(im.crop){const cropped=new Image();cropped.src=im.crop.data;/* crop is applied in render/export below */}return c;}
  renderCanvas(){const base=this.sourceCanvas();let source=base;if(this.image.crop){source=this.image.crop.canvas;}
    const c=document.createElement("canvas");c.width=source.width;c.height=source.height;const x=c.getContext("2d");if(this.state.background){x.fillStyle=this.state.background;x.fillRect(0,0,c.width,c.height);}x.filter=`brightness(${this.state.brightness}%) contrast(${this.state.contrast}%) saturate(${this.state.saturation}%)`;x.drawImage(source,0,0);x.filter="none";return c;}
  draw(){if(!this.image){this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height);return;}const rendered=this.renderCanvas();const maxW=this.canvas.width-30,maxH=this.canvas.height-30,scale=Math.min(maxW/rendered.width,maxH/rendered.height);const w=rendered.width*scale,h=rendered.height*scale;this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height);this.ctx.fillStyle="#fff";this.ctx.fillRect(0,0,this.canvas.width,this.canvas.height);this.ctx.drawImage(rendered,(this.canvas.width-w)/2,(this.canvas.height-h)/2,w,h);this.onChange();}
  exportBlob(type="image/jpeg",quality=.95){if(!this.image)throw Error("Upload a photo first");return new Promise(resolve=>this.renderCanvas().toBlob(resolve,type,quality));}
  getDimensions(){if(!this.image)return null;const c=this.renderCanvas();return {width:c.width,height:c.height};}
}
