import ContainerFilter from "../components/dashboard/container-filter/ContainerFilter";

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
        case 'totales':
            return <ContainerFilter statusFilter='Totales' />
        case 'activos':
            return <ContainerFilter statusFilter='Activo' />
        case 'cancelados':
            return <ContainerFilter statusFilter='Cancelado' />
        case 'completados':
            return <ContainerFilter statusFilter='Completado' />
        default: return <p>Sección no Disponible</p>
    }
}
