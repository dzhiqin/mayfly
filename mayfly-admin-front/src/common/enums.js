import { Enum } from './Enum.js'

/**
 * 全局公共枚举类
 */
export default {
  // uri请求方法
  requestMethod: new Enum().add('GET', 'GET', 1).add('POST', 'POST', 2).add('PUT', 'PUT', 3).add('DELETE', 'DELETE', 4),
  // 结果枚举
  ResultEnum: new Enum().add('SUCCESS', '操作成功', 200).add('ERROR', '操作失败', 400).add('PARAM_ERROR', '参数错误', 405).add('SERVER_ERROR', '服务器异常', 500)
    .add('NO_PERMISSION', '没有权限', 501)
}