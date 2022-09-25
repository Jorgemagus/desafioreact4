import React from "react";
import { useState, useEffect } from "react";



function MyApi() {

    const [characters, setCharacters] = useState([]);
    const [buscar, setBuscar] = useState("");
    const [order, setOrder] = useState("");

    const handleSearch = (e) => {
        setBuscar(e.target.value)
    }

    const handleClick = () => {
        const auxArray = order.slice(0).sort((a, b) => a.name.localeCompare(b.name));
        setCharacters(auxArray);
    }

    useEffect(() => {
        fetchCharacters();
    }, []);

    const fetchCharacters = async () => {
        const url = 'https://rickandmortyapi.com/api/character';
        const response = await fetch(url)
        const data = await response.json()
        setCharacters(data.results);
        setOrder(data.results);
    }
    return (
        <>
            <input className="form-control-search" onChange={handleSearch} placeholder="Filtrar por Personaje" type="text" />
            <br></br>
            <button type="button" onClick={handleClick} className="btn btn-dark mx-2">Orden alfabético</button>
            <div className="row">

                {characters.filter((character) => {
                    return (character.name.toLowerCase().includes(buscar.toLowerCase()));


                }).map((item, index) => {
                    return (
                        <div key={index} className="col col-xs-10 col-sm-8 col-md-6 col-lg-3 mt-5 mx-auto">
                            <div className="card" style={{ maxWidth: "350px", minWidth: "200px" }}>
                                <img src={item.image} alt="" />
                                <div className="card-body">
                                    <h4 className="card-title">{item.name}</h4>
                                </div>
                            </div>
                        </div>
                    )
                })
                }
            </div >
        </>
    );
};
export default MyApi;
