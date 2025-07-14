const Container = ({ children, title, isMenuCollapsed }) => (
    <div className={`dashboard-content${isMenuCollapsed ? ' collapsed' : ''}`}>
        <div className="content-box">
            <h2>{title}</h2>
            <div>{children}</div>
        </div>
    </div>
);

export default Container;
