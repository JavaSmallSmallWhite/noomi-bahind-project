import {BaseModel, DataType, DataValidator} from "noomi";

export class UserModel extends BaseModel{

    @DataType('string')
    @DataValidator({
        betweenLength: [6, 15]
    })
    userName: string

    @DataType('string')
    @DataValidator({
        betweenLength: [8, 16]
    })
    password: string

    @DataValidator({
        in: [['F', 'M']]
    })
    userSex: string

    @DataType('string')
    @DataValidator({
        email: []
    })
    email: string

    @DataType('string')
    @DataValidator({
        mobile: []
    })
    phoneNumber: string

    @DataValidator({
        in: [['Y', 'N']]
    })
    isAdmin: string

    @DataType('string')
    @DataValidator({
        idno: []
    })
    identityCard: string
}