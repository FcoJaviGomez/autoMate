export class Mantenimiento {
    public id_maintenance: number
    public id_user: number
    public name: string
    public type: string
    public subtype: string
    public subsubtype: string
    public description: string
    public cost: number
    public stard_date: string
    public end_date: string

    constructor(id_maintenance: number = 0, id_user: number = 0, name: string, type: string, subtype: string,
        subsubtype: string, description: string, cost: number, stard_date: string, end_date: string) {
        this.id_maintenance = id_maintenance;
        this.id_user = id_user;
        this.name = name;
        this.type = type;
        this.subtype = subtype;
        this.subsubtype = subsubtype;
        this.description = description;
        this.cost = cost;
        this.stard_date = stard_date;
        this.end_date = end_date;
    }
}
