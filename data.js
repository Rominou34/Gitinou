var data = {
  "sha": "787fccaf67c09d5966b19dea4bcf723cd9be0ae5",
  "commit": {
    "author": {
      "name": "Romain Arnaud",
      "email": "arnaud.romain34@gmail.com",
      "date": "2016-04-06T19:37:27Z"
    },
    "committer": {
      "name": "Romain Arnaud",
      "email": "arnaud.romain34@gmail.com",
      "date": "2016-04-06T19:37:27Z"
    },
    "message": "Solve Issue #20 and add soft.animate()\n\nSo I changed the JS into 3 files:\n* misc.js, contains functions used by the library like randomId() or\nsoftRequestAnimationFrame()\n* dom.js, handling all dom manipulations ( automatic ones like the vital event listeners )\n* soft.js , containing a variable soft with functions inside\n\nNow we call functions like this: soft.notification(), soft.animate()",
    "tree": {
      "sha": "ddca404a05fb2e20f69e7594d3b77c95474728a1",
      "url": "https://api.github.com/repos/Rominou34/soft-css/git/trees/ddca404a05fb2e20f69e7594d3b77c95474728a1"
    },
    "url": "https://api.github.com/repos/Rominou34/soft-css/git/commits/787fccaf67c09d5966b19dea4bcf723cd9be0ae5",
    "comment_count": 0
  },
  "url": "https://api.github.com/repos/Rominou34/soft-css/commits/787fccaf67c09d5966b19dea4bcf723cd9be0ae5",
  "html_url": "https://github.com/Rominou34/soft-css/commit/787fccaf67c09d5966b19dea4bcf723cd9be0ae5",
  "comments_url": "https://api.github.com/repos/Rominou34/soft-css/commits/787fccaf67c09d5966b19dea4bcf723cd9be0ae5/comments",
  "author": {
    "login": "Rominou34",
    "id": 17294713,
    "avatar_url": "https://avatars.githubusercontent.com/u/17294713?v=3",
    "gravatar_id": "",
    "url": "https://api.github.com/users/Rominou34",
    "html_url": "https://github.com/Rominou34",
    "followers_url": "https://api.github.com/users/Rominou34/followers",
    "following_url": "https://api.github.com/users/Rominou34/following{/other_user}",
    "gists_url": "https://api.github.com/users/Rominou34/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/Rominou34/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/Rominou34/subscriptions",
    "organizations_url": "https://api.github.com/users/Rominou34/orgs",
    "repos_url": "https://api.github.com/users/Rominou34/repos",
    "events_url": "https://api.github.com/users/Rominou34/events{/privacy}",
    "received_events_url": "https://api.github.com/users/Rominou34/received_events",
    "type": "User",
    "site_admin": false
  },
  "committer": {
    "login": "Rominou34",
    "id": 17294713,
    "avatar_url": "https://avatars.githubusercontent.com/u/17294713?v=3",
    "gravatar_id": "",
    "url": "https://api.github.com/users/Rominou34",
    "html_url": "https://github.com/Rominou34",
    "followers_url": "https://api.github.com/users/Rominou34/followers",
    "following_url": "https://api.github.com/users/Rominou34/following{/other_user}",
    "gists_url": "https://api.github.com/users/Rominou34/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/Rominou34/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/Rominou34/subscriptions",
    "organizations_url": "https://api.github.com/users/Rominou34/orgs",
    "repos_url": "https://api.github.com/users/Rominou34/repos",
    "events_url": "https://api.github.com/users/Rominou34/events{/privacy}",
    "received_events_url": "https://api.github.com/users/Rominou34/received_events",
    "type": "User",
    "site_admin": false
  },
  "parents": [
    {
      "sha": "edabf9a27d7a3461cc310014818f1fddc868b8da",
      "url": "https://api.github.com/repos/Rominou34/soft-css/commits/edabf9a27d7a3461cc310014818f1fddc868b8da",
      "html_url": "https://github.com/Rominou34/soft-css/commit/edabf9a27d7a3461cc310014818f1fddc868b8da"
    }
  ],
  "stats": {
    "total": 371,
    "additions": 211,
    "deletions": 160
  },
  "files": [
    {
      "sha": "e435ecfdef02b1971bb362a9280fb239d533931c",
      "filename": "index.html",
      "status": "modified",
      "additions": 3,
      "deletions": 1,
      "changes": 4,
      "blob_url": "https://github.com/Rominou34/soft-css/blob/787fccaf67c09d5966b19dea4bcf723cd9be0ae5/index.html",
      "raw_url": "https://github.com/Rominou34/soft-css/raw/787fccaf67c09d5966b19dea4bcf723cd9be0ae5/index.html",
      "contents_url": "https://api.github.com/repos/Rominou34/soft-css/contents/index.html?ref=787fccaf67c09d5966b19dea4bcf723cd9be0ae5",
      "patch": "@@ -15,7 +15,9 @@\n         <link href='https://fonts.googleapis.com/css?family=Ubuntu' rel='stylesheet' type='text/css'>\n         <link href='https://fonts.googleapis.com/css?family=Source+Sans+Pro' rel='stylesheet' type='text/css'>\n         <link rel=\"stylesheet\" type=\"text/css\" href=\"src/min/soft.min.css\">\n-        <script src=\"src/soft.js\"></script>\n+        <script src=\"../src/js/misc.js\"></script>\n+        <script src=\"../src/js/soft.js\"></script>\n+        <script src=\"../src/js/dom.js\"></script>\n         <link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css\">\n     </head>\n     <body>"
    },
    {
      "sha": "516a24e7fb84be09b4ae39ee8e0d21baaef445df",
      "filename": "preview/index.html",
      "status": "modified",
      "additions": 3,
      "deletions": 1,
      "changes": 4,
      "blob_url": "https://github.com/Rominou34/soft-css/blob/787fccaf67c09d5966b19dea4bcf723cd9be0ae5/preview/index.html",
      "raw_url": "https://github.com/Rominou34/soft-css/raw/787fccaf67c09d5966b19dea4bcf723cd9be0ae5/preview/index.html",
      "contents_url": "https://api.github.com/repos/Rominou34/soft-css/contents/preview/index.html?ref=787fccaf67c09d5966b19dea4bcf723cd9be0ae5",
      "patch": "@@ -6,7 +6,9 @@\n         <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n         <link href='../src/min/test.css' rel='stylesheet' type='text/css'>\n         <!--<link href='../src/min/soft.min.css' rel='stylesheet' type='text/css'>!-->\n-        <script src=\"../src/soft.js\"></script>\n+        <script src=\"../src/js/misc.js\"></script>\n+        <script src=\"../src/js/soft.js\"></script>\n+        <script src=\"../src/js/dom.js\"></script>\n         <link href='https://fonts.googleapis.com/css?family=Montserrat' rel='stylesheet' type='text/css'>\n         <link href='https://fonts.googleapis.com/css?family=Ubuntu' rel='stylesheet' type='text/css'>\n         <link href='https://fonts.googleapis.com/css?family=Fredoka+One' rel='stylesheet' type='text/css'>"
    },
    {
      "sha": "57d312b17c0b02cb846e5a9c2614a071eee4d2c4",
      "filename": "src/js/dom.js",
      "status": "renamed",
      "additions": 0,
      "deletions": 158,
      "changes": 158,
      "blob_url": "https://github.com/Rominou34/soft-css/blob/787fccaf67c09d5966b19dea4bcf723cd9be0ae5/src/js/dom.js",
      "raw_url": "https://github.com/Rominou34/soft-css/raw/787fccaf67c09d5966b19dea4bcf723cd9be0ae5/src/js/dom.js",
      "contents_url": "https://api.github.com/repos/Rominou34/soft-css/contents/src/js/dom.js?ref=787fccaf67c09d5966b19dea4bcf723cd9be0ae5",
      "patch": "@@ -1,11 +1,5 @@\n-/*\n-* Soft CSS - The tweakable CSS framework\n-* Romain Arnaud - 2016\n-*/\n var navBar, navBarY, navSide;\n \n-var notifs = [];\n-\n window.onload = function() {\n   addToolTipListeners();\n   addNavDropdownListener();\n@@ -24,102 +18,8 @@ window.onload = function() {\n   if(navSide !== null) {\n     addNavSideToggle();\n   }\n-  /*setInterval(function() {\n-    console.table(notifs);\n-  }, 400);/**/\n-}\n-\n-/****************************** CUSTOM ELEMENTS *******************************/\n-\n-/*************** SOFT POPUP ***************/\n-\n-/*\n-* This function is the constructor to display <soft-popup> notifications\n-* param is an array that looks like this:\n-* params:\n-* type = alert type ( defaults are success, info, warning and alert ),\n-* header = Header message ( the message displayed in bold at the top ),\n-* msg = Message ( the message displayed )\n-*/\n-var softPopup = function(type, header, msg) {\n-  // Creating the element and the mask\n-  var softpopupmask = document.createElement(\"div\");\n-  softpopupmask.className = \"soft-popupmask\";\n-\n-  var softpopup = document.createElement(\"div\");\n-  softpopup.className = \"soft-popup \";\n-\n-  // Getting the corresponding color\n-  var color = null;\n-  switch(type) {\n-    case \"success\":\n-      color = \"green\"; break;\n-    case \"info\":\n-      color = \"blue\"; break;\n-    case \"warning\":\n-      color = \"yellow\"; break;\n-    case \"alert\":\n-      color = \"red\"; break;\n-  }\n-\n-  // Adding the text inside the element\n-  if(color !== null) {\n-    softpopup.innerHTML = \"<span>\" + header + \"</span>\"+\n-    \"<div><p>\" + msg + \"</p></div><button class=\\\"\"+color+\"\\\">Hide</button>\";\n-  } else {\n-    softpopup.innerHTML = \"<span>\" + header + \"</span>\"+\n-    \"<div><p>\" + msg + \"</p></div><button>Hide</button>\";\n-  }\n-\n-  try {\n-    softpopup.classList.add(type);\n-  } catch(err) {\n-    console.log(err.message);\n-  }\n-  // To hide the element on click\n-  var button = softpopup.querySelector(\"button\");\n-  button.addEventListener(\"click\", function() {\n-    this.parentElement.parentElement.remove();\n-    this.parentElement.remove();\n-  });\n-  document.body.appendChild(softpopupmask);\n-  softpopupmask.appendChild(softpopup);\n-}\n-\n-\n-/*************** SOFT PROGRESS BARS ***************/\n-\n-/*\n-* Function used to create progress bars\n-* params:\n-* minV = minimum value\n-* maxV = maximum value\n-* prog = current progress\n-* type = boolean ( if 0, we display \"currentValue/maxValue\", if 1, we display\n-* \"x %\" )\n-*/\n-var softProgressBar = function(minV, maxV, elem, height) {\n-  this.minV = minV;\n-  this.maxV = maxV;\n-  var softprogress = document.createElement(\"div\");\n-  softprogress.className = \"soft-progress\";\n-  softprogress.style.height = height;\n-\n-  softprogress.setAttribute(\"data-minv\",this.minV);\n-  softprogress.setAttribute(\"data-maxv\",this.maxV);\n-  softprogress.innerHTML = \"<div></div>\";\n-  softprogress.querySelector(\"div\").style.width = 0 + \"%\";\n-  this.element = softprogress;\n-  elem.appendChild(softprogress);\n-}\n-\n-softProgressBar.prototype.setProgress = function(prog) {\n-  var percent = Math.round(((prog-this.minV) / (this.maxV-this.minV))*100);\n-  if(percent > 100) { percent = 100; }\n-  this.element.querySelector(\"div\").style.width = percent + \"%\";\n }\n \n-\n /*************** SOFT TOOLTIPS ***************/\n \n \n@@ -177,47 +77,6 @@ var addToolTipListeners = function() {\n   });\n }\n \n-/*************** SOFT NOTIFICATIONS ***************/\n-\n-var softNotif = function(type, msg, t) {\n-  var not = document.createElement(\"div\");\n-  var id = randomId(8);\n-  not.className = \"soft-notif \" + type;\n-  not.innerHTML = msg;\n-  var pos = 0;\n-  for(var k in notifs) {\n-    if (notifs.hasOwnProperty(k)) {\n-      for(var i=0; i<notifs.length+1; i++) {\n-        var b = false;\n-        for(var j in notifs) {\n-          if(notifs[j][1]===i) {\n-            b=true;\n-          }\n-        }\n-        if(b===false) {\n-          pos=i;\n-          break;\n-        }\n-      }\n-    }\n-  }\n-  not.style.bottom = ((pos*56)+10) + \"px\";\n-  notifs.push([id,pos]);\n-  document.body.appendChild(not);\n-  setTimeout(function() {\n-    fadeOut(not, t/2, 1);\n-    //not.remove();\n-    var rank;\n-    for(var j in notifs) {\n-      if(notifs[j][0]===id) {\n-        rank=j;\n-        break;\n-      }\n-    }\n-    notifs.splice(j,1);\n-  }, t);\n-}\n-\n /***************************** OTHER FUNCTIONS ********************************/\n \n /************ NAVBAR ************/\n@@ -290,23 +149,6 @@ addNavHidingLinks = function() {\n   });\n }\n \n-/*********** MISC ***********/\n-\n-/*\n-* Generates a random id of length 's'\n-* Example: randomId(5) = 's8f2R'\n-*/\n-function randomId(s)\n-{\n-    var text = \"\";\n-    var possible = \"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789\";\n-\n-    for( var i=0; i < s; i++ )\n-        text += possible.charAt(Math.floor(Math.random() * possible.length));\n-\n-    return text;\n-}\n-\n /*\n * Fades out an element e on a duration d\n * If the second argument is \"rm\", the element will be removed from the DOM",
      "previous_filename": "src/soft.js"
    },
    {
      "sha": "b7865a81d86bf06eeda7534ee9cd2c0cc13abf5d",
      "filename": "src/js/misc.js",
      "status": "added",
      "additions": 37,
      "deletions": 0,
      "changes": 37,
      "blob_url": "https://github.com/Rominou34/soft-css/blob/787fccaf67c09d5966b19dea4bcf723cd9be0ae5/src/js/misc.js",
      "raw_url": "https://github.com/Rominou34/soft-css/raw/787fccaf67c09d5966b19dea4bcf723cd9be0ae5/src/js/misc.js",
      "contents_url": "https://api.github.com/repos/Rominou34/soft-css/contents/src/js/misc.js?ref=787fccaf67c09d5966b19dea4bcf723cd9be0ae5",
      "patch": "@@ -0,0 +1,37 @@\n+/*********** MISC ***********/\n+\n+/*\n+* Generates a random id of length 's'\n+* Example: randomId(5) = 's8f2R'\n+*/\n+function randomId(s)\n+{\n+    var text = \"\";\n+    var possible = \"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789\";\n+\n+    for( var i=0; i < s; i++ )\n+        text += possible.charAt(Math.floor(Math.random() * possible.length));\n+\n+    return text;\n+}\n+\n+(function() {\n+    var lastTime = 0;\n+\n+    /*\n+    * Redefinition of window.requestAnimationFrame but with more parameters\n+    */\n+    window.softRequestAnimationFrame = function(callback, startTime, element, property, start, end, unit, duration) {\n+        var currTime = new Date().getTime();\n+        var timeToCall = Math.max(0, 1 - (currTime - lastTime));\n+        var id = window.setTimeout(function() {\n+          callback((currTime + timeToCall), startTime, element, property, start, end, unit, duration);\n+        }, timeToCall);\n+        lastTime = currTime + timeToCall;\n+        return id;\n+    };\n+\n+    window.softCancelAnimationFrame = function(id) {\n+        clearTimeout(id);\n+    };\n+}());"
    },
    {
      "sha": "0c1043007e761c327f2e0621b89a895aa47c0329",
      "filename": "src/js/soft.js",
      "status": "added",
      "additions": 168,
      "deletions": 0,
      "changes": 168,
      "blob_url": "https://github.com/Rominou34/soft-css/blob/787fccaf67c09d5966b19dea4bcf723cd9be0ae5/src/js/soft.js",
      "raw_url": "https://github.com/Rominou34/soft-css/raw/787fccaf67c09d5966b19dea4bcf723cd9be0ae5/src/js/soft.js",
      "contents_url": "https://api.github.com/repos/Rominou34/soft-css/contents/src/js/soft.js?ref=787fccaf67c09d5966b19dea4bcf723cd9be0ae5",
      "patch": "@@ -0,0 +1,168 @@\n+/*\n+* Soft CSS - The tweakable CSS framework\n+* Romain Arnaud - 2016\n+*/\n+\n+\n+\n+\n+\n+\n+/****************************** CUSTOM ELEMENTS *******************************/\n+\n+/*************** SOFT POPUP ***************/\n+\n+/*\n+* This function is the constructor to display <soft-popup> notifications\n+* param is an array that looks like this:\n+* params:\n+* type = alert type ( defaults are success, info, warning and alert ),\n+* header = Header message ( the message displayed in bold at the top ),\n+* msg = Message ( the message displayed )\n+*/\n+var soft = {\n+  notifs: [],\n+  popup: function(type, header, msg) {\n+    // Creating the element and the mask\n+    var softpopupmask = document.createElement(\"div\");\n+    softpopupmask.className = \"soft-popupmask\";\n+\n+    var softpopup = document.createElement(\"div\");\n+    softpopup.className = \"soft-popup \";\n+\n+    // Getting the corresponding color\n+    var color = null;\n+    switch(type) {\n+      case \"success\":\n+        color = \"green\"; break;\n+      case \"info\":\n+        color = \"blue\"; break;\n+      case \"warning\":\n+        color = \"yellow\"; break;\n+      case \"alert\":\n+        color = \"red\"; break;\n+    }\n+\n+    // Adding the text inside the element\n+    if(color !== null) {\n+      softpopup.innerHTML = \"<span>\" + header + \"</span>\"+\n+      \"<div><p>\" + msg + \"</p></div><button class=\\\"\"+color+\"\\\">Hide</button>\";\n+    } else {\n+      softpopup.innerHTML = \"<span>\" + header + \"</span>\"+\n+      \"<div><p>\" + msg + \"</p></div><button>Hide</button>\";\n+    }\n+\n+    try {\n+      softpopup.classList.add(type);\n+    } catch(err) {\n+      console.log(err.message);\n+    }\n+    // To hide the element on click\n+    var button = softpopup.querySelector(\"button\");\n+    button.addEventListener(\"click\", function() {\n+      this.parentElement.parentElement.remove();\n+      this.parentElement.remove();\n+    });\n+    document.body.appendChild(softpopupmask);\n+    softpopupmask.appendChild(softpopup);\n+  },\n+\n+\n+  /*************** SOFT PROGRESS BARS ***************/\n+\n+  /*\n+  * Function used to create progress bars\n+  * params:\n+  * minV = minimum value\n+  * maxV = maximum value\n+  * prog = current progress\n+  * type = boolean ( if 0, we display \"currentValue/maxValue\", if 1, we display\n+  * \"x %\" )\n+  */\n+  progressBar: function(minV, maxV, elem, height) {\n+    this.minV = minV;\n+    this.maxV = maxV;\n+    var softprogress = document.createElement(\"div\");\n+    softprogress.className = \"soft-progress\";\n+    softprogress.style.height = height;\n+\n+    softprogress.setAttribute(\"data-minv\",this.minV);\n+    softprogress.setAttribute(\"data-maxv\",this.maxV);\n+    softprogress.innerHTML = \"<div></div>\";\n+    softprogress.querySelector(\"div\").style.width = 0 + \"%\";\n+    this.element = softprogress;\n+    elem.appendChild(softprogress);\n+  },\n+\n+  /*this.progressBar.prototype.setProgress = function(prog) {\n+    var percent = Math.round(((prog-this.minV) / (this.maxV-this.minV))*100);\n+    if(percent > 100) { percent = 100; }\n+    this.element.querySelector(\"div\").style.width = percent + \"%\";\n+  },*/\n+\n+\n+\n+\n+  /*************** SOFT NOTIFICATIONS ***************/\n+\n+  notification: function(type, msg, t) {\n+    var not = document.createElement(\"div\");\n+    var id = randomId(8);\n+    not.className = \"soft-notif \" + type;\n+    not.innerHTML = msg;\n+    var pos = 0;\n+    for(var k in this.notifs) {\n+      if (this.notifs.hasOwnProperty(k)) {\n+        for(var i=0; i<this.notifs.length+1; i++) {\n+          var b = false;\n+          for(var j in this.notifs) {\n+            if(this.notifs[j][1]===i) {\n+              b=true;\n+            }\n+          }\n+          if(b===false) {\n+            pos=i;\n+            break;\n+          }\n+        }\n+      }\n+    }\n+    not.style.bottom = ((pos*56)+10) + \"px\";\n+    this.notifs.push([id,pos]);\n+    document.body.appendChild(not);\n+    setTimeout(function() {\n+      fadeOut(not, t/2, 1);\n+      //not.remove();\n+      var rank;\n+      for(var j in this.notifs) {\n+        if(this.notifs[j][0]===id) {\n+          rank=j;\n+          break;\n+        }\n+      }\n+      soft.notifs.splice(j,1);\n+    }, t);\n+  },\n+\n+  animateStep: function(timestamp, start, el, prop, st, en, un, dur) {\n+    var startTime;\n+    if (!start) {\n+      startTime = timestamp;\n+    } else {\n+      startTime = start;\n+    }\n+    var progress = timestamp - startTime;\n+    if(progress > dur) { // We use this so we don't go over 100%\n+      progress = dur;\n+    }\n+    el.style.setProperty(prop, (st+((progress/dur)*(en-st))) + un);\n+    if (progress < dur) {\n+      window.softRequestAnimationFrame(soft.animateStep, startTime, el, prop, st, en, un, dur);\n+    }\n+  },\n+\n+  animate: function(el, prop, st, en, un, dura) {\n+    window.softRequestAnimationFrame(soft.animateStep, null, el, prop, st, en, un, dura);\n+  }\n+\n+};"
    }
  ]
};
