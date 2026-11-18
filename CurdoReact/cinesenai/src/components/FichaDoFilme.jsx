// Crie o componente FichaDoFilme com um filme fixo: título, gênero e duração em minutos. Mostre a duração no formato 
// "2h 46min" calculando as horas e os minutos com JavaScript dentro das chaves.

export const FichaDoFilme = () => {
    const titulo = "A espera de um milagre";
    const genero = "drama";
    const duracao = 120;

    const horas = Math.floor(duracao / 60);
    const minutos = duracao % 60;

    return (
        <div className="glass" style={{padding: "1rem", marginBottom: "1rem"}}>
            <h2>{titulo}</h2>
            <p>Genero: {genero}</p>
            <p>Duracao: {horas}h {minutos} min</p>

        </div>
    );
};