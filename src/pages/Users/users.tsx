import Menu from "../../components/Menu/menu"

import remove from '../../assets/images/remove.png'
import edit from '../../assets/images/edit.png'

import './users.scss'

const Users = () => {
  return (
    <div>
      <Menu />
      <div className="table-content">
        <table>
            <tr>
                <th>Nome</th>
                <th>E-mail</th>
                <th>Status</th>
                <th>Editar</th>
                <th>Remover</th>
            </tr>
            <tr>
                <td>Bruce Wayne</td>
                <td>bruce.wayne@wayne.com</td>
                <td>Ativo</td>
                <td><img src={edit} className="icons" alt="edit"></img></td>
                <td><img src={remove} className="icons" alt="remove"></img></td>
            </tr>
        </table>
      </div>
    </div>
  );
};

export default Users;
