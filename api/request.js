// www.jianshu.com/p/f9c1d2fde321
// www.jianshu.com/p/da32d38962e7
const baseURL = "https://some-domain.com/api/";

function request(
  method,
  url,
  data,
  header = { "content-type": "application/json" }
) {
  return new Promise(function (resolve, reject) {
    wx.request({
      url: baseURL + url,
      method: method,
      data: method === POST ? JSON.stringify(data) : data,
      header: header,
      success(res) {
        if (res.statusCode === 200) {
          //200: 服务端业务处理正常结束
          resolve(res);
        } else {
          //其它错误，提示用户错误信息
          if (this._errorHandler != null) {
            //如果有统一的异常处理，就先调用统一异常处理函数对异常进行处理
            this._errorHandler(res);
          }
          reject(res);
        }
      },
      fail(err) {
        //请求失败
        reject(err);
      },
      complete(e) {
        console.log(res);
      },
    });
  });
}

module.exports = request