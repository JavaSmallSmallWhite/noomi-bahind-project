import {HttpRequest, HttpResponse, Instance, WebHandler} from "noomi";
import {R} from "../common/R.common";

@Instance(BehindFilter)
class BehindFilter {
    @WebHandler(/\/.*/, 2)
    private async doWebBehindHandler(result: any, request: HttpRequest, response: HttpResponse): Promise<any> {
        if (result instanceof Error) {
            return {data: R.error(null, JSON.parse(result.message))}
        }
        return result
    }
}