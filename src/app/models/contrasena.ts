export class Contrasena {

    public id_user: number
    public contrasena: string
    public contrasenaNueva: string
    public contrasenaRepite: string

    constructor(id_user: number, contrasena: string, contrasenaNueva: string, contrasenaRepite: string) {
        this.id_user = id_user;
        this.contrasena = contrasena;
        this.contrasenaNueva = contrasenaNueva;
        this.contrasenaRepite = contrasenaRepite;
    }

}
