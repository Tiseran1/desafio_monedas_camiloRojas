let apiURL = "https://mindicador.cl/api/";

let codigoMonedas = ["dolar", "euro"];
let grafico;

let inputMontoPesos = document.querySelector("#montoPesos");
let selectMonedaCambio = document.querySelector("#monedaCambio");
let parrafoMensaje = document.querySelector("#mensaje");
let botonBuscar = document.querySelector("#botonBuscar");
let myChart = document.querySelector("#myChart");

renderSelect(); 
botonBuscar.addEventListener("click", async function (){
    let codigoMoneda = selectMonedaCambio.value;

    let moneda= await  getMoneda(codigoMoneda);

renderGrafico(moneda);
});

async function renderSelect(){

    let monedas = await getMonedas (codigoMonedas);
    let html = "";

    for (const moneda of monedas){
        let template = `
        <option value="${moneda.codigo}">${moneda.nombre}</option>
        `;

        html += template;
    }

    selectMonedaCambio.innerHTML += html;
}
async function getMonedas(arrayCodigos){
    let monedas = [];

    for (let i = 0; i < arrayCodigos.length; i ++){
       let moneda = await getMoneda (arrayCodigos[i])
    
        monedas.push(moneda);
    }

    return monedas;
}

async function getMoneda(codigo){
    try {
        const res =  await fetch(apiURL + codigo[i]);
        let moneda = await res.json();
    
        return moneda; 
    }catch (error){
        parrafoMensaje.innerHTML = "se produjo un error en la consulta"
    }


 
}

function renderGrafico(moneda){
    let serie10Ultimos = moneda.serie.slice(0, 10);
    {/*
        {
            "fecha": "2023-02-14T03:00:00.000Z",
            "valor": 793.79
          },
          {
            "fecha": "2023-02-13T03:00:00.000Z",
            "valor": 800.78
          },
        */ 
    }
    
    const label = serie10Ultimos.map(serie => serie.fecha.slice(0, 10));
}
    {/*
        ["2023-02-14T03:00:00.000Z"
        "2023-02-13T03:00:00.000Z"]
        */ 

        const data = serie10Ultimos.map(serie => serie.valor.slice);

        const dataset = [
            {
                label: "historial ultimos10 dias",
                borderColor: "red",
                data
            }
        ];

        const conf ={
            type: "line",
            data: {
                labels,
                datasets
            }
        }
        myChart.innerHTML ="";

        if (grafico){
            grafico.destroy();
        }
        grafico = new Chart(myChart, conf);
        }