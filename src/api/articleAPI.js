import request from '../utils/requeat.js'

// 向外按需导出一个函数
export const getArticleListAPI = function (page, num) {
  return request.get('/index', {
    params:
       {
         key: '6f65235d6535422899cb8c9479a956ed',
         page,
         num

       }
  })
}
