import {App, HttpRequest, HttpResponse, Instance, Session, WebFilter} from "noomi";
const url = require('url')
// @Instance(FrontFilter)
// class FrontFilter {
//     @WebFilter(/\/.*/, 2)
//     private async doWebFrontFilter(request: HttpRequest, response: HttpResponse): Promise<boolean> {
//         const path: string = url.parse(request.url).pathname
//         if (!path.startsWith('/login/') || !path.startsWith('/register/')) {
//             const session: Session = await request.getSession()
//             const uuid: string = await session.get('user')
//             if (uuid) {
//                 return true
//             }
//             response.writeToClient({statusCode: 201, data: '用户未登录，无法访问'})
//         }
//         return true
//     }
// }