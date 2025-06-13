export const getTitle = (section) => {
        switch(section){
            case "totales" : return "Torneos Totales";
            case "completados" : return "Torneos Completados";
            case "activos" : return "Torneos Activos";
            case "cancelados" : return "Torneos Cancelados";
            default: return "DashBoard"
        }
    }

export const renderSection = (section) => {
    switch(section){
        case "totales" : return <p>Aqui va el contenido de torneos totales</p>;
        case "completados" : return <p>Aqui va el contenido de torneos completados</p>;
        case "activos" : return <p>Aqui va el contenido de torneos activos</p>;
        case "cancelados" : return <p>Aqui va el contenido de torneos cancelados</p>;
        default: return <p>Panel de control</p>
    }
}       
