window.onload = function() {
  var cont = document.querySelector("#content");
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

    // Deletions
    var delSpan = document.createElement("span");
    delSpan.innerHTML = "-" + data.files[i].deletions;
    delSpan.style.color = "#cc4a45";
    title.appendChild(delSpan);

    title.innerHTML += " " + data.files[i].filename + " ";

    // Additions
    var addSpan = document.createElement("span");
    addSpan.innerHTML = "+" + data.files[i].additions;
    addSpan.style.color = "#32c638";
    title.appendChild(addSpan);

    // The number of additions and deletions
    var changeBar = document.createElement("div");
    changeBar.innerHTML = displayChange(data.files[i]);
    changeBar.classList.add("change-bar");
    title.appendChild(changeBar);

    // Append that shit
    block.appendChild(title);
    cont.appendChild(block);

    // The block used for overflow: scroll
    var blockT = document.createElement("div");
    blockT.classList.add("scrollBlock");
    block.appendChild(blockT);

    // The <pre> element containing the code
    var commitCodePre = document.createElement("pre");
    blockT.appendChild(commitCodePre);

    // The code
    var commitCode = document.createElement("div");
    commitCode.classList.add("codeBlock");
    commitCodePre.appendChild(commitCode);

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

// Gets the length of the bar indicating the change
function displayChange(file) {
  var delSize = file.deletions;
  var addSize = file.additions;
  var max = 100;

  // We throttle that shit
  if(delSize > 100) {
    if(delSize > addSize) {
      max = delSize;
    } else {
      max = addSize;
    }
  }
  if(addSize > 100) {
    if(addSize > delSize) {
      max = addSize;
    } else {
      max = delSize;
    }
  }

  var delN = Math.round(delSize*20/max);
  var addN = Math.round(addSize*20/max);
  var text = '<span style="color: #cc302a;">';
  // left-pad
  /*for(var i=0; i < 10-delN; i++) {
    text+=" ";
  }*/
  for(var d=0; d < delN; d++) {
    text += "=";
  }
  text+='</span>|<span style="color: #21c328;">';
  for(var a=0; a < addN; a++) {
    text += "=";
  }
  /*for(var j=0; j < 10-addN; j++) {
    text+=" ";
  }*/
  text+='</span>';

  return text;
}
// left-pad lul
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

// Escape the HTML
function escapeHtml(unsafe) {
    return unsafe
         .replace(/&/g, "&amp;")
         .replace(/</g, "&lt;")
         .replace(/>/g, "&gt;")
         .replace(/"/g, "&quot;")
         .replace(/'/g, "&#039;");
 }
