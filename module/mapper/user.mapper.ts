import {Instance} from "noomi";
import {User} from "../entity/user";
import {R} from "../common/R.common";

@Instance(UserMapper)
export class UserMapper {

    public async addUser(user: User): Promise<R<User>> {
        const saveResult: User = <User>await user.save();
        return saveResult ? R.success(saveResult, '用户信息保存成功'): R.error(null, '用户信息保存失败')
    }
}