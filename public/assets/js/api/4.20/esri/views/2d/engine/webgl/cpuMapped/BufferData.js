// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.20/esri/copyright.txt for details.
//>>built
define("exports ../../../../../chunks/_rollupPluginBabelHelpers ../../../../../core/has ../../../../../core/maybe ../../../../webgl/BufferObject ../../../../webgl/FramebufferObject ../../../../webgl/Program ../../../../webgl/ProgramCache ../../../../webgl/Renderbuffer ../../../../webgl/RenderingContext ../../../../webgl/ShaderCompiler ../../../../webgl/Texture ../../../../webgl/VertexArrayObject ../definitions ../FeatureDisplayList ./Buffer ./DisplayRecordReader ../mesh/heuristics".split(" "),function(v,
y,w,l,F,G,H,I,J,K,L,M,z,A,B,x,u,C){w=function(){function n(a,b,d,c,e){this._vaoInvalidated=!0;const f=C.getMeshHeuristic(b),h=Math.max(f.verticesPerRecord*f.multiplier*d,c+1);c=a/Uint32Array.BYTES_PER_ELEMENT;d=new x.Buffer("index",Math.max(f.indicesPerRecord*f.multiplier*d,e+1),1);e={geometry:new x.Buffer("vertex",h,c)};this.stride=a;this.strideInt=c;this.geometryType=b;this._buffers={index:d,vertex:e}}n.createPooled=function(a,b,d,c,e,f,h){const k=Math.max(A.BUFFER_DATA_MINIMUM_SIZE,Math.round(1.5*
f));a=l.unwrapOr(a,()=>new n(b.stride,d,k,c,e));a._buffers.index.clear();a._buffers.vertex.geometry.clear();a._records=null;a._displayList=null;a._vaoInvalidated=!0;a._pool=h;a._released=!1;return a};var g=n.prototype;g.release=function(){this.isReleased||(this._pool.release(this),this._released=!0)};g.destroy=function(){this._buffers.index.destroy();this._buffers.vertex.geometry.destroy();l.andThen(this._vao,a=>a.dispose(!1))};g.draw=function(a,b,d,c,e){this.upload(a);b=this._getVAO(a,b,d);c*=Uint32Array.BYTES_PER_ELEMENT;
a.bindVAO(b);a.drawElements(4,e,5125,c);a.bindVAO(null)};g.insert=function(a){if(!a.done){var {vertexData:b,offset:d}=a,{records:c,indices:e,vertices:f}=b,h=this._getInsertionInfo(u.DisplayRecordReader.from(c,d)),{vertFrom:k,vertCount:p,indexFrom:q,indexCount:r,recordCount:m,done:t}=h;a.done=t;a.offset=m+d;if(0!==m){var {index:D,vertex:E}=this._buffers;a=E.geometry.insert(f,k,p,0);h=D.insert(e,q,r,a);this._addRecords(u.DisplayRecordReader.from(c,d,m),h,a)}}};g.free=function(a){for(a=u.DisplayRecordReader.from(a.records).getCursor();a.next();)this._freeId(a.id)};
g.freeIds=function(a){for(const b of a)this._freeId(b)};g.upload=function(a){const {index:b,vertex:d}=this._buffers;b.upload(a);d.geometry.upload(a)};g.has=function(a){if(!this._records)return!1;const b=this._records.getCursor();for(;b.next();)if(b.id===a)return!0;return!1};g.getViewOf=function(a){if(!this._records)return null;const b=this._records.getCursor();for(;b.next();)if(b.id===a)return b;return null};g._getInsertionInfo=function(a){a=a.getCursor();const {index:b,vertex:d}=this._buffers,c=
b.maxAvailableSpace(),e=d.geometry.maxAvailableSpace();let f=0,h=null,k=0,p=null,q=0,r=!0;for(;a.next();){null===p&&(p=a.vertexFrom,h=a.indexFrom);const m=q+a.vertexCount,t=k+a.indexCount;if(m>=e||t>=c){r=!1;break}f+=1;k=t;q=m}return{done:r,vertFrom:p,vertCount:q,indexFrom:h,indexCount:k,recordCount:f}};g._addRecords=function(a,b,d){const c=a.getCursor();for(;c.next();)c.indexFrom+=b,c.vertexFrom+=d;this._records?(this._records.link(a),this._displayList=null):this._records=a};g._freeId=function(a){const b=
this._records.getCursor(),d=this._buffers.index,c=this._buffers.vertex.geometry;if(b.lookup(a)){for(var e=b.indexFrom,f=b.indexCount,h=b.vertexFrom,k=b.vertexCount;b.next()&&b.id===a;)f+=b.indexCount,k+=b.vertexCount;d.free(e,f);c.free(h,k,!0);this._records.delete(a)}};g._getVAO=function(a,b,d){if(this._vaoInvalidated){const c=JSON.stringify(b)+JSON.stringify([...d]);c!==this._vaoHash&&(l.andThen(this._vao,e=>{e.dispose(!1)}),this._vao=null,this._vaoHash=c);this._vaoInvalidated=!1}if(l.isNone(this._vao)){const {index:c,
vertex:e}=this._buffers;if(l.isNone(e.geometry.gpu)||l.isNone(c.gpu))throw Error("bad news");this._vao=new z(a,d,b,{geometry:e.geometry.gpu},c.gpu)}return this._vao};y._createClass(n,[{key:"isReleased",get:function(){return this._released}},{key:"indexBufferSize",get:function(){return this._buffers.index.bufferSize}},{key:"vertexBufferSize",get:function(){return this._buffers.vertex.geometry.bufferSize}},{key:"displayList",get:function(){l.isNone(this._displayList)&&(this._displayList=B.FeatureDisplayList.from(this,
this._records.getCursor()));return this._displayList}}]);return n}();v.BufferData=w;Object.defineProperty(v,"__esModule",{value:!0})});