import React from "react";

import '../styles/components/pages/HomePage.css';

const HomePage = (props) => {
    return(
        <main className="holder">
            <div className="homeimg">
                <img src="images/home/img01.jpg" alt="avion" />
            </div>
            <div className="columnas">
                <div className="bienvenidos left">
                    <h2>Bienvenidos</h2>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure, fugiat possimus! Tenetur id dolorum veritatis. Obcaecati in aperiam iste? Earum dignissimos debitis error commodi quibusdam. Ratione possimus, ut perferendis dicta neque cum ex non minima aliquid aut veniam, pariatur facere praesentium. Alias qui doloribus, amet aperiam fugiat recusandae nostrum obcaecati.</p>
                </div>
                <div className="testimonios right">
                    <h2>Testimonios</h2>
                    <div className="testimonio">
                        <span className="cita">Simplemente excelente</span>
                        <span className="autor">Juan Perez</span>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default HomePage;