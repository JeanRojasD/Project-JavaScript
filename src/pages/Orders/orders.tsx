import Menu from "../../components/Menu/menu"

import remove from '../../assets/images/remove.png'
import edit from '../../assets/images/edit.png'

import './orders.scss'

const Orders = () => {
  return (
    <div>
      <Menu />
      <div className="table-content">
        <table>
          <tr>
            <th>Pedido</th>
            <th>Usuario</th>
            <th>Status</th>
            <th>Editar</th>
            <th>Remover</th>
          </tr>
          <tr>
            <td>Batmovel</td>
            <td>Bruce Wayne</td>
            <td>Pendente</td>
            <td><img src={edit} className="icons" alt="edit"></img></td>
            <td><img src={remove} className="icons" alt="remove"></img></td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default Orders;
