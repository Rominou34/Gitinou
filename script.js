window.onload = function() {
  var cont = document.querySelector("#cont");
  /*for(var i in data.files) {
    cont.innerHTML += escapeHtml(data.files[i].patch);
  }*/
  for(var i in data.files) {
    // The block that will contain everything concerning the commit
    var block = document.createElement("div");
    block.classList.add("file-block");

    // The title of the box ( name of the file )
    var title = document.createElement("div");
    title.classList.add("file-title");
    title.innerHTML = data.files[i].filename;
    block.appendChild(title);
    cont.appendChild(block);

    // The block used for overflow: scroll
    var blockT = document.createElement("div");
    blockT.classList.add("scrollBlock");
    block.appendChild(blockT);

    var commitCode = document.createElement("div");
    commitCode.classList.add("codeBlock");
    blockT.appendChild(commitCode);
    
    displayDiff(commitCode, data.files[i].patch);

  }

}

function displayDiff(el, patch) {
  var text = document.createElement("p");
  /*
  * If cursor is true, the next time we meet a "@@" it will give use the line
  * When it is false, we already have the line number and the next "@@" will
  * be the closing one
  */
  var cursor = false;
  /*
  * The string representing the line number
  * Example: "@@ -15", num = " -15"
  */
  var num="";
  /*
  * The line number
  */
  var line = 0;
  for(var j=0; j < patch.length; j++) {
    if(patch[j] == " " && patch[j-1] == "@" && patch[j-2] == "@" && !cursor) {
      cursor = true;
      for(var k=j; k < patch.length; k++) {
        if(patch[k]==",") {
          line = -1*(parseInt(num));
          num="";
          break;
        } else {
          num += patch[k];
        }
      }
    }
    // When we meet a new line, we create a new p element
    if(patch[j] == "\n") {
      cursor = false;
      el.appendChild(text);
      text = document.createElement("p");

      // If this line is an addition we put the line number and put it green
      if(patch[(j+1)] == "+") {
        text.classList.add("addition");
        text.innerHTML = line + createSpace(line);
        line++;
      } else {
        // If it is a deletion we don't put the line number and put it red
        if(patch[(j+1)] == "-") {
          text.classList.add("deletion");
          text.innerHTML = "    ";
        } else {
          text.innerHTML = line + createSpace(line);
          line++;
        }
      }
    } else {
      text.innerHTML += patch[j];
    }
  }
  el.appendChild(text);
}

function createSpace(num) {
  var n=0, str="";
  for(var i=0; i < num.toString().length; i++) {
    n++;
  }
  for(var j=n; j<4; j++) {
    str+=" ";
  }
  return str;
}

function escapeHtml(unsafe) {
    return unsafe
         .replace(/&/g, "&amp;")
         .replace(/</g, "&lt;")
         .replace(/>/g, "&gt;")
         .replace(/"/g, "&quot;")
         .replace(/'/g, "&#039;");
 }
