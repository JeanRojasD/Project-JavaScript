import Menu from "../../components/Menu/menu"

import remove from '../../assets/images/remove.png'
import edit from '../../assets/images/edit.png'

import users from '../../assets/data/users.json'

import './users.scss'

const Users = () => {
  return (
    <div>
      <Menu />
      <div className="table-content">
        <table>
            <tbody>
                <tr>
                    <th>Nome</th>
                    <th>E-mail</th>
                    <th>Status</th>
                    <th>Editar</th>
                    <th>Remover</th>
                </tr>
                {users.map((content) => (
                    <tr key={content.id}>
                        <td>{content.name}</td>
                        <td>{content.email}</td>
                        <td>{content.status ? 'Ativado' : 'Desativado'}</td>
                        <td><img src={edit} className="icons" alt="edit"></img></td>
                        <td><img src={remove} className="icons" alt="remove"></img></td>
                    </tr>
                ))}
            </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
