/**
 * 返回结果集处理类
 */
export class R<T> {
    private meta: Meta = new Meta();    // 信息
    private data: T       // 数据
    // private map: Map<string,T> // 动态数据类型

    // 成功返回数据
    public static success<T> (data: T, msg: string): R<T> {
        let r = new R<T>()
        r.data = data
        r.meta.setStatus(200)
        r.meta.setMsg(msg)
        return r
    }

    // 失败返回错误信息
    public static error<T> (data: T,msg: string): R<T> {
        let r = new R<T> ()
        r.data = data
        r.meta.setStatus(201)
        r.meta.setMsg(msg)
        return r
    }

    // 获取data数据
    public getData() : T {
        return this.data
    }

    public getMeta(): Meta {
        return this.meta
    }

    // 修改data数据
    public setData(data: T) {
        this.data = data
    }

    // 修改meta的msg
    public setMeta(msg: string) {
        this.meta.setMsg(msg)
    }
    // 动态数据处理
    // public add<T> (key: string,value: T): R<T> {
    //     // @ts-ignore
    //     this.map.set(key,value)
    //     // @ts-ignore
    //     return this
    // }
}

// meta信息
class Meta {
    private msg: string // 提示信息
    private status: number // 状态码 200表示成功 201表示失败

    public setMsg(msg: string): void {
        this.msg = msg
    }

    public setStatus(status: number): void{
        this.status = status
    }

    public getMsg(): string {
        return this.msg
    }

    public getStatus(): number {
        return this.status
    }

}