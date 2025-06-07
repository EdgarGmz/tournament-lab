import MenuItemCard from './MenuItemCard';
import UserCard from './UserCard';

const MenuContainer = () => {
    return (
        <div className='container bg-dark text-light' style={{ minHeight: '100vh' }}>
            {/* USUARIO */}
            <UserCard
                userName="Usuario"
                userImage="/public/img/logo1.png"/>

            {/* Tarjetas */}
            <div className="row row-cols-1 g-2">
                {/* TOTAL DE TORNEOS */}
                <MenuItemCard
                    title="Total de Torneos"
                    value="10"
                    icon="bi-trophy"
                />

                {/* TORNEOS ACTIVOS */}
                <MenuItemCard
                    title="Torneos Activos"
                    value="5"
                    icon="bi-flag-fill"
                />

                {/* TORNEOS COMPLETADOS */}
                <MenuItemCard
                    title="Torneos Completados"
                    value="3"
                    icon="bi bi-flag"
                />

                {/* PROXIMOS TORNEOS */}
                <MenuItemCard
                    title="Proximos Torneos"
                    value="2"
                    icon="bi bi-calendar-date"
                />

                {/* AJUSTES */}
                <MenuItemCard
                    title="Ajustes"
                    value=""
                    icon="bi bi-gear"
                />
                
                {/* CERRAR SESIÓN */}
                <MenuItemCard
                    title="Cerrar Sesión"
                    value=""
                    icon="bi bi-box-arrow-left"
                />
            </div>
        </div>
    )
}

export default MenuContainer;
