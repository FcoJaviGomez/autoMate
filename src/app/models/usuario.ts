export class Usuario {
    public id_user: number
    public name: string
    public lastName: string
    public email: string
    public password: string
    public kilometers_car: number
    public year_car: number
    public provisional_password: string
    public provisional_date: string

    constructor(id_user: number = 0, name: string, lastName: string, email: string, password: string,
        kilometers_car: number, year_car: number, provisional_password: string, provisional_date: string) {
        this.id_user = id_user;
        this.name = name;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
        this.kilometers_car = kilometers_car;
        this.year_car = year_car;
        this.provisional_password = provisional_password;
        this.provisional_date = provisional_date
    }
}
