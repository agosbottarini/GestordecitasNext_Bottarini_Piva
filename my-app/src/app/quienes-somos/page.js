import Image from 'next/image';

export default function QuienesSomos(){
    return(
        <section style={{marginLeft: "25vw", marginTop: "5vw", display: "flex", flexDirection: "column", marginBottom: "11vw", padding: "2vw"}}>
        <div>
           <h1 style={{fontSize: "2vw"}}>
            Quienes Somos?
            </h1>
        </div>

        <div style={{width: "60%"}}>
        <p style={{fontSize: "1vw"}}>
            Hola! Somos <strong>Agotina Bottarini</strong> y <strong>Joaquin Piva</strong>. Ambos somos actualmente estudiantes de la Escuela ORT, y 
            nos encontramos cursando 5to año de <strong>Bachiller en informática con certificación jurisdiccional en diseño y desarrollo de aplicaciones
            web y móviles.</strong>.
        </p>
        </div>

        <div style={{marginTop: "3vw"}}>
            <Image
            src='/assets/Agos.jpg'
            alt="Descripción de la imagen"
            width={150} 
            height={150} 
            style={{marginRight: "5vw"}}
            />    

            <Image
            src='/assets/Joaco.png'
            alt="Descripción de la imagen"
            width={150} 
            height={150} 
            />  
        </div>

        </section>

    )
}