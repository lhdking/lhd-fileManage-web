// eslint-disable-next-line import/prefer-default-export
//根据路由路径 构建URL 菜单工具类
export function urlToList(url) {
    const urllist = url.split('/').filter(i => i);
    return urllist.map((urlItem, index) => `/${urllist.slice(0, index + 1).join('/')}`);
  }
  