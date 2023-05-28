import React, { useEffect, useState } from 'react';
import './styles/listar.css';
import { useNavigate } from "react-router-dom";
import { FormattedDate, FormattedMessage } from 'react-intl';

function Listar(props) {
    const [data, setData] = useState([]);
    const [cafe, setCafe] = useState({});

    useEffect(() => {
        getData();
        setCafe({});
    }, []); 



    const getData = async () => {
        console.log("fetching data");
        try{
            const response = await fetch('http://localhost:3001/cafes', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            const cafes = await response.json();
            setData(cafes);
            //renderData(data);

        } catch (error) {
            console.log('Data fetch failed:', error);
        }
    };

    const renderData = () => {
        if (data) {
            console.log("here");
            console.log(data);
            return data.map((cafe) => (
                <tr key={cafe.id} onClick={e => {e.preventDefault(); chooseCafe(cafe.id)}}>
                    <th scope="row">{cafe.id}</th>
                    <td>{cafe.nombre}</td>
                    <td>{cafe.tipo}</td>
                    <td>{cafe.region}</td>
                </tr>
            ));
        }
        else {
            return ("No hay cafes");
        }
    }

    const renderOne = () => {
        if (Object.keys(cafe).length === 0) {
            return ("");
        }
        if (cafe && cafe.status !== "error") {
            console.log(cafe);
            console.log(cafe.fech_cultivo);

            let date = ""
            if (cafe.fecha_cultivo) {
                date =  (<FormattedDate 
                            value={new Date(cafe.fecha_cultivo)}
                            year='numeric'
                            month='long'
                            day='numeric'
                            weekday='long'
                        />);
            }

            return (
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">{cafe.nombre}</h5>
                        <h6 className="card-subtitle mb-2 text-muted">
                            {date}
                        </h6>
                        <img className="cafe-imagen" src={cafe.imagen} alt="imagen cafe"></img>
                        <p className="card-text"><FormattedMessage id="Notas" /></p>
                        <p className="card-text">{cafe.notas}</p>
                        <p className="card-text"><FormattedMessage id="Altura" />{cafe.altura}<FormattedMessage id="msnm" /></p>
                    </div>
                </div>
            );
        }
        else {
            return ("No hay cafes");
        }
    }

    const chooseCafe = async (id) => {
        console.log("fetching detail");
        try{
            const response = await fetch('http://localhost:3001/cafes/'+id, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            const cafe = await response.json();
            setCafe(cafe);
        } catch (error) {
            console.log('Data fetch failed:', error);
        }
    };

    return (
        <div className="listar">
            <div className="container">
                <div className='row'>
                    <div className='col-8'>
                        <table className="table">
                            <thead className="table-dark">
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col"><FormattedMessage id="Nombre" /></th>
                                    <th scope="col"><FormattedMessage id="Tipo" /></th>
                                    <th scope="col"><FormattedMessage id="Region" /></th>
                                </tr>
                            </thead>
                            <tbody className='table-group-divider'>
                                {renderData()} 
                            </tbody>
                        </table>
                    </div>
                    <div className='col-4'>
                        {renderOne()}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Listar;