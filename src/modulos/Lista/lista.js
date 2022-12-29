import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { Table } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { ButtonGroup } from "react-bootstrap";
import { Button } from "react-bootstrap";
// import styles from './tarefa.module.css';

function Lista() {
    
    const [newId, setId] = useState("");
    const [newNome, setNewNome] = useState("");
    const [newSobrenome, setNewSobrenome] = useState("");
    const [newEmail, setNewEmail] = useState("");
    const [item, setItem] = useState([]);
    const [auxArray, setAuxArray] = useState([]);
    const [isEditing, setIsEditing] = useState(false);

    function handleClick(){
        setIsEditing(!isEditing);
    }
    function handleNome(event){
        const newNome = event.target.value;
        setNewNome(newNome);
    }
    function handleSobrenome(event){
        const newSobrenome = event.target.value;
        setNewSobrenome(newSobrenome);
    }
    function handleEmail(event){
        const newEmail = event.target.value;
        setNewEmail(newEmail);
    }
    function handleId(event){
        const newId = event.target.value;
        setId(newId);
    }
    function addUser() {
        setItem(prevUsers => {
            return [...prevUsers].concat({newId, newNome, newSobrenome, newEmail});
        });
        setId("");
        setNewNome("");
        setNewSobrenome("");
        setNewEmail("");
        setIsEditing(!isEditing);
    }

    const handleCheck = (event) => {
       var aux = [...auxArray];
    if(event.target.checked){
        // Inserir valor no array
        aux = [...auxArray, event.target.value];
    } else {
        aux.splice(auxArray.indexOf(event.target.value), 1);
    }
      setAuxArray(aux);
    };

    const handleDelete = () => {
        var aux = [null];
        aux.length = 0;
        item.forEach((element, index) => {
            aux[index] = element.newId;
        })
        setItem(item.filter(data => !auxArray.includes(data.newId)));
        setAuxArray([null]);
    }

    // MODO DE EDIÇÃO
    if(isEditing === true) 
    {
        return (
            <tabela-modo-edicao>
                <Container fluid>
                    {/* Dois botões para controlar ação: Salvar e Cancelar */}
                    <ButtonGroup aria-label="Basic example">
                        <Button
                            onClick={addUser}
                            className='mb-1'
                            variant='outline-success'>Salvar
                        </Button>
                        <Button 
                            onClick={handleClick}
                            className='mb-1'
                            variant='outline-warning'>Cancelar
                        </Button>
                        <Button 
                            onClick={handleDelete}
                            className='mb-1'
                            variant='outline-danger'>Excluir
                        </Button>
                    </ButtonGroup>
                    {/* Exibe tabela em modo 'edição' */}
                    <Table striped bordered hover>
                        <thead>
                        <tr>
                            <th>ID</th>
                            <th>NOME</th>
                            <th>SOBRENOME</th>
                            <th>EMAIL</th>
                        </tr>
                        </thead>
                        <tbody>
                        {item.map((itemValue, index) => (
                            <tr>
                                <td><Form.Check onChange={handleCheck} key={itemValue+'_'+index} id={index} value={itemValue.newId} label={itemValue.newId}></Form.Check></td>
                                <td>{itemValue.newNome}</td>
                                <td>{itemValue.newSobrenome}</td>
                                <td>{itemValue.newEmail}</td>
                            </tr>
                        ))}
                        <tr>
                            <td><Form.Control onChange={handleId} value={newId} name="id" size="sm" type="text" placeholder="id"></Form.Control></td>
                            <td><Form.Control onChange={handleNome} value={newNome} name="nome" size="sm" type="text" placeholder="Nome"/></td>
                            <td><Form.Control onChange={handleSobrenome} value={newSobrenome} name="sobrenome" size="sm" type="text" placeholder="Sobrenome"/></td>
                            <td><Form.Control onChange={handleEmail} value={newEmail} name="email" size="sm" type="text" placeholder="Telefone"/></td>
                        </tr>
                        </tbody>
                    </Table>
                </Container>
            </tabela-modo-edicao>
        );
    } 
    // MODO DE VISUALIZAÇÃO
    else 
    {
        return (
            <tabela-modo-visualizacao>
                <Container fluid>
                    <Button
                    onClick={handleClick}
                    className='mb-1'
                    variant='outline-secondary'>Editar
                    </Button>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>NOME</th>
                                <th>SOBRENOME</th>
                                <th>EMAIL</th>
                            </tr>
                        </thead>
                        <tbody>
                        {item.map((itemValue, index) => (
                            <tr>
                                <td>{itemValue.newId}</td>
                                <td>{itemValue.newNome}</td>
                                <td>{itemValue.newSobrenome}</td>
                                <td>{itemValue.newEmail}</td>
                            </tr>
                        ))}
                        </tbody>
                    </Table>
                </Container>
            </tabela-modo-visualizacao>
        );
    }
}

export default Lista;