
import axios from 'axios';

const URL = 'https://5f65607dfb1b5700169c9b32.mockapi.io/usuarios'

const obtenerUsuarios = async () => {
    try {
      let { data } = await axios.get(URL);
      return data;
    } catch (error) {
      return error;
    }
  };


  const crearUsuarios = async (objProducto) => {
    try {
      let headers = {
        "Content-Type": "application/json",
      };
      let { data } = await axios.post(URL, objProducto, { headers });
      return data;
    } catch (error) {
      return error;
    }
  };

export {
    obtenerUsuarios,
    crearUsuarios
}