window.onload = prepareGallery;
function prepareGallery() {
    if (!document.getElementById) return false;
    if (!document.getElementsByTagName) return false;
    //判断浏览器是否支持DOM方法防止浏览器不支持网页出现运行错误

    //判断id为imagegallery的元素是否存在,如果不存在的话网页任能正常运行
    if (document.getElementById("imagegallery")) {
        var gallery = document.getElementById("imagegallery");
        var links = gallery.getElementsByTagName("a"); //这里不加判断是因为如果你连图片都没有,何谈功能。
        for (var i = 0; i < links.length; i++) {
            links[i].onclick = function () {
                //showPic(this);
                //return false;  假设showPic方法没有出现问题,return false是正确的做法,但是万一shwPic出现了问题,这个时候返回false,点击超链接将没有任何反应,
                //所以这个地方这样该更好
                return !showPic(this); //如果showPic方法出现问题,超链接任然有效符合JavaSciprt平稳退化的要求;
            }
        }
    }
}
function showPic(whichpic) {
    if (!document.getElementsByTagName("img")[0]) return false;
    var source=whichpic.getAttribute("href");//获取图片的链接地址
    var placeholder = document.getElementsByTagName("img")[0];
    if (placeholder.nodeName != "IMG") return false;
    placeholder.setAttribute("src", source);
    if (!document.getElementById("description")) return false;
    var text = whichpic.getAttribute("title") ? whichpic.getAttribute("title") : ""; //获取图片名称(判断图片超链接的文本节点(图片名称)是否存在)
    var description = document.getElementById("description");
    description.firstChild.nodeValue = text;
    return true;
}