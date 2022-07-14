function setClipboardText(event) {
  event.preventDefault();
  const node = document.createElement('div');
  node.innerHTML = window.getSelection(0).toString();
  const htmlData = `${node.innerHTML}
<h4>
<p>
  文章作者： <a href='https://willin.wang'>Willin Wang</a>
</p>
<p>
  本文链接：
  <a href=${window.location.href}>
    ${window.location.href}
  </a>
</p>
<p>
  本博客所有文章除特别声明外，均为 Willin Wang 原创，采用
  <a
    rel='license'
    href='http://creativecommons.org/licenses/by-nc/4.0/'
    target='_blank'>
    知识共享署名-非商业性使用 4.0 国际许可协议
  </a>
  进行许可。
</p>`;
  const textData =
    `${window.getSelection(0).toString()}\n` +
    '版权信息\n' +
    '文章作者： Willin Wang\n' +
    `本文链接： ${window.location.href}\n` +
    '本博客所有文章除特别声明外，均为 Willin Wang 原创，采用 知识共享署名-非商业性使用 4.0 国际许可协议进行许可。';

  if (event.clipboardData) {
    event.clipboardData.setData('text/html', htmlData);
    event.clipboardData.setData('text/plain', textData);
  } else if (window.clipboardData) {
    if (typeof window !== 'undefined') {
      // eslint-disable-next-line
      window.clipboardData.setData('text', textData);
    }
  }
}

document.addEventListener('copy', (event) => {
  setClipboardText(event);
});
