function addBreaks() {
    // var para = document.getElementById("paragraphs").checked;
    var para = 0;
    // var nopara = document.getElementById("noparagraphs").checked;
    var nopara = 1;
    var noBreaksText = document.getElementById("oldText").value;
    if (para == 1 || para == true) {
        noBreaksText = noBreaksText.replace(/(\r\n|\n|\r)/gm, "<1br /><1br />");
        re1 = /<1br \/><1br \/>/gi;
        noBreaksText = noBreaksText.replace(re1, "<2br />");
        re12 = /<1br \/>/gi;
        noBreaksText = noBreaksText.replace(re12, "");
        re13 = /<2br \/><2br \/>/gi;
        noBreaksText = noBreaksText.replace(re13, "<2br />");
        noBreaksText = noBreaksText.replace(re13, "<2br />");
        re15 = /\s+/gm;
        noBreaksText = noBreaksText.replace(re15, " ");
        re14 = /<2br \/>/gi;
        noBreaksText = noBreaksText.replace(re14, "\r\n\r\n");
        noBreaksText = noBreaksText.replace("\r\n\r\n\r\n\r\n\r\n", "\r\n\r\n");
        noBreaksText = noBreaksText.replace("\r\n\r\n\r\n\r\n", "\r\n\r\n");
        noBreaksText = noBreaksText.replace("\r\n\r\n\r\n", "\r\n\r\n");
        noBreaksText = noBreaksText.replace("\r\n\r\n\r\n", "\r\n\r\n");
    } else {
        noBreaksText = noBreaksText.replace(/(\r\n|\n|\r)/gm, "<1br /><1br />");
        re15 = /\s+/gm;
        noBreaksText = noBreaksText.replace(re15, " ");
        noBreaksText = noBreaksText.replace(/(\.\s+)/gm, ".");
        noBreaksText = noBreaksText.replace(/(\!\s+)/gm, "!");
        noBreaksText = noBreaksText.replace(/(\?\s+)/gm, "?");
        noBreaksText = noBreaksText.replace(/(\.)/gm, ".<1br /><1br />");
        noBreaksText = noBreaksText.replace(/(\!)/gm, "!<1br /><1br />");
        noBreaksText = noBreaksText.replace(/(\?)/gm, "?<1br /><1br />");
        re1 = /<1br \/><1br \/>/gm;
        noBreaksText = noBreaksText.replace(re1, "<2br />");
        re12 = /<1br \/>/gm;
        noBreaksText = noBreaksText.replace(re12, "");
        noBreaksText = noBreaksText.replace(re12, "");
        re13 = /<2br \/><2br \/>/gm;
        noBreaksText = noBreaksText.replace(re13, "<2br />");
        noBreaksText = noBreaksText.replace(re13, "<2br />");
        re14 = /<2br \/>/gm;
        noBreaksText = noBreaksText.replace(re14, "\r\n\r\n");
        noBreaksText = noBreaksText.replace("\r\n\r\n\r\n\r\n\r\n", "\r\n\r\n");
        noBreaksText = noBreaksText.replace("\r\n\r\n\r\n\r\n", "\r\n\r\n");
        noBreaksText = noBreaksText.replace("\r\n\r\n\r\n", "\r\n\r\n");
        noBreaksText = noBreaksText.replace("\r\n\r\n\r\n", "\r\n\r\n");
    }
    document.getElementById("newText").value = noBreaksText;
}

document.getElementById("clearText").addEventListener("click", function() {
    document.getElementById("oldText").value = "";
    document.getElementById("newText").value = "";
    document.getElementById("oldText").focus();
});

var textBox = document.getElementById("newText");
textBox.onfocus = function() {
    textBox.select();
    textBox.onmouseup = function() {
        textBox.onmouseup = null;
        return false;
    }
    ;
};

// COPY TO CLIPBOARD

document.getElementById("copyClip").onclick = function() {
    let text = document.getElementById("newText").value;
    copyTextToClipboard(text);
  }

async function copyTextToClipboard(text) {
  try {
    await navigator.clipboard.writeText(text);
    alert('Text copied to clipboard');
  } catch(err) {
    alert('Error in copying text: ', err);
  }
}

// LIGHT AND DARK MODE TOGGLE
const chk = document.getElementById('chk');

chk.addEventListener('change', () => {
	document.body.classList.toggle('dark');
    document.getElementById('chk-wrapper').classList.toggle('dark-wrapper');
    document.getElementById('oldText').classList.toggle('dark-form');
    document.getElementById('newText').classList.toggle('dark-form');
});