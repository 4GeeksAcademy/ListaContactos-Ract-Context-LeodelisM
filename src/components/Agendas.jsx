import React, { useEffect, useState } from 'react';
import useGlobalReducer from '../hooks/useGlobalReducer';
import { useNavigate } from 'react-router-dom';
import apiClient from '../apiClient';
import { AiTwotoneContacts } from "react-icons/ai";


const Agendas = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const { store, dispatch } = useGlobalReducer();
    const navigate = useNavigate();

    useEffect(() => {
        renderizarAgendas();
    }, []);

    async function renderizarAgendas() {
        setLoading(true);
        setError(null);

        try {
            const agendasData = await apiClient.getAgendaAll();

            if (agendasData) {
                dispatch({
                    type: "set_agendas",
                    payload: agendasData
                });

            } else {
                throw new Error("No se recibieron datos de agendas");
            }

        } catch (error) {
            console.error("Error al cargar agendas:", error);
            setError(error.message || "No se pudieron cargar las agendas");
            
        } finally {
            setLoading(false);
        }
    }

    const handleViewAgenda = (agendaSlug) => {

        dispatch({
            type: "create_user",
            payload: agendaSlug
        });

        navigate("/contacts");
    };

    return (
        <div className="container mt-4">
            <div className="card" style={{ borderRadius: "12px", borderColor: "#e0d6cc", marginBottom: "25px" }}>
                <div className="card-body p-4">
                    <h2 style={{ color: "#8b5a2b"}}>
                        <AiTwotoneContacts size={30}/>
                        Lista de Agendas
                    </h2>
                </div>
            </div>

            {loading ? (
                <div className="card" style={{ borderRadius: "12px", borderColor: "#e0d6cc" }}>
                    <div className="card-body p-5 text-center">
                        <div className="spinner-border" role="status" style={{ color: "#d19275" }}>
                            <span className="visually-hidden">Cargando...</span>
                        </div>
                    </div>
                </div>
            ) : error ? (
                <div className="card" style={{ borderRadius: "12px", borderColor: "#e8d0d0", backgroundColor: "#f8e8e8" }}>
                    <div className="card-body p-4" style={{ color: "#a68a7b" }}>
                        {error}
                    </div>
                </div>
            ) : store.agendas && store.agendas.length > 0 ? (
                <div className="row mt-3">
                    {store.agendas.map((agenda) => (
                        <div key={agenda.slug || agenda.id} className="col-md-4 mb-3">
                            <div className="card" style={{
                                borderRadius: "10px",
                                borderColor: "#e0d6cc",
                                overflow: "hidden",
                                backgroundColor: "#fffaf5",
                                transition: "transform 0.2s, box-shadow 0.2s"
                            }}
                                onMouseOver={(e) => {
                                    e.currentTarget.style.transform = "translateY(-5px)";
                                    e.currentTarget.style.boxShadow = "0 4px 12px rgba(209, 146, 117, 0.15)";
                                }}
                                onMouseOut={(e) => {
                                    e.currentTarget.style.transform = "translateY(0)";
                                    e.currentTarget.style.boxShadow = "none";
                                }}>
                                <div className="card-body p-4">
                                    <h5 className="card-title" style={{ color: "#8b5a2b" }}>{agenda.slug}</h5>
                                    <div className="d-flex justify-content-between align-items-center mt-3">
                                        <button
                                            className="btn btn-sm px-3"
                                            style={{
                                                backgroundColor: "#d19275",
                                                borderColor: "#d19275",
                                                color: "#fff",
                                                borderRadius: "8px"
                                            }}
                                            onClick={() => handleViewAgenda(agenda.slug)}
                                        >
                                            <i className="fa fa-eye me-1"></i> Ver agenda
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <div className="card" style={{ borderRadius: "12px", borderColor: "#e0d6cc", backgroundColor: "#f8f3ed" }}>
                    <div className="card-body p-4 text-center" style={{ color: "#a68a7b" }}>
                        <i className="fa fa-book-open mb-3" style={{ fontSize: "2rem" }}></i>
                        <p className="mb-0">No hay agendas disponibles</p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Agendas;