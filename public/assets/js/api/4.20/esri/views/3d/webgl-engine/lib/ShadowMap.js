// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.20/esri/copyright.txt for details.
//>>built
define("../../../../chunks/_rollupPluginBabelHelpers ../../../../core/mathUtils ../../../../core/maybe ../../../../chunks/mat3f64 ../../../../chunks/mat4 ../../../../chunks/mat4f64 ../../../../chunks/vec2 ../../../../chunks/vec2f64 ../../../../chunks/vec3 ../../../../chunks/vec3f64 ../../../../chunks/vec4 ../../../../chunks/vec4f64 ./Camera ./Util ../../../webgl/FramebufferObject ../../../webgl/Texture ../../../webgl/Util".split(" "),function(ma,T,M,na,E,G,d,p,H,Q,X,Y,oa,t,pa,R,qa){function w(C,l){d.set(Z,
C[l],C[l+3]);return Z}let ra=function(){this.camera=new oa;this.lightMat=G.create()},ta=function(){function C(a,b,e=0){this.rctx=a;this.viewingMode=b;this._enabled=!1;this._snapshots=[];this.maxTextureSize=this.textureSize=0;this.numCascades=1;this.maxNumCascades=4;this.splitSchemeLambda=0;this.warp=!0;this.cascadeDistances=[0,0,0,0,0];this.cascades=[];this.maxTextureSize=this.rctx.parameters.maxTextureSize;for(a=0;4>a;++a)this.cascades.push(new ra);this.snapshotCount=e}var l=C.prototype;l.dispose=
function(){this.discardDepthTexture();this.discardAllSnapshots()};l.getSnapshot=function(a){return this.enabled?this._snapshots[a]:null};l.getCascades=function(){for(let a=0;a<this.numCascades;++a)U[a]=this.cascades[a];U.length=this.numCascades;return U};l.start=function(a,b,e){t.assert(this.enabled);this.textureSize=this.computeTextureSize(a.fullWidth,a.fullHeight);this.ensureDepthTexture();const {near:f,far:g}=this.clampNearFar(e);this.computeCascadeDistances(g,f);this.setupMatrices(a,b);e=a.viewMatrix;
a=a.projectionMatrix;for(let k=0;k<this.numCascades;++k)this.constructCascade(k,a,e,b);this.lastOrigin=null;this.clear()};l.finish=function(a){t.assert(this.enabled);this.rctx.bindFramebuffer(a)};l.bind=function(a){this.enabled?(this._depthTextureUnit=a.bindTexture(this._depthTexture,"uShadowMapTex"),a.setUniform1f("uDepthHalfPixelSz",.5/this.textureSize),a.setUniform1i("uShadowMapNum",this.numCascades),a.setUniform4f("uShadowMapDistance",this.cascadeDistances[0],1<this.numCascades?this.cascadeDistances[1]:
Infinity,2<this.numCascades?this.cascadeDistances[2]:Infinity,3<this.numCascades?this.cascadeDistances[3]:Infinity)):a.setUniform1f("uDepthHalfPixelSz",-1)};l.bindView=function(a,b){if(this.enabled){var e=this.lastOrigin;if(!e||e[0]!==b[0]||e[1]!==b[1]||e[2]!==b[2])for(this.lastOrigin=this.lastOrigin||Q.create(),H.copy(this.lastOrigin,b),e=0;e<this.numCascades;++e){E.translate(aa,this.cascades[e].lightMat,b);for(let f=0;16>f;++f)ba[16*e+f]=aa[f]}a.setUniformMatrix4fv("uShadowMapMatrix",ba)}};l.takeCascadeSnapshotTo=
function(a,b){t.assert(this.enabled);this.ensureSnapshot(b);this._bindFbo();const e=this.rctx;b=e.bindTexture(this._snapshots[b],R.TEXTURE_UNIT_FOR_UPDATES);e.gl.copyTexSubImage2D(3553,0,a.camera.viewport[0],a.camera.viewport[1],a.camera.viewport[0],a.camera.viewport[1],a.camera.viewport[2],a.camera.viewport[3]);e.bindTexture(b,R.TEXTURE_UNIT_FOR_UPDATES)};l.clear=function(){const a=this.rctx;this._bindFbo();a.setClearColor(1,1,1,1);a.clearSafe(16640)};l.computeTextureSize=function(a,b){return Math.min(this.maxTextureSize,
2*2**Math.round(.5*Math.log(a*a+b*b)*Math.LOG2E+.35))};l.ensureDepthTexture=function(){if(null==this._depthTexture||this._depthTexture.descriptor.width!==this.textureSize)this.discardDepthTexture(),this._depthTexture=new R(this.rctx,{target:3553,pixelFormat:6408,dataType:5121,wrapMode:33071,samplingMode:9728,flipped:!0,width:this.textureSize,height:this.textureSize}),this.fbo=new pa(this.rctx,{colorTarget:0,depthStencilTarget:1,width:this.textureSize,height:this.textureSize},this._depthTexture)};
l.ensureSnapshot=function(a){const b=this._snapshots[a];M.isSome(b)&&b.descriptor.width===this.textureSize||(this.discardSnapshot(a),this._snapshots[a]=new R(this.rctx,{target:3553,pixelFormat:6408,dataType:5121,wrapMode:33071,samplingMode:9728,flipped:!0,width:this.textureSize,height:this.textureSize}))};l.discardDepthTexture=function(){this.fbo=M.disposeMaybe(this.fbo);this._depthTexture=M.disposeMaybe(this._depthTexture)};l.discardSnapshot=function(a){this._snapshots[a]=M.disposeMaybe(this._snapshots[a])};
l.discardAllSnapshots=function(){for(let a=0;a<this.snapshotCount;++a)this.discardSnapshot(a)};l._bindFbo=function(){const a=this.rctx;M.isSome(this._depthTextureUnit)&&(a.bindTexture(null,this._depthTextureUnit),this._depthTextureUnit=null);a.bindFramebuffer(this.fbo)};l.constructCascade=function(a,b,e,f){const g=this.cascades[a];var k=-this.cascadeDistances[a],h=-this.cascadeDistances[a+1];k=(b[10]*k+b[14])/Math.abs(b[11]*k+b[15]);b=(b[10]*h+b[14])/Math.abs(b[11]*h+b[15]);t.assert(k<b);for(h=0;8>
h;++h){X.set(ca,0===h%4||3===h%4?-1:1,0===h%4||1===h%4?-1:1,4>h?k:b,1);X.transformMat4(u[h],ca,da);for(let q=0;3>q;++q)u[h][q]/=u[h][3]}H.negate(V,u[0]);E.translate(ea,fa,V);g.camera.viewMatrix=ea;for(k=0;8>k;++k)H.transformMat4(u[k],u[k],g.camera.viewMatrix);H.copy(z,u[0]);H.copy(A,u[0]);for(k=1;8>k;++k)for(b=0;3>b;++b)z[b]=Math.min(z[b],u[k][b]),A[b]=Math.max(A[b],u[k][b]);z[2]-=200;A[2]+=200;g.camera.near=-A[2];g.camera.far=-z[2];this.warp?this.constructTrapezoidalProjection(e,f,g):this.constructOrthogonalProjection(g);
E.multiply(g.lightMat,g.camera.projectionMatrix,g.camera.viewMatrix);e=this.textureSize/2;g.camera.viewport[0]=0===a%2?0:e;g.camera.viewport[1]=0===Math.floor(a/2)?0:e;g.camera.viewport[2]=e;g.camera.viewport[3]=e};l.constructOrthogonalProjection=function(a){E.ortho(a.camera.projectionMatrix,z[0],A[0],z[1],A[1],a.camera.near,a.camera.far)};l.constructTrapezoidalProjection=function(a,b,e){var f=1/u[0][3],g=1/u[4][3];t.assert(f<g);f+=Math.sqrt(f*g);var k=Math.sin(T.acosClamped(a[2]*b[0]+a[6]*b[1]+a[10]*
b[2]));a=u;var h=f/k;b=ha;var q=ia,m=sa;g=ja;f=ka;d.set(x,0,0);for(var r=0;4>r;++r)d.add(x,x,a[r]);d.scale(x,x,.25);d.set(I,0,0);for(r=4;8>r;++r)d.add(I,I,a[r]);d.scale(I,I,.25);d.lerp(F[0],a[4],a[5],.5);d.lerp(F[1],a[5],a[6],.5);d.lerp(F[2],a[6],a[7],.5);d.lerp(F[3],a[7],a[4],.5);r=0;var B=d.squaredDistance(F[0],x);for(var y=1;4>y;++y){var J=d.squaredDistance(F[y],x);J<B&&(B=J,r=y)}d.subtract(n,F[r],a[r+4]);r=n[0];n[0]=-n[1];n[1]=r;d.subtract(W,I,x);0>d.dot(W,n)&&d.negate(n,n);d.lerp(n,n,W,k);d.normalize(n,
n);k=r=d.dot(d.subtract(D,a[0],x),n);for(B=1;8>B;++B)y=d.dot(d.subtract(D,a[B],x),n),y<k?k=y:y>r&&(r=y);d.copy(b,x);d.scale(D,n,k-h);d.add(b,b,D);y=-1;J=1;h=B=0;for(let N=0;8>N;++N){d.subtract(O,a[N],b);d.normalize(O,O);const P=n[0]*O[1]-n[1]*O[0];0<P?P>y&&(y=P,B=N):P<J&&(J=P,h=N)}t.verify(0<y,"leftArea");t.verify(0>J,"rightArea");d.scale(K,n,k);d.add(K,K,x);d.scale(L,n,r);d.add(L,L,x);S[0]=-n[1];S[1]=n[0];q=t.rayRay2D(b,a[h],L,d.add(D,L,S),1,q);m=t.rayRay2D(b,a[B],L,D,1,m);g=t.rayRay2D(b,a[B],K,
d.add(D,K,S),1,g);a=t.rayRay2D(b,a[h],K,D,1,f);t.verify(q,"rayRay");t.verify(m,"rayRay");t.verify(g,"rayRay");t.verify(a,"rayRay");m=ha;a=ia;b=ja;g=ka;f=e.camera.projectionMatrix;d.subtract(v,b,g);d.scale(v,v,.5);c[0]=v[0];c[1]=v[1];c[2]=0;c[3]=v[1];c[4]=-v[0];c[5]=0;c[6]=v[0]*v[0]+v[1]*v[1];c[7]=v[0]*v[1]-v[1]*v[0];c[8]=1;c[6]=-d.dot(w(c,0),m);c[7]=-d.dot(w(c,1),m);m=d.dot(w(c,0),b)+c[6];q=d.dot(w(c,1),b)+c[7];h=d.dot(w(c,0),g)+c[6];g=d.dot(w(c,1),g)+c[7];m=-(m+h)/(q+g);c[0]+=c[1]*m;c[3]+=c[4]*m;
c[6]+=c[7]*m;m=1/(d.dot(w(c,0),b)+c[6]);q=1/(d.dot(w(c,1),b)+c[7]);c[0]*=m;c[3]*=m;c[6]*=m;c[1]*=q;c[4]*=q;c[7]*=q;c[2]=c[1];c[5]=c[4];c[8]=c[7];c[7]+=1;m=d.dot(w(c,1),a)+c[7];q=d.dot(w(c,2),a)+c[8];h=d.dot(w(c,1),b)+c[7];g=d.dot(w(c,2),b)+c[8];m=-.5*(m/q+h/g);c[1]+=c[2]*m;c[4]+=c[5]*m;c[7]+=c[8]*m;m=d.dot(w(c,1),a)+c[7];q=d.dot(w(c,2),a)+c[8];h=-q/m;c[1]*=h;c[4]*=h;c[7]*=h;f[0]=c[0];f[1]=c[1];f[2]=0;f[3]=c[2];f[4]=c[3];f[5]=c[4];f[6]=0;f[7]=c[5];f[8]=0;f[9]=0;f[10]=1;f[11]=0;f[12]=c[6];f[13]=c[7];
f[14]=0;f[15]=c[8];e.camera.projectionMatrix[10]=2/(z[2]-A[2]);e.camera.projectionMatrix[14]=-(z[2]+A[2])/(z[2]-A[2])};l.setupMatrices=function(a,b){E.multiply(la,a.projectionMatrix,a.viewMatrix);E.invert(da,la);a=1===this.viewingMode?a.eye:H.set(V,0,0,1);E.lookAt(fa,[0,0,0],[-b[0],-b[1],-b[2]],a)};l.clampNearFar=function(a){let {near:b,far:e}=a;2>b&&(b=2);2>e&&(e=2);b>=e&&(b=2,e=4);return{near:b,far:e}};l.computeCascadeDistances=function(a,b){this.numCascades=Math.min(1+Math.floor(t.logWithBase(a/
b,4)),this.maxNumCascades);const e=(a-b)/this.numCascades;a=(a/b)**(1/this.numCascades);let f=b;for(let g=0;g<this.numCascades+1;++g)this.cascadeDistances[g]=T.lerp(f,b,this.splitSchemeLambda),f*=a,b+=e};l.getGpuMemoryUsage=function(){var a,b;return this._snapshots.reduce((e,f)=>e+qa.getGpuMemoryUsage(f),null!=(a=null==(b=this.fbo)?void 0:b.gpuMemoryUsage)?a:0)};ma._createClass(C,[{key:"maxCascades",get:function(){return this.maxNumCascades},set:function(a){this.maxNumCascades=T.clamp(Math.floor(a),
1,4)}},{key:"enabled",get:function(){return this._enabled},set:function(a){this._enabled=a;a||(this.discardDepthTexture(),this.discardAllSnapshots())}},{key:"snapshotCount",get:function(){return this._snapshots.length},set:function(a){var b=this._snapshots.length;if(a>b){var e=a-b;this._snapshots.length=a;for(a=0;a<e;++a)this._snapshots[b+a]=null}else if(a<this.snapshotCount){b-=a;for(e=0;e<b;++e)this.discardSnapshot(a+e);this._snapshots.length=a}}},{key:"test",get:function(){const a=this;return{maxNumCascades:this.maxNumCascades,
cascades:this.cascades,textureSize:this.textureSize,depthTexture:this._depthTexture,set splitSchemeLambda(b){a.splitSchemeLambda=b},get splitSchemeLambda(){return a.splitSchemeLambda},set warp(b){a.warp=b},get warp(){return a.warp}}}}]);return C}();const ea=G.create(),la=G.create(),da=G.create(),ca=Y.create(),u=[];for(let C=0;8>C;++C)u.push(Y.create());const z=Q.create(),A=Q.create(),ha=p.create(),ia=p.create(),sa=p.create(),ja=p.create(),ka=p.create(),fa=G.create(),V=Q.create(),U=[],aa=G.create(),
ba=new Float32Array(64),x=p.create(),I=p.create(),F=[p.create(),p.create(),p.create(),p.create()],n=p.create(),W=p.create(),D=p.create(),O=p.create(),K=p.create(),L=p.create(),S=p.create(),Z=p.create(),v=p.create(),c=na.create();return ta});