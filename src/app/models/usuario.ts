export class Usuario {
    public id_user: number
    public name: string
    public last_name: string
    public email: string
    public password: string
    public kilometers_car: number
    public year_car: number
    public provisional_password: string
    public provisional_date: string
    public first_log: number

    constructor(id_user: number = 0, name: string, last_name: string, email: string, password: string,
        kilometers_car: number, year_car: number, provisional_password: string, provisional_date: string,
        first_log: number) {
        this.id_user = id_user;
        this.name = name;
        this.last_name = last_name;
        this.email = email;
        this.password = password;
        this.kilometers_car = kilometers_car;
        this.year_car = year_car;
        this.provisional_password = provisional_password;
        this.provisional_date = provisional_date;
        this.first_log = first_log;
    }
}
