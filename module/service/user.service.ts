import {Inject, Transactioner} from "noomi";
import {User} from "../entity/user";
import {UserMapper} from "../mapper/user.mapper";
import {R} from "../common/R.common";
import {DateUtil} from "../util/date.util";
const md5 = require('md5')

@Transactioner()
export class UserService {

    @Inject(UserMapper)
    private userMapper: UserMapper

    /**
     * 添加用户信息
     * @param userName 用户名
     * @param password 密码
     * @param userSex 性别 F：女 M: 男
     * @param email 邮箱 不填生成默认邮箱 1234567890@qq.com
     * @param phoneNumber 手机号
     * @param isAdmin 是否管理员  是管理员 Y 不是管理员 N
     * @param identityCard 身份证 注册默认为随机生成
     */
    public async addUser(userName: string, password: string, phoneNumber: string, userSex?: string,
                         email?:string, isAdmin?: string, identityCard?: string): Promise<R<User>> {
        const user: User = new User()
        user.userName = userName
        user.password = md5(password)
        user.phoneNumber = phoneNumber
        user.userSex = userSex ?? 'M'
        user.email = email ?? '1234567890@qq.com'
        user.isAdmin = isAdmin ?? 'N'
        user.identityCard = identityCard ?? '110101200007288603'
        user.createTime = DateUtil.dateFormat(new Date())
        user.updateTime = user.createTime
        const result: R<User> = await this.userMapper.addUser(user)
        return result
    }
}