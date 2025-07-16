// COMPONENTS
import CreateSection from '../components/dashboard/sections/CreateSection';
import HomeSection from '../components/dashboard/sections/HomeSection';
import SettingsSection from '../components/dashboard/sections/SettingsSection';
import ContainerFilter from '../components/dashboard/tournaments-filter/ContainerFilter';

// CONSTANTS
import { sectionTitles, statusFilters } from '../constants/constanst';



export const getTitle = (section) => sectionTitles[section] || `Bienvenido a Tournament-Lab, ${localStorage.getItem('user_name').toUpperCase()}`;

const sectionComponentMap = {
    inicio: <HomeSection />,
    crear: <CreateSection />,
    configuracion: <SettingsSection />,
    totales: <ContainerFilter statusFilter={statusFilters.totales} />,
    completados: <ContainerFilter statusFilter={statusFilters.completados} />,
    activos: <ContainerFilter statusFilter={statusFilters.activos} />,
    cancelados: <ContainerFilter statusFilter={statusFilters.cancelados} />
};

export const renderSection = (section) => sectionComponentMap[section] || <HomeSection />;
