import {BaseEntity,Entity,Column,Id} from 'relaen';

@Entity("t_user")
export class User extends BaseEntity{
	@Id()
	@Column({
		name:'user_id',
		type:'int',
		nullable:false
	})
	public userId:number;

	@Column({
		name:'user_name',
		type:'string',
		nullable:false,
		length:10
	})
	public userName:string;

	@Column({
		name:'password',
		type:'string',
		nullable:false,
		length:32
	})
	public password:string;

	@Column({
		name:'user_sex',
		type:'string',
		nullable:false,
		length:1
	})
	public userSex:string;

	@Column({
		name:'phone_number',
		type:'string',
		nullable:false,
		length:11
	})
	public phoneNumber:string;

	@Column({
		name:'email',
		type:'string',
		nullable:false,
		length:30
	})
	public email:string;

	@Column({
		name:'is_admin',
		type:'string',
		nullable:false,
		length:1
	})
	public isAdmin:string;

	@Column({
		name:'identity_card',
		type:'string',
		nullable:false,
		length:18
	})
	public identityCard:string;

	@Column({
		name:'create_time',
		type:'date',
		nullable:false
	})
	public createTime:string;

	@Column({
		name:'update_time',
		type:'date',
		nullable:false
	})
	public updateTime:string;

	constructor(idValue?:number){
		super();
		this.userId = idValue;
	}
}