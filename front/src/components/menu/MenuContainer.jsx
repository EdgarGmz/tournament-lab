import Logo from '../Logo';
import MenuItemCard from './MenuItemCard';

const MenuContainer = () => {
    return (
        <div className='container py-5'>
            {/* Logotipo */}
            <div className='text-center mb-4'>
                <Logo />
            </div>

            {/* Tarjetas */}
            <div className="row row-cols-1 g-3">
                <MenuItemCard
                    title="Total Tournaments"
                    value="10"
                    icon="bi-trophy"
                />
                <MenuItemCard
                    title="Active Tournaments"
                    value="5"
                    icon="bi-flag-fill"
                />
                <MenuItemCard
                    title="Completed Tournaments"
                    value="3"
                    icon="bi-check-circle-fill"
                />
                <MenuItemCard
                    title="Upcoming Tournaments"
                    value="2"
                    icon="bi-calendar-event-fill"
                />
            </div>
        </div>
    )
}

export default MenuContainer;
