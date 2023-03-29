import { Menu } from "../../components/Menu/menu";

import remove from "../../assets/images/remove.png";
import edit from "../../assets/images/edit.png";

import orders from "../../assets/data/orders.json";

import "./orders.scss";

const Orders = () => {
  return (
    <div>
      <Menu />
      <div className="table-content">
        <table>
          <tbody>
            <tr>
              <th>Pedido</th>
              <th>Usuario</th>
              <th>Status</th>
              <th>Editar</th>
              <th>Remover</th>
            </tr>
            {orders.map((content) => (
              <tr key={content.id}>
                <td>{content.order}</td>
                <td>{content.user.name}</td>
                <td>{content.status ? 'Entregue' : 'Pendente'}</td>
                <td className="icons-align"><img src={edit} className="icons" alt="edit"></img></td>
                <td className="icons-align"><img src={remove} className="icons" alt="remove"></img></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Orders