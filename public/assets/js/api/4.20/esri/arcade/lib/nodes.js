// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.20/esri/copyright.txt for details.
//>>built
define(["exports","./syntax"],function(c,d){c.ArrayExpression=function(a){this.type=d.Syntax.ArrayExpression;this.elements=a};c.ArrayPattern=function(a){this.type=d.Syntax.ArrayPattern;this.elements=a};c.AssignmentExpression=function(a,b,e){this.type=d.Syntax.AssignmentExpression;this.operator=a;this.left=b;this.right=e};c.AssignmentPattern=function(a,b){this.type=d.Syntax.AssignmentPattern;this.left=a;this.right=b};c.BinaryExpression=function(a,b,e){this.type="||"===a||"\x26\x26"===a?d.Syntax.LogicalExpression:
d.Syntax.BinaryExpression;this.operator=a;this.left=b;this.right=e};c.BlockStatement=function(a){this.type=d.Syntax.BlockStatement;this.body=a};c.BreakStatement=function(a){this.type=d.Syntax.BreakStatement;this.label=a};c.CallExpression=function(a,b){this.type=d.Syntax.CallExpression;this.callee=a;this.arguments=b};c.ComputedMemberExpression=function(a,b){this.type=d.Syntax.MemberExpression;this.computed=!0;this.object=a;this.property=b};c.ConditionalExpression=function(a,b,e){this.type=d.Syntax.ConditionalExpression;
this.test=a;this.consequent=b;this.alternate=e};c.ContinueStatement=function(a){this.type=d.Syntax.ContinueStatement;this.label=a};c.EmptyStatement=function(){this.type=d.Syntax.EmptyStatement};c.ExpressionStatement=function(a){this.type=d.Syntax.ExpressionStatement;this.expression=a};c.ForInStatement=function(a,b,e){this.type=d.Syntax.ForInStatement;this.left=a;this.right=b;this.body=e;this.each=!1};c.ForStatement=function(a,b,e,f){this.type=d.Syntax.ForStatement;this.init=a;this.test=b;this.update=
e;this.body=f};c.FunctionDeclaration=function(a,b,e,f){this.type=d.Syntax.FunctionDeclaration;this.id=a;this.params=b;this.body=e;this.generator=f;this.async=this.expression=!1};c.FunctionExpression=function(a,b,e,f){this.type=d.Syntax.FunctionExpression;this.id=a;this.params=b;this.body=e;this.generator=f;this.async=this.expression=!1};c.Identifier=function(a){this.type=d.Syntax.Identifier;this.name=a};c.IfStatement=function(a,b,e){this.type=d.Syntax.IfStatement;this.test=a;this.consequent=b;this.alternate=
e};c.Literal=function(a,b){this.type=d.Syntax.Literal;this.value=a;this.raw=b};c.MethodDefinition=function(a,b,e,f,g){this.type=d.Syntax.MethodDefinition;this.key=a;this.computed=b;this.value=e;this.kind=f;this.static=g};c.Module=function(a){this.type=d.Syntax.Program;this.body=a;this.sourceType="module"};c.ObjectExpression=function(a){this.type=d.Syntax.ObjectExpression;this.properties=a};c.ObjectPattern=function(a){this.type=d.Syntax.ObjectPattern;this.properties=a};c.Property=function(a,b,e,f,
g,h){this.type=d.Syntax.Property;this.key=b;this.computed=e;this.value=f;this.kind=a;this.method=g;this.shorthand=h};c.ReturnStatement=function(a){this.type=d.Syntax.ReturnStatement;this.argument=a};c.Script=function(a){this.type=d.Syntax.Program;this.body=a;this.sourceType="script"};c.SequenceExpression=function(a){this.type=d.Syntax.SequenceExpression;this.expressions=a};c.StaticMemberExpression=function(a,b){this.type=d.Syntax.MemberExpression;this.computed=!1;this.object=a;this.property=b};c.TemplateElement=
function(a,b){this.type=d.Syntax.TemplateElement;this.value=a;this.tail=b};c.TemplateLiteral=function(a,b){this.type=d.Syntax.TemplateLiteral;this.quasis=a;this.expressions=b};c.UnaryExpression=function(a,b){this.type=d.Syntax.UnaryExpression;this.operator=a;this.argument=b;this.prefix=!0};c.UpdateExpression=function(a,b,e){this.type=d.Syntax.UpdateExpression;this.operator=a;this.argument=b;this.prefix=e};c.VariableDeclaration=function(a,b){this.type=d.Syntax.VariableDeclaration;this.declarations=
a;this.kind=b};c.VariableDeclarator=function(a,b){this.type=d.Syntax.VariableDeclarator;this.id=a;this.init=b};Object.defineProperty(c,"__esModule",{value:!0})});