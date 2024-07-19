import React from 'react';

export default function ResumePage() {
    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1>My Résumé</h1>
            <a href="/Atharva_Resume_2.pdf" target="_blank" rel="noopener noreferrer">
                <button style={{
                    padding: '10px 20px',
                    fontSize: '16px',
                    color: '#fff',
                    backgroundColor: '#007BFF',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer',
                    textDecoration: 'none'
                }}>
                    Download Resume
                </button>
            </a>
        </div>
    );
}
