import React from 'react'
const LayoutMonopoli = (props) => {

    const _renderMap = () => {
        const rows = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
        return rows.map((row, index) => {
            const type = row === 'one' || row === 'nine' ? 'row' : 'colum'
            return (
                <div key={index} className="row justify-content-center">
                    {
                        _renderColums(row, type)
                    }
                </div>
            )
        })
    }

    const _renderColums = (alias, type) => {
        const elements = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        return elements.map((element, index) => {
            return (
                <div
                    className={`col-1`}
                    key={index}
                    id={`${alias}-${element}`}>
                    {
                        _renderImage(type, index)
                    }
                </div>
            )
        })
    }

    const _renderImage = (type, index) => {
        if (type === 'row') {
            return (
                <img
                    src="/images/way.jpg"
                    alt="Smiley face"
                    width="100"
                    height="75" />
            )
        } else {
            const allowIndex = [0, 8]
            if (allowIndex.includes(index)) {
                return (
                    <img
                        src="/images/cam.jpg"
                        alt="Smiley face"
                        width="100"
                        height="75" />
                )
            }
        }
    }

    return (
        <div className="card">
            <div className="card-header">

                <h1>Juego Camino y Preguntas <span className="badge badge-danger">Mariano Galvez</span></h1>
                <h3>Bienvenido<span className="badge badge-success" style={{ marginLeft: '15px' }}>{props.user.userName}</span></h3>

                <button
                    onClick={props._openModalRankingTable}
                    className="btn btn-warning"

                >Ver tabla de Posiciones</button>

                <button
                    onClick={props._startGame}
                    className="btn btn-primary"
                    style={{ marginLeft: '10px' }}>Tirar dados</button>

                <button
                    onClick={props._exitOfTheGame}
                    className="btn btn-danger"
                    style={{ float: 'right', marginRight: '20px' }}>Salir</button>



            </div >
            <div className="card-body" style={{
                backgroundImage: 'url(/images/8.jpg)'
            }}>
                <div className="row">
                    <div className="alert alert-success" role="alert">
                        Aciertos: <strong>{props.user.goodQuestions}</strong>
                    </div>
                    <div className="alert alert-danger" role="alert" style={{ marginLeft: '10px' }}>
                        Errores: <strong>{props.user.badQuestions}</strong>
                    </div>
                </div>
                {
                    _renderMap()
                }
            </div>
        </div >
    )
}

export default LayoutMonopoli