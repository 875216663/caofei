//back end api, use fetch to handle restful requests and correct the response for front end to use.
//
export function ReminderApi(method, baseURL, data, params="") {
  //确保请求按照指定的方法发送，并携带正确的请求头，以便服务器正确地处理请求并返回响应
    const options = {
        method: method,
        headers: { 'Content-Type': 'application/json' }
      };
      //如果不是get，就把数据传输成json文件
      if (method !== 'GET') {
        options.body = JSON.stringify(data);
      }

    const requestURL = baseURL + params;

    
    return fetch(requestURL, options)
        .then((response) => {
            if (!response.ok) {
              //if error, print the error to console.
                console.error(response);
              }
        return response.json();
        })
}