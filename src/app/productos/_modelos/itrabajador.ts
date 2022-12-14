export interface ITrabajador {
    id:                 string;
    temporada_ano:      string;
    idRazSocial:        string;
    nombre:             string;
    apellidos:          string;
    nif:                string;
    idioma:             string;
    direccion:          string;
    cp:                 string;
    poblacion:          string;
    provincia:          string;
    telefono:           string;
    email:              string;
    form_recibido:      string;
    form_recibido_date: Date;
    codex:              string;
    url_seguimiento:    string;
    envio_email:        string;
    envio_email_date:   Date;
    envio_contador:     string;
    envio_error_msg:    string;
    envio_error_date:   Date;
    tipo_listado:       string;
    sociedad:           string;
    tipo_entrega:       string;
    cantidad:           string;
    tarjeta_pack:       string;
}
