// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.20/esri/copyright.txt for details.
//>>built
define("exports ../Slice.glsl ../Transform.glsl ../attributes/NormalAttribute.glsl ../attributes/TextureCoordinateAttribute.glsl ../attributes/VertexNormal.glsl ../output/OutputDepth.glsl ../output/OutputHighlight.glsl ../shading/VisualVariables.glsl ../util/AlphaDiscard.glsl ../../shaderModules/interfaces".split(" "),function(m,d,e,n,f,p,q,r,g,h,c){m.DefaultMaterialAuxiliaryPasses=function(a,b){const k=a.vertex.code,l=a.fragment.code;if(1===b.output||3===b.output)a.include(e.Transform,{linearDepth:!0}),
a.include(f.TextureCoordinateAttribute,b),a.include(g.VisualVariables,b),a.include(q.OutputDepth,b),a.include(d.Slice,b),a.vertex.uniforms.add("cameraNearFar","vec2"),a.varyings.add("depth","float"),b.hasColorTexture&&a.fragment.uniforms.add("tex","sampler2D"),k.add(c.glsl`void main(void) {
vpos = calculateVPos();
vpos = subtractOrigin(vpos);
vpos = addVerticalOffset(vpos, localOrigin);
gl_Position = transformPositionWithDepth(proj, view, vpos, cameraNearFar, depth);
forwardTextureCoordinates();
}`),a.include(h.DiscardOrAdjustAlpha,b),l.add(c.glsl`
      void main(void) {
        discardBySlice(vpos);
        ${b.hasColorTexture?c.glsl`
        vec4 texColor = texture2D(tex, vuv0);
        discardOrAdjustAlpha(texColor);`:""}
        outputDepth(depth);
      }
    `);2===b.output&&(a.include(e.Transform,{linearDepth:!1}),a.include(n.NormalAttribute,b),a.include(p.VertexNormal,b),a.include(f.TextureCoordinateAttribute,b),a.include(g.VisualVariables,b),b.hasColorTexture&&a.fragment.uniforms.add("tex","sampler2D"),a.vertex.uniforms.add("viewNormal","mat4"),a.varyings.add("vPositionView","vec3"),k.add(c.glsl`
      void main(void) {
        vpos = calculateVPos();
        vpos = subtractOrigin(vpos);
        ${0===b.normalType?c.glsl`
        vNormalWorld = dpNormalView(vvLocalNormal(normalModel()));`:""}
        vpos = addVerticalOffset(vpos, localOrigin);
        gl_Position = transformPosition(proj, view, vpos);
        forwardTextureCoordinates();
      }
    `),a.include(d.Slice,b),a.include(h.DiscardOrAdjustAlpha,b),l.add(c.glsl`
      void main() {
        discardBySlice(vpos);
        ${b.hasColorTexture?c.glsl`
        vec4 texColor = texture2D(tex, vuv0);
        discardOrAdjustAlpha(texColor);`:""}

        ${3===b.normalType?c.glsl`
            vec3 normal = screenDerivativeNormal(vPositionView);`:c.glsl`
            vec3 normal = normalize(vNormalWorld);
            if (gl_FrontFacing == false) normal = -normal;`}
        gl_FragColor = vec4(vec3(0.5) + 0.5 * normal, 1.0);
      }
    `));4===b.output&&(a.include(e.Transform,{linearDepth:!1}),a.include(f.TextureCoordinateAttribute,b),a.include(g.VisualVariables,b),b.hasColorTexture&&a.fragment.uniforms.add("tex","sampler2D"),k.add(c.glsl`void main(void) {
vpos = calculateVPos();
vpos = subtractOrigin(vpos);
vpos = addVerticalOffset(vpos, localOrigin);
gl_Position = transformPosition(proj, view, vpos);
forwardTextureCoordinates();
}`),a.include(d.Slice,b),a.include(h.DiscardOrAdjustAlpha,b),a.include(r.OutputHighlight),l.add(c.glsl`
      void main() {
        discardBySlice(vpos);
        ${b.hasColorTexture?c.glsl`
        vec4 texColor = texture2D(tex, vuv0);
        discardOrAdjustAlpha(texColor);`:""}
        outputHighlight();
      }
    `))};Object.defineProperty(m,"__esModule",{value:!0})});