export class Gastos {
    public id_user: number
    public type: string
    public cost: number

    constructor (id_user: number, type: string, cost: number)
    {
        this.id_user = id_user;
        this.type    = type;
        this.cost    = cost;
    }
}
