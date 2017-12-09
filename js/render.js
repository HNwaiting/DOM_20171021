var preElement = document.createElement('pre');
var codeElement = document.createElement('code');
codeElement.setAttribute('class', 'javascript');
// preElement.appendChild(codeElement);
var contentText = document.getElementsByTagName('script')[0].innerHTML;
var preContent = document.createTextNode(contentText);
codeElement.appendChild(preContent)
preElement.appendChild(codeElement);
document.getElementsByTagName('body')[0].appendChild(preElement);