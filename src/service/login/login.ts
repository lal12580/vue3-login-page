1  import hyRequest from '..'
// 2  import { BASE_URL } from '..'/../service/config/index

3  export function accountLoginRequest(account: any) {
4    return hyRequest.post({
5      url: '/login',
6      data: account
7    })
8  }
9