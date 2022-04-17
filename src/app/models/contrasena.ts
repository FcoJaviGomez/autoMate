export class Contrasena {

    public id_user: number
    public contrasena: string
    public contrasenaNueva: string
    public contrasenaRepite: string
    
    constructor(user, contrasena, contrasenaNueva, contrasenaRepite)
    {
        this.id_user= user;
        this.contrasena = contrasena;
        this.contrasenaNueva= contrasenaNueva;
        this.contrasenaRepite= contrasenaRepite;
    }
    
}
