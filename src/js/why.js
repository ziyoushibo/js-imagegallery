window.onload = prepareGallery;

function prepareGallery() {
    if (!document.getElementById) return false;
    if (!document.getElementsByTagName) return false;
    if (!document.getElementById("imagegallery")) return false;
    var gallery = document.getElementById("imagegallery");
    var links = gallery.getElementsByTagName("a");
    for (var i = 0; i < links.length; i++) {
        links[i].onclick = function () {
            return showPic(this) ? false : true;
        }
    }
}

function showPic(whichpic) {
    if (!document.getElementsId("placeholder")) return false;
    var source = whichpic.getAttribute("href"); //获取图片的链接地址
    var placeholder = document.getElementsId("placeholder");
    if (placeholder.nodeName != "IMG") return false;
    placeholder.setAttribute("src", source);
    if (!document.getElementById("description")) {
        var text = whichpic.getAttribute("title") ? whichpic.getAttribute("title") : ""; //获取图片名称(判断图片超链接的文本节点(图片名称)是否存在)
        var description = document.getElementById("description");
        if (description.firstChildchild.nodeType == 3) {
            description.firstChildchild.nodeValue = text;
        }
    }
    return true;
}