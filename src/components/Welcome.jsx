import welceramica from "../assets/welceramica.jpg"

const Welcome = () => {
  return (
    <div className="welcome">
        <h1 className="tituloWelc">TURÚ CERAMICA</h1>
        <img className="imagWelc" src={welceramica} alt="" />
    </div>
  )
}

export default Welcome