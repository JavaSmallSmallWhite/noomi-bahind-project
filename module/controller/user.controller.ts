import {BaseRoute, DataModel, Inject, NullCheck, Route, Router} from "noomi";
import {UserService} from "../service/user.service";
import {UserModel} from "../model/user.model";
import {User} from "../entity/user";
import {R} from "../common/R.common";

@Router({
    namespace: '/user',
    path: '*'
})
@DataModel(UserModel)
class UserController extends BaseRoute {

    /**
     * 用户业务层
     * @private
     */
    @Inject(UserService)
    private userService: UserService

    @Route('/add')
    @NullCheck(['userName', 'password', 'phoneNumber', 'userSex', 'email', 'isAdmin', 'identityCard'])
    public async addUser(): Promise<R<User>> {
        const result: R<User> = await this.userService.addUser(this.model.userName,this.model.password,
            this.model.phoneNumber, this.model.userSex, this.model.email, this.model.isAdmin, this.model.identityCard)
        return result
    }
}

