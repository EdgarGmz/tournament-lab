// COMPONENTS
import CreateSection from '../components/dashboard/sections/CreateSection';
import HomeSection from '../components/dashboard/sections/HomeSection';
import SettingsSection from '../components/dashboard/sections/SettingsSection';
import ContainerFilter from '../components/dashboard/tournaments-filter/ContainerFilter';

// CONSTANTS
import { sectionTitles, statusFilters } from '../constants/constanst';

export const getTitle = (section) => sectionTitles[section] || `Bienvenido a Tournament-Lab, ${localStorage.getItem('user_name').toUpperCase()}`;

export const renderSection = (section, setActiveSection) => {
    const sectionComponentMap = {
        inicio: <HomeSection />,
        crear: <CreateSection />,
        configuracion: <SettingsSection />,
        totales: <ContainerFilter statusFilter={statusFilters.totales} onSectionChange={setActiveSection} />,
        completados: <ContainerFilter statusFilter={statusFilters.completados} onSectionChange={setActiveSection} />,
        activos: <ContainerFilter statusFilter={statusFilters.activos} onSectionChange={setActiveSection} />,
        cancelados: <ContainerFilter statusFilter={statusFilters.cancelados} onSectionChange={setActiveSection} />
    }
    return sectionComponentMap[section] || <HomeSection />;
}
