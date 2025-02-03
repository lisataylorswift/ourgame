import React from "react";
import '../App.css'; // Подключаем стили

function TruthOrDare({ onSelect }) {
    return (
        <div>
            <h2>Выберите действие:</h2>
            <button
                onClick={() => onSelect('truth')}
                className="button truth-button"
            >
                Правда
            </button>
            <button
                onClick={() => onSelect('dare')}
                className="button dare-button"
            >
                Действие
            </button>
        </div>
    );
}

export default TruthOrDare;
