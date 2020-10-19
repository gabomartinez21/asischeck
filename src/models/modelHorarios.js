import axios from 'axios';

const URL = 'https://5f65607dfb1b5700169c9b32.mockapi.io/horarios';

const obtenerHorarios = async () =>{
    try {
        let { data } = await axios.get(URL);
        return data;
      } catch (error) {
        return error;
      }
}

 const obtenerHorariosUsuario = async (ids) => {
    try {
        let dataTotal = ids.map(async (id) => {
            let { data } = await axios.get(URL + `/${id}`);
            return data;
        })
        return dataTotal;
    } catch (error) {
        return error;
    }
 }
