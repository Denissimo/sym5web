/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
import{F as t,P as e,E as r}from"../widgets/Sketch/SketchViewModel.js";import{t as o}from"../views/draw/DrawAction.js";class n extends t{constructor(t){super({...t,constraint:new e(t.coordinateHelper,t.targetPoint)})}get hints(){return[new o(this.targetPoint)]}}function a(t,e){switch(t.type){case"edge":return new r({coordinateHelper:e,edgeStart:e.fromPoint(t.start),edgeEnd:e.fromPoint(t.end),targetPoint:e.fromPoint(t.target),objectId:t.objectId});case"vertex":return new n({coordinateHelper:e,targetPoint:e.fromPoint(t.target),objectId:t.objectId})}}export{a as c};
