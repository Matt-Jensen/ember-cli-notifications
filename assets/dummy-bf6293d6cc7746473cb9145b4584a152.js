define("dummy/app",["exports","ember","ember/resolver","ember/load-initializers","dummy/config/environment"],function(t,e,n,i,s){"use strict";e["default"].MODEL_FACTORY_INJECTIONS=!0;var a=e["default"].Application.extend({modulePrefix:s["default"].modulePrefix,podModulePrefix:s["default"].podModulePrefix,Resolver:n["default"]});i["default"](a,s["default"].modulePrefix),t["default"]=a}),define("dummy/components/notification-message",["exports","ember-cli-notifications/components/notification-message"],function(t,e){"use strict";t["default"]=e["default"]}),define("dummy/controllers/application",["exports","ember"],function(t,e){"use strict";t["default"]=e["default"].ObjectController.extend({actions:{showSuccess:function(){this.notifications.addNotification({message:"A success notification",type:"success"})},showInfo:function(){this.notifications.addNotification({message:"An info notification",type:"info"})},showError:function(){this.notifications.addNotification({message:"An error notification",type:"error"})},showWarning:function(){this.notifications.addNotification({message:"A warning notification",type:"warning"})}}})}),define("dummy/initializers/app-version",["exports","dummy/config/environment","ember"],function(t,e,n){"use strict";var i=n["default"].String.classify;t["default"]={name:"App Version",initialize:function(t,s){var a=i(s.toString());n["default"].libraries.register(a,e["default"].APP.version)}}}),define("dummy/initializers/export-application-global",["exports","ember","dummy/config/environment"],function(t,e,n){"use strict";function i(t,i){var s=e["default"].String.classify(n["default"].modulePrefix);n["default"].exportApplicationGlobal&&!window[s]&&(window[s]=i)}t.initialize=i,t["default"]={name:"export-application-global",initialize:i}}),define("dummy/initializers/notifications",["exports","ember-cli-notifications/services/notification-messages-service"],function(t,e){"use strict";t["default"]={name:"notification-messages-service",initialize:function(t,n){n.register("notification-messages:service",e["default"]),["controller","component","route","router"].forEach(function(t){n.inject(t,"notifications","notification-messages:service")})}}}),define("dummy/router",["exports","ember","dummy/config/environment"],function(t,e,n){"use strict";var i=e["default"].Router.extend({location:n["default"].locationType});i.map(function(){}),t["default"]=i}),define("dummy/templates/application",["exports","ember"],function(t,e){"use strict";t["default"]=e["default"].Handlebars.template(function(t,n,i,s,a){function o(t,e){var n,s,a="";return e.buffer.push("\n    "),e.buffer.push(u((n=i["notification-message"]||t&&t["notification-message"],s={hash:{notification:""},hashTypes:{notification:"ID"},hashContexts:{notification:t},contexts:[],types:[],data:e},n?n.call(t,s):c.call(t,"notification-message",s)))),e.buffer.push("\n  "),a}this.compilerInfo=[4,">= 1.0.0"],i=this.merge(i,e["default"].Handlebars.helpers),a=a||{};var r,f="",c=i.helperMissing,u=this.escapeExpression,l=this;return a.buffer.push('<h2 id="title">Welcome to Ember.js</h2>\n\n<div class="notifications-container">\n  '),r=i.each.call(n,"notifications",{hash:{},hashTypes:{},hashContexts:{},inverse:l.noop,fn:l.program(1,o,a),contexts:[n],types:["ID"],data:a}),(r||0===r)&&a.buffer.push(r),a.buffer.push("\n</div>\n\n<button "),a.buffer.push(u(i.action.call(n,"showSuccess",{hash:{},hashTypes:{},hashContexts:{},contexts:[n],types:["STRING"],data:a}))),a.buffer.push(' title="Show a success notification">Success</button>\n<button '),a.buffer.push(u(i.action.call(n,"showInfo",{hash:{},hashTypes:{},hashContexts:{},contexts:[n],types:["STRING"],data:a}))),a.buffer.push(' title="Show an info notification">Info</button>\n<button '),a.buffer.push(u(i.action.call(n,"showError",{hash:{},hashTypes:{},hashContexts:{},contexts:[n],types:["STRING"],data:a}))),a.buffer.push(' title="Show an error notification">Error</button>\n<button '),a.buffer.push(u(i.action.call(n,"showWarning",{hash:{},hashTypes:{},hashContexts:{},contexts:[n],types:["STRING"],data:a}))),a.buffer.push(' title="Show a warning notification">Warning</button>\n\n'),r=i._triageMustache.call(n,"outlet",{hash:{},hashTypes:{},hashContexts:{},contexts:[n],types:["ID"],data:a}),(r||0===r)&&a.buffer.push(r),a.buffer.push("\n"),f})}),define("dummy/templates/components/notification-message",["exports","ember"],function(t,e){"use strict";t["default"]=e["default"].Handlebars.template(function(t,n,i,s,a){function o(t,e){var n="";return e.buffer.push('\n  <span class="notification-close" '),e.buffer.push(c(i.action.call(t,"removeNotification",{hash:{},hashTypes:{},hashContexts:{},contexts:[t],types:["STRING"],data:e}))),e.buffer.push(' title="Dismiss this notification">\n    <i class="fa fa-times"></i>\n  </span>\n'),n}this.compilerInfo=[4,">= 1.0.0"],i=this.merge(i,e["default"].Handlebars.helpers),a=a||{};var r,f="",c=this.escapeExpression,u=this;return a.buffer.push('<div class="notification-icon">\n  <span>\n    <i '),a.buffer.push(c(i["bind-attr"].call(n,{hash:{"class":":fa notificationIcon"},hashTypes:{"class":"STRING"},hashContexts:{"class":n},contexts:[],types:[],data:a}))),a.buffer.push("></i>\n  </span>\n</div>\n<div "),a.buffer.push(c(i["bind-attr"].call(n,{hash:{"class":":notification-content autoClear::dismissable"},hashTypes:{"class":"STRING"},hashContexts:{"class":n},contexts:[],types:[],data:a}))),a.buffer.push(">\n  "),r=i._triageMustache.call(n,"notification.message",{hash:{},hashTypes:{},hashContexts:{},contexts:[n],types:["ID"],data:a}),(r||0===r)&&a.buffer.push(r),a.buffer.push("\n</div>\n"),r=i.unless.call(n,"notification.autoClear",{hash:{},hashTypes:{},hashContexts:{},inverse:u.noop,fn:u.program(1,o,a),contexts:[n],types:["ID"],data:a}),(r||0===r)&&a.buffer.push(r),a.buffer.push("\n"),f})}),define("dummy/config/environment",["ember"],function(t){var e="dummy";try{var n=e+"/config/environment",i=t["default"].$('meta[name="'+n+'"]').attr("content"),s=JSON.parse(unescape(i));return{"default":s}}catch(a){throw new Error('Could not read config from meta tag with name "'+n+'".')}}),runningTests?require("dummy/tests/test-helper"):require("dummy/app")["default"].create({name:"ember-cli-notifications",version:"1.0.2.a49efd26"});